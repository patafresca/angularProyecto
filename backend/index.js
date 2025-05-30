const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'notasdb'
});

db.connect(err => {
  if (err) {
    console.error('Error conectando a la BD:', err);
    return;
  }
  console.log('Conectado a MySQL ✔');
});

// Obtener todas las notas
app.get('/notes', (req, res) => {
  db.query('SELECT * FROM notes ORDER BY date DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Obtener una nota por ID
app.get('/notes/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM notes WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.length === 0) return res.status(404).json({ error: 'Nota no encontrada' });
    res.json(result[0]);
  });
});

// Crear nueva nota
app.post('/notes', (req, res) => {
  const { title, description, date } = req.body;
  db.query('INSERT INTO notes (title, description, date) VALUES (?, ?, ?)', 
    [title, description, date],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id: result.insertId, title, description, date });
    }
  );
});

// Actualizar nota
app.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, date } = req.body;
  db.query('UPDATE notes SET title = ?, description = ?, date = ? WHERE id = ?', 
    [title, description, date, id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Nota actualizada' });
    }
  );
});

// Eliminar nota
app.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM notes WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Nota eliminada' });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor backend ejecutándose en http://localhost:${PORT}`);
});

