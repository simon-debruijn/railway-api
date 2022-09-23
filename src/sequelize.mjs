import { Sequelize } from "sequelize";
import { DATABASE_URL } from "./constants.mjs";

export const sequelize = new Sequelize(DATABASE_URL, { dialect: "postgres" });
