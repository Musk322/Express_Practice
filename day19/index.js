import express from "express";
import homeRoutes from "./routes/homeRoutes.js";
import {PORT,viewEngine} from "./config/appConfig.js";
const app = express();

app.set('view engine', viewEngine);

app.use('/', homeRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});