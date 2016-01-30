;(function(){
    var setLocalStorage = {
        // Load Mock Product Data Into localStorage
        init: function() {
            localStorage.clear();
            localStorage.setItem('users', JSON.stringify([
                {
                  id: '0011001',
                  title: 'Scotch.io Signature Lager',
                  completed: true
                },
                {
                    id: '0011002',
                    title: '2Scotch.io Signature Lager',
                    completed: false
                }
            ]));
        }

    };

    window.setLocalStorage = setLocalStorage;
})();