import express from "express";

const port = 3000;

const app = express();

//metodos
// GET, POST, PUT, PATCH, DELETE


app.get("/movies", (req, res) => {
    res.send("Listage filme");
});
app.listen(port, () => {
    console.log(`servodor em execucao na porta ${port}`);
});