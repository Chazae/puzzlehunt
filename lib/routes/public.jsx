const publicRoutes = FlowRouter.group({
    name: 'public'
});

publicRoutes.route('/login', {
    name: 'login',
    action() {
        ReactLayout.render(App, {yield: <Login />});
    }
});

publicRoutes.route('/register', {
    name: 'register',
    action() {
        ReactLayout.render(App, {yield: <Register />});
    }
});

/*publicRoutes.route('/about', {
    name: 'about',
    action() {
        ReactLayout.render(App, {yield: <Login />});
    }
});*/