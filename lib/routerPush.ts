import Router from "next/router"
import getConfig from "next/config"
import urlParse from "url-parse"

const {publicRuntimeConfig} = getConfig()

const routerBaseURL = publicRuntimeConfig.ROUTER_BASE_URL

const CONFIG_ROUTER_PATH = () => {
    if (!routerBaseURL) return ""
    return urlParse(routerBaseURL, true).pathname
}

export function routerUrlOf(path: string) {
    const routerPath = CONFIG_ROUTER_PATH()
    if (path === undefined || path === null) {
        return "/"
    }

    if (!routerPath || routerPath === "/") return path
    return `${routerPath}${path && path.startsWith("/") ? "" : "/"}${path}`
}

export const routerPush = (path: string) => {
    if (path.startsWith("http://") || path.startsWith("https://")) {
        Router.push(path)
    } else {
        const url = routerUrlOf(path)
        Router.push(path, url)
    }
}
