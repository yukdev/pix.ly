import express from "express";

import { BadRequestError } from "../expressError.js";

import Metadata from "../models/metadata.js";
const router = new express.Router();

/** GET /metadata/popular - gets the 10 most popular tags in the db */
router.get("/popular", async function (req, res, next) {
  let count;

  try {
    count = await Metadata.count();
  } catch (err) {
    throw new BadRequestError("Your photos could not be retrieved.");
  }

  return res.json({ count });
});

/** PATCH /metadata/:id - adds a tag to a photo */
router.patch("/:id", async function (req, res, next) {
  const { id } = req.params;
  const { tag } = req.body;

  let metadata;

  try {
    metadata = await Metadata.addTag({ id, tag });
  } catch (err) {
    throw new BadRequestError("Your photo could not be updated.");
  }

  return res.json({ metadata });
});

export default router;
