import Database from 'better-sqlite3'
import path from 'path'

const connect = new Database(path.join(__dirname, '../../mydb.db'), {
  verbose: console.log,
  fileMustExist: true
})

connect.pragma('journal_mode = WAL')

export const db = connect
