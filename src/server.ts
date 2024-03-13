import express from "express";
import { PrismaClient } from "@prisma/client";

const port = 3000;

const app = express();
const prisma = new PrismaClient();

//metodos
// GET, POST, PUT, PATCH, DELETE


app.get("/movies", async (_, res) => {
    const movies = await prisma.movie.findMany({
        orderBy: {
            title: "desc"
        },
        include: {
            genres: true,
            languages:true
        }
    });
    res.json(movies);
});
app.listen(port, () => {
    console.log(`servodor em execucao na porta ${port}`);
});