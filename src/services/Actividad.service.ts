import { Actividad } from '../types'
import { db } from './database.service'

export const getAllTODO = () => {
  const stm = db.prepare('SELECT * FROM Actividad')

  return stm.all() as Actividad[]
}
