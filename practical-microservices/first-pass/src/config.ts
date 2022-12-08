import { Env } from "./env"

export type Config = { env: string }

export default function createConfig (env: Env): Config {
  return {
    env: env.env,
  }
}