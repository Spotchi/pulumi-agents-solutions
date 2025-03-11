import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

// Create a GCP resource (Storage Bucket)
const bucket = new gcp.storage.Bucket("my-bucket", {
  location: "US",
  website: {
    mainPageSuffix: "index.html",
  },
  uniformBucketLevelAccess: true,
});
const bucketObject = new gcp.storage.BucketObject("index.html", {
  bucket: bucket.name,
  source: new pulumi.asset.FileAsset("index.html"),
});

const bucketBinding = new gcp.storage.BucketIAMBinding("my-bucket-binding", {
  bucket: bucket.name,
  role: "roles/storage.objectViewer",
  members: ["allUsers"],
});

export const bucketEndpoint = pulumi.concat(
  "http://storage.googleapis.com/",
  bucket.name,
  "/",
  bucketObject.name,
);
// Export the DNS name of the bucket
export const bucketName = bucket.url;
