import {config} from 'dotenv'
import express from 'express'
import { createPool } from 'mysql2/promise'
import morgan from 'morgan'

config()

const app = express()

const pool = createPool({
    host: process.env.MYSQL_DB_HOST,
    user: process.env.MYSQL_ROOT_USERNAME,
    password: process.env.MYSQL_ROOT_PASSWORD,
    port: process.env.MYSQL_DOCKER_PORT
})

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.get('/', (req,res)=>{
    res.send("Develop faster. Run anywhere.")
})

app.get('/tool', async (req,res)=>{
    const result = await pool.query('SELECT NOW()')
    res.json(result[0])
})

app.listen(process.env.NODE_DOCKER_PORT)
console.log(`Server running on http://127.0.0.1:${process.env.NODE_DOCKER_PORT}`)