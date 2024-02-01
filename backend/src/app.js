import cors from 'cors'
import bodyParser from 'body-parser'
import {ClientRouter} from './Routes/ClientRoutes.js'
import express from 'express'

const app = express()

app.use(cors({
    origin: '*'
}))

app.use(bodyParser.json())
app.use('/cliente', ClientRouter)

export default app