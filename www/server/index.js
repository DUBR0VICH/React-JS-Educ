import express from 'express'
import mainRoute from './routes/mainRoute.js'
import { dbConnect } from './db/db.js';
import postsRoute from './routes/postRoute.js'

const app = express();
const PORT = 3900

app.use(express.json())
app.use(mainRoute)
app.use(postsRoute)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
    dbConnect()
})