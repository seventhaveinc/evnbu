"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Streamer = void 0;
var events_1 = require("events");
var Streamer = /** @class */ (function () {
    function Streamer(name, maxListeners) {
        if (maxListeners === void 0) { maxListeners = 0; }
        this.emitter = new events_1.EventEmitter();
        if (typeof name === 'undefined' || name.length === 0) {
            throw new Error('Broadcaster must have a name');
        }
        this._name = name;
        this.emitter.setMaxListeners(maxListeners);
    }
    Object.defineProperty(Streamer.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Streamer.prototype.emit = function (payload) {
        this.emitter.emit(this._name, payload);
    };
    Streamer.prototype.addListener = function (listener) {
        return this._addListener('addListener', listener);
    };
    Streamer.prototype.on = function (listener) {
        return this.addListener(listener);
    };
    Streamer.prototype.prependListener = function (listener) {
        return this._addListener('prependListener', listener);
    };
    Streamer.prototype.once = function (listener) {
        return this._addListener('once', listener);
    };
    Streamer.prototype.prependOnceListener = function (listener) {
        return this._addListener('prependOnceListener', listener);
    };
    Streamer.prototype.removeListener = function (listener) {
        this._proxyListener('removeListener', listener);
    };
    Streamer.prototype.off = function (listener) {
        this.removeListener(listener);
    };
    Streamer.prototype.removeAllListeners = function () {
        this.emitter.removeAllListeners(this._name);
    };
    Streamer.prototype.getMaxListeners = function () {
        return this.emitter.getMaxListeners();
    };
    Streamer.prototype.setMaxListeners = function (n) {
        this.emitter.setMaxListeners(n);
    };
    Streamer.prototype.getEventEmitter = function () {
        return this.emitter;
    };
    Streamer.prototype.listeners = function () {
        return this.emitter.listeners(this._name);
    };
    Streamer.prototype.rawListeners = function () {
        return this.emitter.rawListeners(this._name);
    };
    Streamer.prototype.listenerCount = function () {
        return this.emitter.listenerCount(this._name);
    };
    Streamer.prototype._proxyListener = function (method, listener) {
        this.emitter[method](this._name, listener);
    };
    Streamer.prototype._createUnsubscribe = function (listener) {
        var _this = this;
        return function () {
            _this.emitter.removeListener(_this._name, listener);
        };
    };
    Streamer.prototype._addListener = function (method, listener) {
        this._proxyListener(method, listener);
        return this._createUnsubscribe(listener);
    };
    Streamer.prototype.destroy = function () {
        this.emitter.removeAllListeners();
    };
    return Streamer;
}());
exports.Streamer = Streamer;
//# sourceMappingURL=streamer.js.map