const app = require("express")();
const PORT = 8000;


app.get("/", (req, res) => {
    res.send('Hello')
});

app.listen(PORT, () => {
  console.log("Listening at PORT: " + PORT);
});
