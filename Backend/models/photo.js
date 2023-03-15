"use strict";

import db from "../db.js";

import { NotFoundError } from "../expressError.js";

/** Photo: related functions for photos. */
export default class Photo {
  /** Create a photo entry.
   *
   * Returns { id, title, created_at }
   *
   * */
  static async create({ id, title }) {
    const result = await db.query(
      `INSERT INTO photos
            (id, title)
            VALUES ($1, $2)
            RETURNING id, title, created_at`,
      [id, title]
    );
    const photo = result.rows[0];

    return photo;
  }

  /** Get all photos or search for photos by tag(s) if provided.
   *
   * Returns [{ id, title, created_at, tags }, ...]
   *
   * */
  static async findAll(tags) {
    let result;
    if (tags) {
      result = await db.query(
        `SELECT p.id,
                p.title,
                p.created_at,
                m.tags
              FROM photos AS p
              JOIN metadata AS m
              ON p.id = m.photo_id
              WHERE to_tsvector(array_to_string(m.tags, ' ')) @@ to_tsquery($1)
              ORDER BY p.created_at DESC;`,
        [tags]
      );
    } else {
      result = await db.query(
        `SELECT p.id,
                p.title,
                p.created_at,
                m.tags
              FROM photos AS p
              JOIN metadata AS m
              ON p.id = m.photo_id
              ORDER BY p.created_at DESC;`
      );
    }
    const photos = result.rows;

    return photos;
  }

  /** Get a photo by id.
   *
   * Returns { id, title, created_at, tags }
   *
   * Throws NotFoundError if photo not found.
   *
   * */
  static async find(id) {
    const result = await db.query(
      `SELECT p.id,
              p.title,
              p.created_at,
              m.tags
            FROM photos AS p
            JOIN metadata AS m
            ON p.id = m.photo_id
            WHERE p.id = $1`,
      [id]
    );
    const photo = result.rows[0];

    if (!photo) throw new NotFoundError(`No photo: ${id}`);

    return photo;
  }

  /** Delete a photo given the id
   *
   * Returns { id }
   *
   * Throws NotFoundError if photo not found.
   *
   * */
  static async remove(id) {
    const result = await db.query(
      `DELETE FROM photos
            WHERE id = $1
            RETURNING id`,
      [id]
    );
    const photo = result.rows[0];

    if (!photo) throw new NotFoundError(`No photo: ${id}`);

    return photo;
  }
}
