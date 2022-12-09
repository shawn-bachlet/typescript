import { Router, Response } from "express"
import { Request } from "../types/request"

export type RecordViewingActions = {
    recordViewing: (traceId: string, videoId: string) => Promise<void>
}

export type RecordViewingHandlers = {
    handleRecordViewing: (req: Request, res: Response) => Promise<void>
}

export type RecordViewingApp = {
    actions: RecordViewingActions,
    handlers: RecordViewingHandlers,
    router: Router
}