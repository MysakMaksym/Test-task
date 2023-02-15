const bodyParser = require("body-parser");
const db = require("./db");
const express = require("express");
const { ObjectId } = require("mongodb");
const app = express();
const port = 8000;
const dbURL = "mongodb://127.0.0.1:27017/ApartmentsDB";

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/apartments", async (req, res) => {
  const dbClient = db.getClient();
  const apartments = await dbClient.collection("apartments").find({}).toArray();

  res.send(apartments);
});

app.post("/apartments", async (req, res) => {
  const dbClient = db.getClient();
  const apartments = await dbClient
    .collection("apartments")
    .insertOne(req.body);

  const apartment = await dbClient
    .collection("apartments")
    .findOne({ _id: apartments.insertedId });

  res.send(apartment);
  //console.log(apartments);

  // const val = await apartments;
  //res.json(val);
});

app.delete("/apartments/:id", async (req, res) => {
  //req.params.id
  console.log("delete");
  const dbClient = db.getClient();
  const id = new ObjectId(req.params.id);
  const deleteResult = await dbClient
    .collection("apartments")
    .deleteOne({ _id: id });
  console.log(deleteResult);
  if (deleteResult.deletedCount == 0) {
    res.status(404);
    res.send("Apartment not found");
    return;
  }
  res.send("OK");
});

(async () => {
  await db.init();

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
})();
