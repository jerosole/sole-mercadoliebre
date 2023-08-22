const express = require("express");
const path = require("path")

const app = express();

app.use(express.static(path.join(__dirname, "../public")))

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`se prendio en el puerto ${PORT}`)
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"))
})
app.get('/register', (req, res) => {
    let htmlPath = path.join(__dirname, "./views/register.html");
    res.sendFile(htmlPath);
});
app.get('/login', (req, res) => {
    let htmlPath = path.join(__dirname, "./views/login.html");
    res.sendFile(htmlPath);
});