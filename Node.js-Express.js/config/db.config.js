import { Pool } from 'pg'

const pgConf = {
  user: "postgres",
  database: "example",
  password: "postgress",
  host: "db",
  port: "5432",
  max: 10,
  idleTimeoutMillis: 30000
}

export const pool = new Pool(pgConf)

