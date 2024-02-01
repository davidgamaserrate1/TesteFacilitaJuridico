import express from "express";
import {createClient, listClientById, listClients, removeClientById} from "../Controllers/clientController.js";

const ClientRouter = express.Router()

ClientRouter
    .get("/", listClients)
    .get("/:id", listClientById)
    .post("/cadastrar", createClient)
    .delete("/remover/:id", removeClientById)


export {
    ClientRouter
}