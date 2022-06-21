import express from 'express'

import diaryRouter from './routes/diaries'
const app = express()
app.use(express.json()) // middleware que parsea la req.body a un json

const PORT = 3000

app.get('/ping', (_req, res) => {
  // Se cambia req -> _req ya que no se toma en cuenta
  console.log('pingearon!!')
  res.send('PONG')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server creado en el puerto ${PORT}`)
})
