import cors from "cors";
import express from 'express';
import TestMain from './tests/test_main.js';
import jsonGraphqlExpress from 'json-graphql-server/node';
import FunctionShowAllProducts from "./tests/functions/show_all_products.function.js";

const app = express();

// await TestMain();

const data = {
  products: await FunctionShowAllProducts()
}

app.use(
  cors({
    origin: "https://capputeeno.lalunainsky.com",
    methods: ["GET", "POST"]
  })
)

app.use(
  '/',
  jsonGraphqlExpress(data)
);


export default app;