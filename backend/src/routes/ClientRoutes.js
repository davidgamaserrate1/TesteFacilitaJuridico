import express from "express";
import {calculateRoute, createClient, listClientById, listClients, listClientsByCriteria, removeClientById, updateClientById} from "../controllers/ClientController.js";

const ClientRouter = express.Router()

ClientRouter
    .get("/", listClients)
    .get("/calcular-rota", calculateRoute)
    .get("/filtro", listClientsByCriteria)
    .get("/:id", listClientById)
    .put("/:id", updateClientById)
    .post("/cadastrar", createClient)
    .delete("/remover/:id", removeClientById)

export { ClientRouter }