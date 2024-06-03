import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function main() {
  await mongoose.connect(config.dbUrl as string);

  app.listen(config.port, () => {
    console.log(`App listening on port ${config.port}`);
  });
}

main();
