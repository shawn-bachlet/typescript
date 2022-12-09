import colors from 'colors/safe'
import dotenv from 'dotenv'

import packageJson from '../package.json'

const envResult = dotenv.config()

if (envResult.error) {
  // tslint:disable-next-line:no-console
  console.error(
    `${colors.red('[ERROR] env failed to load:')} ${envResult.error}`
  )

  process.exit(1)
}

function requireFromEnv (key: string): string {
  if (!process.env[key]) {
    // tslint:disable-next-line:no-console
    console.error(`${colors.red('[APP ERROR] Missing env variable:')} ${key}`)

    return process.exit(1)
  }

  return process.env[key]
}

export type Env = {
    appName: string,
    env: string,
    port: number,
    version: string
    databaseUrl: string
}

export const env: Env = {
    appName: requireFromEnv('APP_NAME'),
    env: requireFromEnv('NODE_ENV'),
    port: parseInt(requireFromEnv('PORT'), 10),
    databaseUrl: requireFromEnv('DATABASE_URL'),
    version: packageJson.version
}