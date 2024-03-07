import express from "express";
import { PrismaClient } from "@prisma/client";

const port = 3000;

const app = express();
const prisma = new PrismaClient();

//metodos
// GET, POST, PUT, PATCH, DELETE


app.get("/movies", async (req, res) => {
    const languages = await prisma.language.findMany();
    res.json(languages);
});
app.listen(port, () => {
    console.log(`servodor em execucao na porta ${port}`);
});