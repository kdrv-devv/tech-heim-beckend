import fs from "node:fs";
import path from "node:path";
import dotenv from "dotenv";
import { v4 as uuid } from "uuid";

dotenv.config();

const readFile = (filename) => {
  return JSON.parse(fs.readFileSync(path.resolve("database", filename)));
};

const writeFile = (filename, data) => {
  fs.writeFileSync(path.resolve("database", filename), JSON.stringify(data, null, 2));
};

// NEW PRODUCTS CRUD

export const getAllNewProducts = async (req, res) => {
  try {
    const products = readFile("newproducts.json");
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOneNewProduct = async (req, res) => {
  const { id } = req.params;
  const products = readFile("newproducts.json");
  const product = products.find((el) => el.id == id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

export const createNewProduct = async (req, res) => {
  const newProduct = { id: uuid(), ...req.body };
  const products = readFile("newproducts.json");
  products.push(newProduct);
  writeFile("newproducts.json", products);
  res.status(201).json(newProduct);
};

export const updateNewProduct = async (req, res) => {
  const { id } = req.params;
  let products = readFile("newproducts.json");
  const index = products.findIndex((el) => el.id == id);
  if (index === -1) return res.status(404).json({ message: "Product not found" });

  products[index] = { ...products[index], ...req.body };
  writeFile("newproducts.json", products);
  res.status(200).json(products[index]);
};

export const deleteNewProduct = async (req, res) => {
  const { id } = req.params;
  let products = readFile("newproducts.json");
  const filtered = products.filter((el) => el.id != id);
  writeFile("newproducts.json", filtered);
  res.status(200).json({ message: "Product deleted successfully" });
};


export const getAllSellers = async (req, res) => {
  try {
    const sellers = readFile("sellers.json");
    res.status(200).json(sellers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOneSeller = async (req, res) => {
  const { id } = req.params;
  const sellers = readFile("sellers.json");
  const seller = sellers.find((el) => el.id == id);
  if (seller) {
    res.status(200).json(seller);
  } else {
    res.status(404).json({ message: "Seller not found" });
  }
};

export const createSeller = async (req, res) => {
  const newSeller = { id: uuid(), ...req.body };
  const sellers = readFile("sellers.json");
  sellers.push(newSeller);
  writeFile("sellers.json", sellers);
  res.status(201).json(newSeller);
};

export const updateSeller = async (req, res) => {
  const { id } = req.params;
  let sellers = readFile("sellers.json");
  const index = sellers.findIndex((el) => el.id == id);
  if (index === -1) return res.status(404).json({ message: "Seller not found" });

  sellers[index] = { ...sellers[index], ...req.body };
  writeFile("sellers.json", sellers);
  res.status(200).json(sellers[index]);
};

export const deleteSeller = async (req, res) => {
  const { id } = req.params;
  let sellers = readFile("sellers.json");
  const filtered = sellers.filter((el) => el.id != id);
  writeFile("sellers.json", filtered);
  res.status(200).json({ message: "Seller deleted successfully" });
};
