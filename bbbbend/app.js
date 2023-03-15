"use strict";

import express from "express";
import cors from "cors";

import { NotFoundError } from "./expressError.js";

import photoRoutes from "./routes/photos.js";
import metadataRoutes from "./routes/metadata.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/photos", photoRoutes);
app.use("/metadata", metadataRoutes);

/** 404 handler */
app.use(function (req, res, next) {
  throw new NotFoundError();
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

export default app;
