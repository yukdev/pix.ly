import express from "express";
import multer from "multer";

import { BadRequestError } from "../expressError.js";
import { uploadToS3 } from "../helpers/s3.js";

import Photo from "../models/photo.js";
import Metadata from "../models/metadata.js";
import STOP_WORDS from "../stopWords.js";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = new express.Router();

/** GET /photos - gets all photos in the db */
router.get("/", async function (req, res, next) {
  let { tags } = req.query;

  // convert tags to "tag1 & tag2 & ..."
  const formattedTags = tags ? tags.split(/[, ]+/).join(" & ") : null;

  let photos;

  try {
    photos = await Photo.findAll(formattedTags);
    return res.json({ photos });
  } catch (err) {
    throw new BadRequestError("Your photos could not be retrieved.");
  }
});

/** POST /photos - adds a photo to the db */
router.post("/", upload.single("photo"), async function (req, res, next) {
  const { title, tags } = req.body;

  let id;
  let photo;

  const formattedTags = tags
    .replaceAll(",", "")
    .split(" ")
    .filter((tag) => !STOP_WORDS.includes(tag))
    .join(", ");

  // Upload the photo to S3
  try {
    id = await uploadToS3(req.file);
  } catch (err) {
    throw new BadRequestError("Your photo could not be uploaded to S3.");
  }

  // Add the photo to the photos database
  try {
    photo = await Photo.create({ id, title });
  } catch (err) {
    throw new BadRequestError("Your photo could not be added to the database.");
  }

  // Add the tags to the metadata database
  try {
    await Metadata.create({ id, tags: formattedTags });
  } catch (err) {
    throw new BadRequestError("Your tags could not be added to the database.");
  }

  return res.status(201).json({ photo });
});

/** GET /photos/:id - gets a photo by id */
router.get("/:id", async function (req, res, next) {
  const { id } = req.params;
  let photo;

  try {
    photo = await Photo.find(id);
    return res.json({ photo });
  } catch (err) {
    throw new BadRequestError("Your photo could not be retrieved.");
  }
});

/** DELETE /photos/:id - deletes a photo by id */
router.delete("/:id", async function (req, res, next) {
  const { id } = req.params;

  try {
    await Photo.remove(id);
    return res.json({ message: "Photo deleted" });
  } catch (err) {
    throw new BadRequestError("Your photo could not be deleted.");
  }
});

export default router;
