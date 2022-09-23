import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.mjs";

export const Country = sequelize.define(
  "Country",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.TEXT,
  },
  { tableName: "country", createdAt: false, updatedAt: false }
);
