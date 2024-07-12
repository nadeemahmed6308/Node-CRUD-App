import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './src/Router.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ extended: true }));

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});