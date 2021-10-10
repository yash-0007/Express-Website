// npm install express --save
// npm install handlebars

const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

// public static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// handlebars
app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// routing
// app.get(route, callback)
// res.send("<html/>")
app.get("/", (req, res) => {
    res.render('index');
})

app.get("/about", (req, res) => {
    res.render('about');
})

app.get("/weather", (req, res) => {
    res.render('weather');
})

app.get("*", (req, res) => {
    res.render('404error', {
        errorMsg: "Opps! Page Not Found"
    });
})

// app.listen(port, callback)
app.listen(port, () => {
    console.log(`Listening to the port at http://localhost:${port}`);
})

// nodemon src/app.js -e js,hbs