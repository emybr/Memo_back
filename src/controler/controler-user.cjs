const UserManager = require('../dao/user-manager.cjs')
const userManager = new UserManager
const passport = require('passport');



async function postResisterUser (req,res){
    try{
        const {nombre,apellido,edad,email,password} = req.body;
        
        await userManager.createUser(nombre,apellido,edad,email,password);
        // res.status(201).json({ message: "Usuario creado correctamente" });
        res.redirect('http://localhost:3000/login');
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
            req.session.email = user.email;
            req.session.role = foundUser.role;
            req.session.role = user.role;
            
            // Aquí estableces el usuario en la sesión
            req.login(user, (loginErr) => {
                if (loginErr) {
                    console.error('Error al iniciar sesión:', loginErr);
                    return res.status(500).send('Error interno del servidor');
                }
                
                // Después de iniciar sesión, puedes redireccionar al usuario 
                //cambio link 'http://localhost:3000/tutor'
                res.redirect('https://memo-front-iota.vercel.app/tutor');
            });
        } catch (error) {
            console.error('Error al actualizar lastConnection:', error);
            return res.status(500).send('Error interno del servidor');
        }
    })(req, res, next);
}



module.exports ={postResisterUser,postLoginUser}