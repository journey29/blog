import Pool from "pg-pool";
import * as url from "url";
import { env } from "@/env.js";

const params = url.parse(env.DATABASE_URL);
const auth = params.auth!!.split(":");

const config = {
  user: auth[0],
  password: auth[1],
  host: params.hostname!!,
  port: parseInt(params.port!!),
  database: params.pathname!!.split("/")[1],
};
export const blogPool = new Pool(config);
