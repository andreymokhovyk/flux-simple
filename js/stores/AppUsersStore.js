;(function(){

    var AppUsersStore = {
        _data: {},
        changeCallback: [],
        init: function() {

        },
        setValue: function (data) {
            this._data = data;
            console.log('setValue')
            console.log(data)
        },
        getValue: function () {
            console.log('getValue')
            console.log(this._data)

          return this._data;
        },
        addChangeListener:function(callback){
          this.changeCallback.push(callback);
        },

        emitChange:function(){
          if (this.changeCallback.length > 0) {
            this.changeCallback.forEach(function (entry) {
              entry.call();
            });
          }
        }
    };

    AppDispatcher.register(function(payload) {
        var action = payload.action;

        switch (action) {
            case AppConstants.RECEIVE_DATA:
                AppUsersStore.setValue(payload.payload);
              break;

            default:
              return true;
        }

        AppUsersStore.emitChange();
    });

  window.AppUsersStore = AppUsersStore;



})();



