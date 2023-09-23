const UserManager = require('../dao/user-manager.cjs')
const userManager = new UserManager
const passport = require('passport');
const RutinasManager = require('../dao/dao-rutinas-db.cjs')

const rutinasManager = new RutinasManager



async function postResisterUser(req, res) {
    try {
        const { nombre, apellido, email, password } = req.body;

        await userManager.createUser(nombre, apellido, email, password);
        await rutinasManager.createRutinas(email);
        // res.status(201).json({ message: "Usuario creado correctamente" });
        res.redirect('https://memo-front-iota.vercel.app/login');
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ message: "Error al crear el usuario" });
    }
}

// async function postLoginUser(req, res, next) {
//     passport.authenticate('local', async (err, user, info) => {
//         if (err) {
//             return next(err);
//         }
//         if (!user) {
//             return res.status(401).send(info.message);
//         }
//         try {
//             const foundUser = await userManager.getUserByField('email', user.email);
//             if (!foundUser) {
//                 return res.status(401).send('Usuario no encontrado');
//             }
//             await userManager.setLastConnection(user.email);
//             req.session.email = user.email;
//             req.session.role = foundUser.role;
//             console.log(req.session.role);
//             const welcomeMessage = `Bienvenido, ${user.email} 😃`;
//             req.session.message = welcomeMessage;

//         } catch (error) {
//             console.error('Error al actualizar lastConnection:', error);
//             return res.status(500).send('Error interno del servidor');
//         }
//     })(req, res, next);
// }


// // funciona
async function postLoginUser(req, res, next) {
    passport.authenticate('local', async (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).send(info.message);
        }
        try {
            const foundUser = await userManager.getUserByField('email', user.email);
            if (!foundUser) {
                return res.status(401).send('Usuario no encontrado');
            }
            await userManager.setLastConnection(user.email);
        
            // Aquí estableces el usuario en la sesión
            req.login(user, (loginErr) => {
                if (loginErr) {
                    console.error('Error al iniciar sesión:', loginErr);
                    return res.status(500).send('Error interno del servidor');
                }
                
                //ver para usar en otra ruta trae todos los datos de user
                const userDAta = req.user.email
                console.log(userDAta)
                
                // Después de iniciar sesión, puedes redireccionar al usuario 
                //cambio link 'http://localhost:3000/tutor'
                // res.redirect(`http://localhost:3000/homeUsuario/esarData=${(userDAta)}`);
                //funciona
                res.redirect(`https://memo-front-iota.vercel.app/homeUsuario/esarData=${(userDAta)}`);
            });
        } catch (error) {
            console.error('Error al actualizar lastConnection:', error);
            return res.status(500).send('Error interno del servidor');
        }
    })(req, res, next);
}



  


module.exports = { postResisterUser, postLoginUser }