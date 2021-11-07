import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database";
import { fireBaseConfig } from "../../config/config";

const app = initializeApp(fireBaseConfig);
export const db = getDatabase(app);