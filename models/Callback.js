import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Callback = sequelize.define(
  "Callback",
  {
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    orderId: { type: DataTypes.STRING, allowNull: false },
    data: {
      type: DataTypes.TEXT, // Store JSON data as a text string
      allowNull: true,
      // Optional: Use getter and setter to automatically handle JSON serialization/deserialization
      get() {
        const rawValue = this.getDataValue("data");
        return rawValue ? JSON.parse(rawValue) : null;
      },
      set(value) {
        this.setDataValue("data", JSON.stringify(value));
      },
    },
  },
  {
    tableName: "callbacks", // Optional: specify a custom table name
    timestamps: true, // Sequelize adds createdAt and updatedAt fields by default
  }
);

export default Callback;
