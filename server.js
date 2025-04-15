import express, { Router } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { router } from './routes/router.js'


dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const PORT  = process.env.PORT || 7070


app.use(router)


app.listen(PORT ,()=>{
    console.log(`server started: http://localhost:${PORT}`)
})