import Bluebird from "bluebird"
import { Knex } from "knex"
import { RecordViewingApp } from "./record-viewing"

export type Config = {
  env: string,
  db: Bluebird<Knex<any, unknown[]>>,
  homeApp: any
  recordViewingsApp: RecordViewingApp
}