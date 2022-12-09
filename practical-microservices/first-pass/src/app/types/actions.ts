export type Actions = {
    recordViewing: (traceId: string, videoId: string) => Promise<void>
}