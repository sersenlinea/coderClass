const admin = require('firebase-admin')
const serviceAccount = require('./node-59e40-firebase-adminsdk-g9yjf-59695c89b6.json')

// Initialize Firebase
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://node-59e40-default-rtdb.firebaseio.com'
});

console.log('Firebase connected')
