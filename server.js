import express from "express";
import AdminJS from 'adminjs';
import mongoose from "mongoose";
import AdminJSExpress from '@adminjs/express';
import errorHandler from './middleware/errorHandler.js';
import dotenv from "dotenv";
import contactsRoutes from "./routes/contactsRoutes.js";
import {Database , Resource} from "@adminjs/mongoose";


AdminJS.registerAdapter({
  Database,
  Resource
})

dotenv.config(); 

const databaseConnect = await mongoose.connect(process.env.MONGO_DGB_URI);
const app = express();
app.use(express.json());

app.use("/api/contacts", contactsRoutes);
// app.use("/api/users", userRoutes);
app.use(errorHandler);

const port = process.env.PORT || 5000;

const start = async () => {
  const admin = new AdminJS({
  databases:[
  databaseConnect
   ]
  });
  const adminRouter = AdminJSExpress.buildRouter(admin);

  app.use(admin.options.rootPath, adminRouter);

  app.listen(port, () => {
    console.log(`AdminJS started on http://localhost:${port}${admin.options.rootPath}`);
  });
 
};

start();
