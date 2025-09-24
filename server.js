/*server.js*/
const express = require("express");
const app = express();

app.use(express.json()); 
let items = [
  { id: 1, name: "Margherita", price: 199 },
  { id: 2, name: "Farmhouse", price: 299 },
  { id: 3, name: "Peppy Paneer", price: 249 }
];
app.post("/items", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: "Name and price are required" });
  }

  const newItem = {
    id: items.length + 1,
    name,
    price
  };

  items.push(newItem);
  res.status(201).json({ message: "Pizza is added successfully", item: newItem });
});

app.get("/items", (req, res) => {
  res.json(items);
});

app.get("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find(i => i.id === itemId);

  if (!item) {
    return res.status(404).json({ error: "Pizza is not found" });
  }

  res.json(item);
});
app.put("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const { name, price } = req.body;

  let item = items.find(i => i.id === itemId);

  if (!item) {
    return res.status(404).json({ error: "Pizza is not found" });
  }

  if (name) item.name = name;
  if (price) item.price = price;

  res.json({ message: "Pizza is updated successfully", item });
});

app.delete("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === itemId);

  if (index === -1) {
    return res.status(404).json({ error: "Pizza is not found" });
  }

  const deletedItem = items.splice(index, 1);
  res.json({ message: "Pizza is deleted successfully", deletedItem });
});

app.listen(3000, () => {
  console.log("🍕 Pizza Store API is running at http://localhost:3000");
});
