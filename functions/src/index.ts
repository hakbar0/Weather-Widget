import * as functions from "firebase-functions";
import { authenticate } from "./auth/auth";
import { dummyData } from "./helpers/dummyData";
import { db } from "./database/init";
import { ref, set } from "firebase/database";

import admin = require("firebase-admin");
admin.initializeApp();

export const createDummy = functions.https.onRequest(async (req, res) => {
  try {
    //check if valid user
    await authenticate(req, res, admin);

    try {
      //create dummy data and push to real time DB
      const dummyArr = dummyData();

      set(ref(db, "users/"), dummyArr);

      res.status(200).send(dummyArr);
    } catch (error) {
      res.status(401).send("Error when creating dummy data");
    }
  } catch (error) {
    res.status(401).send("Not Authorized User");
  }
  
});
