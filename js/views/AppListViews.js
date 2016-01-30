;(function(){


    function getCartState() {
        return {
        template: AppRoutieStore.getValue()
        };
    }

    var AppListView = {
        init: function(display){
            this.state = this.state || {};
            this.display = display;

            AppUsersStore.addChangeListener(this.updateState.bind(this));

            this.updateView();
        },
        setState: function(state) {
            this.state = this.state || {};
            state = state || {};
            this.state.users = state.users;

            this.updateView();
        },
        updateView:function(){
            this.render();
            this.afterRender();
        },
        afterRender: function () {
            var btn = document.querySelectorAll('.button-list');

            Array.prototype.forEach.call(btn, function(el, i){
                el.addEventListener('click', function(){
                    //AppActions.viewUser({id:el.getAttribute('data-id')})
                });
            });
        },
        render: function() {
            var listHTML = '';
            var usersHTML = '';

            if (this.state.users && this.state.users.length > 0) {
                this.state.users.forEach(function (item) {
                    console.log('item');console.log(item)
                    usersHTML = usersHTML + '<li>' + item.name+ '<a href="#/user/'+item.id+'" class="button-list">button2</a></li>'
                });
            }

            listHTML = '<div>list<ul>'+usersHTML+'</ul></div>';

            return this.display.innerHTML = listHTML;
        },
        updateState: function() {
              var data = AppUsersStore.getValue();
              var state = {users: data};

              this.setState(state);
        }
  };

  window.AppListView = AppListView;

})();