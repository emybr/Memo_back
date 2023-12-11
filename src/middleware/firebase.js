const admin = require('firebase-admin');

async function authenticateToken(req, res, next) {
    try {
        const idToken = req.header('Authorization').split(' ')[1];
        await admin.auth().verifyIdToken(idToken);
        next();
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized' });
    }
}

module.exports = authenticateToken;
