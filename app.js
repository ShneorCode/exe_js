import { config } from "dotenv";
import express from 'express';
import routes from './router.js';

config(); 

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json()); 
app.use('/', routes); 

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
