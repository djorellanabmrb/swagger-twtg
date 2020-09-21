const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const {swaggerDoc} = require("./src");
const {ApiConfig} = require("configs-twtg");

const router = express.Router();

router.use(express.json())
.use(cors())
.use(helmet())
.use('/',  swaggerUi.serve)
.get('/', swaggerUi.setup(swaggerDoc));

const app = express().use(router);

app.listen(ApiConfig.port, () => {
  console.log(`Documetantion api on the port ${ApiConfig.port}`)
});