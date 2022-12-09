import express from "express";
import camelCaseKeys from "camelcase-keys";

function createHandlers(queries: any): { home: (req: any, res: { render: (arg0: string, arg1: any) => any; }, next: any) => any } {
    function home (req: any, res: { render: (arg0: string, arg1: any) => any; }, next: any) {
        return queries
            .loadHomePage()
            .then((viewData: any) =>
                res.render("home/templates/home", viewData)
            )
            .catch(next)
    }
    return { home }
}

function createQueries(db: Promise<any>): { loadHomePage: () => Promise<any> } {
    function loadHomePage (): Promise<any> {
        return db.then(client =>
            client('videos')
            .sum('view_count as videosWatched')
            .then((rows: any[]) => rows[0])
        )
    }
    return { loadHomePage }
}

export function createHome(db: any) {
    const queries = createQueries(db)
    const handlers = createHandlers(queries)
    const router = express.Router()

    router.route("/").get(handlers.home)

    return { handlers, queries, router }

}


