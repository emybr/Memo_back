const passport = require('passport');
const bcrypt = require('bcrypt');
const passportLocal = require('passport-local').Strategy;
// const passportGithub = require('passport-github').Strategy;
// const { mensajes, errores } = require('../errores/errores.cjs');
const UserManager  = require('../dao/user-manager.cjs');
const userManager = new UserManager();



const passportConfig = (app) => {
    // Configuración de passport local
    passport.use(new passportLocal(
        { usernameField: 'email' },
        async (email, password, done) => {
            const user = await userManager.getUserByField('email', email);
            if (!user) {
                return done(null, false, { message: 'Credenciales inválidas' });
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return done(null, false, { message: 'Credenciales inválidas' });
            }
            return done(null, user);
        }
    ));



    // Serialización y deserialización de usuario
    passport.serializeUser((user, done) => {
        done(null, user._id);
        
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await userManager.getUserByField('_id', id);
            done(null, user);
        } catch (error) {
            done(error);
        }
    });
  


    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    app.use(passport.initialize());
    app.use(passport.session());
};

module.exports = passportConfig;