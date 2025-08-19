// todo.js
const express = require("express");
const router = express.Router();

// Data dummy
let todos = [
  { id: 1, Nama: "Halim", },
];

// Endpoint untuk mendapatkan semua tugas
router.get("/", (req, res) => {
  res.json(todos);
});

// Endpoint untuk mendapatkan tugas berdasarkan ID
router.get("/:id", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send("Tugas tidak ditemukan");
  res.json(todo);
});

// Endpoint untuk menambahkan tugas baru
router.post("/", (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    nama: req.body.nama,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Endpoint untuk memperbarui tugas
router.put("/:id", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send("nama tidak ditemukan");

  todo.nama = req.body.nama || todo.nama;
  res.json(todo);
});

// Endpoint untuk menghapus tugas
router.delete("/:id", (req, res) => {
  const todoIndex = todos.findIndex((t) => t.id === parseInt(req.params.id));
  if (todoIndex === -1) return res.status(404).send("nama tidak ditemukan");

  todos.splice(todoIndex, 1);
  res.status(204).send();
});

module.exports = router;
// Tambahkan ini untuk mengekspor data todos juga
module.exports.todos = todos;