import express from "express";
import {createClient, listClientById, listClients, removeClientById, updateClientById} from "../Controllers/clientController.js";

const ClientRouter = express.Router()

ClientRouter
    .get("/", listClients)
    .get("/:id", listClientById)
    .put("/:id", updateClientById)
    .post("/cadastrar", createClient)
    .delete("/remover/:id", removeClientById)


export {
    ClientRouter
}