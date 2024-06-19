import { title } from "process";

const home = (req, res) => {
    res.render("home",{title: "Home"});
};


const notFound = (req, res) => {
    res.render("404", {title: "Not Found"});
}

const about = (req, res) => {
    res.render("about", {title: "About"});
}

const contact = (req, res) => {
    res.render("contact", {title: "Contact"});
}

const login = (req, res) => {
    res.render("login", {title: "Login"});
}

const register = (req, res) => {
    res.render("registro", {title: "Register"});
}

const update = (req, res) => {
   title: "Update page";
}

const admin = (req, res) => {
    title: "Admin page";
}


export const  controllers = { home , notFound, about, contact, login, register, update, admin};