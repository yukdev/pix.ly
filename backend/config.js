"use strict";

import { config } from "dotenv";
config();

const SECRET_KEY = process.env.SECRET_KEY || "most-definitely-not-a-secret";

const PORT = +process.env.PORT || 3001;

function getDatabaseUri() {
  return process.env.NODE_ENV === "test"
    ? "pixly-test"
    : process.env.DATABASE_URL || "pixly";
}

const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

export { SECRET_KEY, PORT, getDatabaseUri, BCRYPT_WORK_FACTOR };
