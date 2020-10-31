const Pool = require("pg").Pool;

const pool = new Pool({
  user: "lgjystzhtaqszw",
  password: "90dd797f6fc228d241628a83ae213b1caed4be5f531ceb6d01a7cf65a61d25f1",
  host: "ec2-54-246-115-40.eu-west-1.compute.amazonaws.com",
  port: 5432,
  database: "denb2rkfmgodr5"
});

module.exports = pool;