import cors from 'cors'
import bodyParser from 'body-parser'
import { ClientRouter } from './routes/ClientRoutes.js'
import express from 'express'

const app = express()

app.use(cors({
    origin: '*'
}))

app.use(bodyParser.json())
app.use('/clientes', ClientRouter)

export default app