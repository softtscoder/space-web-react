// var admin = require("firebase-admin");
import admin from "firebase-admin";

var serviceAccount = require("./space-web-c7d32-firebase-adminsdk-hkupo-cebaa2c5a2.json");

export const ServerConfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://space-web-c7d32-default-rtdb.asia-southeast1.firebasedatabase.app",
};

