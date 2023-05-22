const express = require("express");
const app = express();
const port = 3000;
// Подключение шаблонизатора
app.set("view engine" , "ejs");

app.use("/", express.static(__dirname + "/static"));

const username = "Kitten12345"
const role = "Ученик"

app.get("/", function (req, res) {

    let users = [
        {
            name: "Сергей",
            designation: "Ученик"
        },

        {
            name: "Дмитрий",
            designation: "Ученик"
        },

        {
            name: "Мария",
            designation: "Ученик",
            admin: true
        },

        {
            name: "Владисав",
            designation: "Ученик"
        },

        {
            name: "Георгий",
            designation: "Ученик"
        },

        {
            name: "Василий",
            designation: "Ученик"
        }
    ];

    res.render("index", {username, role, users});
});

app.get("/about", function (req,res) {
    res.render("about");
});

app.get("/contacts", function (req,res) {
    res.render("contacts");
});

app.listen(port, function () {
    console.log("Сервер работает по адресу http://localhost:" + port)
});