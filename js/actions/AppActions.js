;(function(){

    // Define action methods
    var AppActions = {

        addItem: AppDispatcher.handleAction(AppConstants.ADD_ITEM),

        removeItem: AppDispatcher.handleAction(AppConstants.REMOVE_ITEM),

        editItem: AppDispatcher.handleAction(AppConstants.EDIT_ITEM),

        receiveData: AppDispatcher.handleAction(AppConstants.RECEIVE_DATA)
    };

    window.AppActions = AppActions;

})();