import * as admin from "firebase-admin";

if (!admin.apps.length) {
  try {
    const serviceAccount = process.env.FIREBASE_ADMIN_PRIVATE_KEY_JSON;
    if (serviceAccount) {
      admin.initializeApp({
        credential: admin.credential.cert(JSON.parse(serviceAccount)),
      });
    }
  } catch (error) {
    console.log("Firebase admin initialization error: ", JSON.stringify(error));
  }
}

export default admin;
