import "dotenv/config";
import { Client } from "@elastic/elasticsearch";

async function main() {
  console.log(`Connecting to ${process.env.ELASTIC_CLOUD_HOST}`);
  const client = new Client({
    node: `https://${process.env.ELASTIC_CLOUD_HOST}`,
    auth: {
      username: process.env.ELASTIC_CLOUD_USERNAME,
      password: process.env.ELASTIC_CLOUD_PASSWORD,
    },
  });
  const clientInfo = await client.info();
  console.log("Client: ", clientInfo);
  //   const pingResponse = await client.ping();
  //   console.log("Ping: ", pingResponse);

  const result = await client.search({
    index: "autofi-ent-santander-mitsubishi-perf-2024.07.30",
    query: {
      match: {
        _id: "vU-uAZEBXs-ZvmyK95B_",
      },
    },
  });

  console.log(result);

  console.log("end");
}

main().catch(console.error);
