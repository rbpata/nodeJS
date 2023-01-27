const connect = require("./mongo_promises");

const insert = async () => {
  let db = await connect();
  let result = db.insertMany([
    {
      name: "motorola",
      brand: "motog1",
      price: 500,
      category: "mobile",
    },
    {
        name: "motorola",
        brand: "motog2",
        price: 450,
        category: "mobile",
      } ,
      {
        name: "Samsung",
        brand: "S22",
        price: 800,
        category: "mobile",
      }
  ]);

  if ((await result).acknowledged) console.log("Inserted...");
};

insert();
