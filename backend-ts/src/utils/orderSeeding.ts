import mongoose from "mongoose";
const Order = require("../Models/OrderSchema");

const orders = [
  {
    orderId: "ORD001",
    customerName: "Alice Johnson",
    orderDate: new Date("2025-08-01"),
    status: "Pending",
    items: [
      { productName: "Laptop", quantity: 1, price: 1200 },
      { productName: "Mouse", quantity: 6, price: 25 },
    ],
    totalAmount: 1200 + 6 * 25,
  },
  {
    orderId: "ORD002",
    customerName: "Alice Johnson",
    orderDate: new Date("2025-07-15"),
    status: "Delivered",
    items: [
      { productName: "Laptop", quantity: 1, price: 1200 },
      { productName: "Mouse", quantity: 5, price: 25 },
    ],
    totalAmount: 1200 + 5 * 25,
  },
  {
    orderId: "ORD003",
    customerName: "Alice Johnson",
    orderDate: new Date("2025-06-10"),
    status: "Shipped",
    items: [
      { productName: "Keyboard", quantity: 2, price: 45 },
      { productName: "Monitor", quantity: 1, price: 150 },
    ],
    totalAmount: 2 * 45 + 150,
  },
  {
    orderId: "ORD004",
    customerName: "Bob Smith",
    orderDate: new Date("2025-05-05"),
    status: "Pending",
    items: [
      { productName: "Tablet", quantity: 3, price: 300 },
    ],
    totalAmount: 900,
  },
  {
    orderId: "ORD005",
    customerName: "Bob Smith",
    orderDate: new Date("2025-04-20"),
    status: "Delivered",
    items: [
      { productName: "Headphones", quantity: 2, price: 100 },
      { productName: "Charger", quantity: 2, price: 30 },
    ],
    totalAmount: 2 * 100 + 2 * 30,
  },
  {
    orderId: "ORD006",
    customerName: "Bob Smith",
    orderDate: new Date("2025-03-30"),
    status: "Shipped",
    items: [
      { productName: "Camera", quantity: 1, price: 900 },
    ],
    totalAmount: 900,
  },
  {
    orderId: "ORD007",
    customerName: "Clara Lee",
    orderDate: new Date("2025-08-07"),
    status: "Pending",
    items: [
      { productName: "Gaming Console", quantity: 5, price: 450 },
      { productName: "Game Controller", quantity: 8, price: 60 },
    ],
    totalAmount: 5 * 450 + 8 * 60,
  },
  {
    orderId: "ORD008",
    customerName: "Clara Lee",
    orderDate: new Date("2025-07-22"),
    status: "Delivered",
    items: [
      { productName: "Game Controller", quantity: 7, price: 60 },
    ],
    totalAmount: 420,
  },
  {
    orderId: "ORD009",
    customerName: "David Kim",
    orderDate: new Date("2025-06-15"),
    status: "Pending",
    items: [
      { productName: "Router", quantity: 3, price: 60 },
      { productName: "Modem", quantity: 1, price: 70 },
    ],
    totalAmount: 3 * 60 + 70,
  },
  {
    orderId: "ORD010",
    customerName: "David Kim",
    orderDate: new Date("2025-05-25"),
    status: "Delivered",
    items: [
      { productName: "Smartwatch", quantity: 2, price: 250 },
    ],
    totalAmount: 500,
  },
  {
    orderId: "ORD011",
    customerName: "Emily Davis",
    orderDate: new Date("2025-04-10"),
    status: "Shipped",
    items: [
      { productName: "Drone", quantity: 1, price: 1100 },
    ],
    totalAmount: 1100,
  },
  {
    orderId: "ORD012",
    customerName: "Frank Miller",
    orderDate: new Date("2025-03-20"),
    status: "Delivered",
    items: [
      { productName: "Projector", quantity: 2, price: 600 },
    ],
    totalAmount: 1200,
  },
  {
    orderId: "ORD013",
    customerName: "Grace Lee",
    orderDate: new Date("2025-08-03"),
    status: "Pending",
    items: [
      { productName: "Printer", quantity: 4, price: 200 },
      { productName: "Ink", quantity: 7, price: 40 },
    ],
    totalAmount: 4 * 200 + 7 * 40,
  },
  {
    orderId: "ORD014",
    customerName: "Henry Black",
    orderDate: new Date("2025-07-18"),
    status: "Shipped",
    items: [
      { productName: "TV", quantity: 1, price: 500 },
    ],
    totalAmount: 500,
  },
  {
    orderId: "ORD015",
    customerName: "Henry Black",
    orderDate: new Date("2025-06-12"),
    status: "Delivered",
    items: [
      { productName: "Speaker", quantity: 15, price: 75 },
    ],
    totalAmount: 15 * 75,
  },
];



export async function seedOrders() {
  try {
    await Order.deleteMany({});
    console.log("Old orders removed");

    await Order.insertMany(orders);
    console.log("Orders inserted successfully");

  }catch (err) {
    console.error("Seeding failed:", err);
    mongoose.connection.close();
  }
}
