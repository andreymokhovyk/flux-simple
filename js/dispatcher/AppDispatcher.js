;(function(){
    var _prefix = 'ID_';

    var Dispatcher = function() {
        this._callbacks = {};
        this._lastID = 1;
    };

    Dispatcher.prototype.register = function(callback) {
        var id = _prefix + this._lastID++;
        this._callbacks[id] = callback;
        return id;
    };

    Dispatcher.prototype.dispatch = function(payload) {
        for (var id in this._callbacks) {
          this._callbacks[id](payload);
        }
    };

    Dispatcher.prototype.handleAction = function(actionType) {
        var _this = this;
        return function (payload) {
          return _this.dispatch({ action: actionType, payload: payload });
        };
    };

    var AppDispatcher = new Dispatcher();

    window.AppDispatcher = AppDispatcher;

})();