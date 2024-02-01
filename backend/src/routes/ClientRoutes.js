import express from "express";
import {createClient} from "../Controllers/clientController.js";

const ClientRouter = express.Router()

ClientRouter
    .post("/cadastrar", createClient)


export {
    ClientRouter
}