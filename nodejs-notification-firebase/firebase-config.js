var admin = require("firebase-admin");

var serviceAccount = require("./learn-firebase-c6ee6-firebase-adminsdk-345lq-53e3a89de5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://learn-firebase-c6ee6-default-rtdb.firebaseio.com/",
});

module.exports.admin = admin;
