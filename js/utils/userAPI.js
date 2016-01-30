
var userAPI = {

  // Load mock product data from localStorage into ProductStore via Action
  getUsersData: function() {
    var data = JSON.parse(localStorage.getItem('users'));
    AppActions.receiveData(data);
  }

};