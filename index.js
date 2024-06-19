//Importaciones
import express from "express";
import router from "./routes/router.js";
import {engine} from "express-handlebars";
import expressFileUpload from "express-fileupload";
import cookieParser from "cookie-parser";

//Variables
const app = express();
const PORT = process.env.PORT || 8080;

//Publico

app.use(express.static("public"));

//Motor de plantillas
app.engine("hbs", engine(
    {
        extname: ".hbs",}
));
app.set("views", "./views");
app.set("view engine", "hbs");

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(expressFileUpload({
    limits: {fileSize: 1000000},
    abortOnLimit: true,
    responseOnLimit: "El archivo es demasiado grande",
}));
app.use(cookieParser());

//Rutas
app.use("/", router);

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`))