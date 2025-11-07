const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoutes = require('./routes/todoroutes');

const app = express();

// ✅ Middleware setup (order matters)
app.use(cors());
app.use(bodyParser.json());

// ✅ Routes
app.use('/api/todos', todoRoutes);

// ✅ MongoDB connection
mongoose.connect('mongodb://localhost:27017/todoDB')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ Error:', err));

app.listen(8000, () => console.log('🚀 Server running on port 8000'));
