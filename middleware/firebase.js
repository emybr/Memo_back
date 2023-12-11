import admin from 'firebase-admin';

export default async function authenticateToken(req, res, next) {
	try {
		const idToken = req.header('Authorization').split(' ')[1];
		await admin.auth().verifyIdToken(idToken);
		next();
	} catch (error) {
		res.status(401).json({ error: 'Unauthorized' });
	}
}
