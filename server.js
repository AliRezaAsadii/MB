"use strict";

const dotenv = require("dotenv");
const startDB = require("./server/config/db") 

dotenv.config({ path: ".env" });

startDB()
