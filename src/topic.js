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
exports.Topic = void 0;
var streamer_1 = require("./streamer");
var Topic = /** @class */ (function (_super) {
    __extends(Topic, _super);
    function Topic(name, channel, maxListeners) {
        if (maxListeners === void 0) { maxListeners = 0; }
        var _this = _super.call(this, name, maxListeners) || this;
        _this.channel = channel;
        return _this;
    }
    Topic.prototype.emit = function (payload) {
        var payloadData = {
            channel: this.channel,
            topic: this.name,
            payload: payload
        };
        _super.prototype.emit.call(this, payloadData);
    };
    Topic.prototype.destroy = function () {
        this.emitter.emit('topic_destroyed', this.name);
        _super.prototype.destroy.call(this);
    };
    return Topic;
}(streamer_1.Streamer));
exports.Topic = Topic;
//# sourceMappingURL=topic.js.map