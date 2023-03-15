import dotenv from "dotenv";
dotenv.config();

import { v4 as uuid } from "uuid";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const bucketName = process.env.AWS_BUCKET_NAME;
const bucketRegion = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new S3Client({
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
  bucketRegion,
});

/** Upload a file to S3 */
async function uploadToS3(file) {
  const id = uuid();
  const putParams = {
    Bucket: bucketName,
    Key: id,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  const putCommand = new PutObjectCommand(putParams);

  await s3.send(putCommand);
  return id;
}

export { uploadToS3 };
