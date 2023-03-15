"use strict";

import pkg from "pg";
const { Client } = pkg;

import { getDatabaseUri } from "./config.js";
const db = new Client({
  connectionString: getDatabaseUri(),
});

db.connect();

export default db;
