import express from "express";
import { controllers } from "../controllers/controller.js";

const router = express.Router();

router.get("/", controllers.home);

router.get("/about", controllers.about);

router.get("/contact", controllers.contact);

router.get("/login", controllers.login);

router.get("/register", controllers.register);

router.get("/update", controllers.update);

router.get("/admin", controllers.admin);


router.get("*", controllers.notFound);

export default router
