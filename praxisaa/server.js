const express = require("express");

const app = express();

app.use(express.static("./dist/praxisaa"));

app.get("/*", (req, res) => {
    res.sendFile("index", { root: "dist/praxisaa" });
});

app.listen(process.env.PORT || 8080);