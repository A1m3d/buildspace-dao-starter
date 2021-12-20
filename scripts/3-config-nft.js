import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x2F06b5a6e65E66B4Fa3E63449008460Ec22741b1",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Good morning",
        description: "This NFT will give you access to The-good-DAO!",
        image: readFileSync("scripts/assets/goodm.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()