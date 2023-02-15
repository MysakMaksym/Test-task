const { MongoClient } = require("mongodb");
const uri = `mongodb://127.0.0.1:27017/ApartmentsDB`;
const client = new MongoClient(uri);

const init = async () => {
  try {
    await client.connect();
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};

const getClient = () => {
  return client.db("ApartmentsDB");
};

module.exports.init = init;
module.exports.getClient = getClient;
