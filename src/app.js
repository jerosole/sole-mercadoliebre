const express = require("express");
const path = require("path")

const app = express();

app.use(express.static(path.join(__dirname, "../public")))

const PORT = 3001
app.listen(PORT, ()=>{
    console.log('se prendio en el puerto 3001')
});

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/home.html"))
})