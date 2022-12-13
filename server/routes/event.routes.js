const UserController = require("../controllers/user.controllers");
const EventController = require("../controllers/event.controllers");

// const {authenticate} = require("../config/jwt.config");


module.exports = app =>{

    //rutas usuario
    app.post('/api/login', UserController.login);
    app.get('/api/logout', UserController.logout);
    app.post('/api/register', UserController.register);
    app.get('/api/event/getAll', EventController.all_event)


    //rutas eventos
    app.post('/api/event/create',EventController.create_event);


    // app.post('/api/player', PlayerController.create_player);
    // app.get('/api/player/:id', PlayerController.get_player);
    // app.post('/api/registerPlayer', PlayerController.register_player);
    // app.post('/api/loginPlayer', PlayerController.login_player);
    // app.get('/api/logoutPlayer', PlayerController.logout_player);

}