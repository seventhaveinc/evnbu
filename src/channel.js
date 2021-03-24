"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
var streamer_1 = require("./streamer");
var topic_1 = require("./topic");
var Channel = /** @class */ (function (_super) {
    __extends(Channel, _super);
    function Channel(name, maxListeners) {
        if (maxListeners === void 0) { maxListeners = 0; }
        var _this = _super.call(this, name, maxListeners) || this;
        _this.topics = {};
        _this._onTopicDestroyed = _this._onTopicDestroyed.bind(_this);
        _this._onTopicEmit = _this._onTopicEmit.bind(_this);
        return _this;
    }
    Channel.prototype.emit = function (payload) {
        var payloadData = {
            channel: this.name,
            topic: '*',
            payload: payload
        };
        _super.prototype.emit.call(this, payloadData);
    };
    Channel.prototype.topic = function (name) {
        var topic = this.topics[name];
        if (typeof topic === 'undefined') {
            // create new topic
            topic = this.topics[name] = new topic_1.Topic(name, this.name, this.getMaxListeners());
            topic.getEventEmitter().on('topic_destroyed', this._onTopicDestroyed);
            topic.on(this._onTopicEmit);
        }
        return topic;
    };
    Channel.prototype.hasTopic = function (name) {
        return Boolean(this.topics[name]);
    };
    Channel.prototype.removeTopic = function (name) {
        var topic = this.topics[name];
        /* istanbul ignore else */
        if (typeof topic !== 'undefined') {
            delete this.topics[name];
            topic.destroy();
            return true;
        }
        return false;
    };
    Channel.prototype.getAllTopics = function () {
        return Object.values(this.topics);
    };
    Channel.prototype._onTopicEmit = function (payload) {
        _super.prototype.emit.call(this, payload);
    };
    Channel.prototype._onTopicDestroyed = function (name) {
        delete this.topics[name];
    };
    Channel.prototype.destroy = function () {
        for (var topic in this.topics) {
            this.removeTopic(topic);
        }
        this.emitter.emit('channel_destroyed', this.name);
        _super.prototype.destroy.call(this);
    };
    return Channel;
}(streamer_1.Streamer));
exports.Channel = Channel;
//# sourceMappingURL=channel.js.map