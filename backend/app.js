import express from 'express';
import multer from 'multer';
import path from 'path';
import bodyParser from 'body-parser';
import pool from "./model/database.js";
import fs from "fs";
import Vehicle from "./vehicle.js"

const app = express();
const relativePath = path.resolve();
const connection = pool.promise();
app.use(express.json());

app.get("/listVehicles", async(req, res) => {
    const query = "SELECT * FROM vehicle";
    const [rows, fields] = await connection.query(query);

    // adi ndirha bach na9dr nafichiha mba3ed fe b js fe client side
    rows.forEach(row => {
        row.picture = Buffer.from(row.picture).toString("utf-8");
    });

    res.json(rows);
});

app.listen(3000, (err, res) => {
    console.log("server is up and running");
});