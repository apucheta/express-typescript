import express from 'express'
import * as diaryServices from '../services/diary.service'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedEntry = diaryServices.addDiary(newDiaryEntry)
    res.json(addedEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  return (diary != null) ? res.send(diary) : res.sendStatus(404)
})
export default router
