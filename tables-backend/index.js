import express from 'express'
import pg from 'pg'
import cors from 'cors'
import { PORT, DBCONFIG } from './config.js'
import { PAGE_COUNT } from './constants.js'
import DBScripts from './DB/scripts.js'

const app = express()
const dbCliect = new pg.Client(DBCONFIG)
const DB = new DBScripts(dbCliect, PAGE_COUNT)

const startServer = async () => {
    try {
        dbCliect.connect()
        console.log('__--connection to database was successful--__')
    } catch (err) {
        console.error(err)
    }
    console.log(`__server is running on port ${PORT}__`)
}

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send(`<h3>This is the main route</h3>`)
})

app.get('/tables/:id', async (req, res) => {
    const { id } = req.params
    const items = await DB.getTables(id)
    const totalCount = await DB.getTotalCount()
    if (items) {
        res.json({
            resultCode: 0,
            totalCount,
            items
        })
    } else {
        res.json({
            resultCode: 1
        })
    }
    
})

app.listen(PORT, startServer)