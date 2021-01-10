//Can i use "const" here for express even though I rename it app later on below?
//Establish requirements:
let express = require("express");

//Set the PORT:
const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgerController.js");

app.use(routes);

//Handle listen:
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
