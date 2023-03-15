"use strict";

import db from "../db.js";

/** Metadata: related functions for metadata. */
export default class Metadata {
  /** Create a metadata entry for a photo.
   *
   * Returns { photo_id, tags }
   *
   * */
  static async create({ id, tags }) {
    const result = await db.query(
      `INSERT INTO metadata (photo_id, tags)
      VALUES ($1, string_to_array($2, ', '))
      RETURNING photo_id, tags;`,
      [id, tags]
    );
    const metadata = result.rows[0];
    return metadata;
  }

  /** Search for photos by tag.
   *
   * Returns [{ photo_id, tags }, ...]
   *
   * */
  static async search(searchTerm) {
    const result = await db.query(
      `SELECT photo_id, tags
            FROM metadata
            WHERE to_tsvector(array_to_string(tags, ' ')) @@ to_tsquery($1);`,
      [searchTerm]
    );
    const photos = result.rows;
    return photos;
  }

  /** Add a tag to a photo.
   *
   * Returns { photo_id, tags }
   *
   * */
  static async addTag({ id, tag }) {
    const result = await db.query(
      `UPDATE metadata
            SET tags = array_append(tags, $2)
            WHERE photo_id = $1
            RETURNING photo_id, tags;`,
      [id, tag]
    );
    const metadata = result.rows[0];
    return metadata;
  }

  /** Get the count of the 10 most popular tags in the db.
   *
   * Returns [{ tag, count }, ...]
   *
   * */
  static async count() {
    const result = await db.query(
      `SELECT tag, count(tag)
      FROM (
        SELECT unnest(tags) AS tag
        FROM metadata
      ) AS t
      GROUP BY tag
      ORDER BY count(tag) DESC
      LIMIT 10;`
    );
    const count = result.rows;
    return count;
  }
}
