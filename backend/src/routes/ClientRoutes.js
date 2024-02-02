import express from "express";
import {createClient, listClientById, listClients, listClientsByCriteria, removeClientById, updateClientById} from "../controllers/ClientController.js";

const ClientRouter = express.Router()

ClientRouter
    .get("/", listClients)
    .get("/filtro", listClientsByCriteria)
    .get("/:id", listClientById)
    .put("/:id", updateClientById)
    .post("/cadastrar", createClient)
    .delete("/remover/:id", removeClientById)

export { ClientRouter }