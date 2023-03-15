import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class PixlyApi {
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers =
      method === "post" ? { "Content-Type": "multipart/form-data" } : {};
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Upload a photo to s3 */
  static async uploadImage(data) {
    const res = await this.request(`photos/`, data, "post");
    return res.photo;
  }

  /** Get all photos with specific tag(s) from the database */
  static async getPhotos(tags) {
    const res = await this.request(`photos/`, { tags: tags });
    return res.photos;
  }

  /** Get a photo from the database */
  static async getPhoto(id) {
    const res = await this.request(`photos/${id}`);
    return res.photo;
  }

  /** Delete a photo from the database */
  static async deletePhoto(id) {
    const res = await this.request(`photos/${id}`, {}, "delete");
    return res.message;
  }

  /** Get the 10 most popular tags from the database */
  static async getPopularTags() {
    const res = await this.request(`metadata/popular`);
    return res.count;
  }

  /** Add a tag to a photo in the database */
  static async addTag(id, tag) {
    const res = await this.request(`metadata/${id}`, { tag }, "patch");
    return res.metadata;
  }
}

export default PixlyApi;
