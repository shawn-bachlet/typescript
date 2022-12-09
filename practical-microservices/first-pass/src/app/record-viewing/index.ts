import Bluebird from 'bluebird'
import express from 'express'
import { Knex } from 'knex'
import { Actions } from '../types/actions'
import { RecordViewingApp, RecordViewingActions, RecordViewingHandlers} from '../types/record-viewing'
import { Request } from '../types/request'

function createActions(db: Bluebird<Knex<any, unknown[]>>): RecordViewingActions {
    function recordViewing(traceId: string, videoId: string): Promise<void> {
        return db.then(() => {
            // tslint:disable-next-line:no-console
            console.log(`[${traceId}] recording viewing of video: ${videoId}`)
        })
    }
    return {
        recordViewing
    }
}

function createHandlers (actions: Actions): RecordViewingHandlers {
    function handleRecordViewing(req: Request, res: express.Response): Promise<void> {
        return actions
        . recordViewing(req.context.traceId, req.params.videoId)
        . then(() => res.redirect('/'))
    }
    return {
        handleRecordViewing
    }
}

export function createRecordViewings(db: Bluebird<Knex<any, unknown[]>> ): RecordViewingApp {
    const actions = createActions(db)
    const handlers = createHandlers(actions)
    const router = express.Router()

    router.route('/:videoId').post(handlers.handleRecordViewing)

    return {
        actions,
        handlers,
        router
    }
}