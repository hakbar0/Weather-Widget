import * as functions from "firebase-functions";
import { authenticate } from "./auth/auth";

const admin = require("firebase-admin");
admin.initializeApp();

export const createDummy = functions.https.onRequest(async (req, res) => {
  try {
    const decoded = await authenticate(req, res, admin);
    res.status(200).send(decoded);
  } catch (error) {
    res.status(401).send("Not Authorized User");
  }
});
