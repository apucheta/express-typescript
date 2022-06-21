import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diary.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
      return {
        id, date, weather, visibility
      }
    })
  }

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(diary => diary.id === id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}
export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newEntry = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }

  diaries.push(newEntry)
  return newEntry
}
