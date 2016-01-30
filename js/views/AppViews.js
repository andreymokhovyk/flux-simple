;(function(){



    function getCartState() {
        return {
            //template: AppRoutieStore.getValue()
        };
    }

    var AppView = {
        setState: function(state, state2) {
            state = state || {};

            this.state.nowShowing = state.nowShowing ? state.nowShowing : this.state.nowShowing;
            this.state.todos = state.todos ? state.todos : this.state.todos;
            this.state.payload = state2;

            this.updateView();
        },
        init: function(){
            this.state  = this.state || {
                    nowShowing: '',
                    todos: []
                };

            var el = document.querySelector('#counter');
            this.display = el.querySelector('#tab');

            AppUsersStore.addChangeListener(this.updateState.bind(this));

            var setState = this.setState;
            this.router = Router({
                '/': setState.bind(this, {nowShowing: AppConstants.ALL_ITEMS}),
                '/active': setState.bind(this, {nowShowing: AppConstants.ACTIVE_ITEMS}),
                '/completed': setState.bind(this, {nowShowing: AppConstants.COMPLETED_ITEMS})
            });
            this.router.init('/');

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

            var shownTodos = this.state.todos.filter(function (todo) {
                switch (this.state.nowShowing) {
                    case AppConstants.ACTIVE_ITEMS:
                        return !todo.completed;
                    case AppConstants.COMPLETED_ITEMS:
                        return todo.completed;
                    default:
                        return true;
                }
            }, this);

            var listHTML = '';
            var usersHTML = '';


            shownTodos.forEach(function (item) {
                usersHTML = usersHTML + '<li>' + item.title+ '<a href="#/user/'+item.id+'" class="button-list">button2</a></li>'
            });

            listHTML = '<div>list<ul>'+usersHTML+'</ul></div>';

            return this.display.innerHTML = listHTML;
        },
        updateState: function() {
            var data = AppUsersStore.getValue();
            var state = {todos: data};

            this.setState(state);
        }
    };

  window.AppView = AppView;

})();