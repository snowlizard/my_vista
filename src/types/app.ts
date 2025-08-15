export type app = {
    title: string,
    icon: string,
    entry: string,
    hidden: boolean,
    index: string,
    maximized: boolean,
    zIndex: number,
    type: string,
    location: {
        desktop: boolean,
        pinned: boolean,
        folder: string
    }
}

export type appState = {
    desktop: Array<app>,
    running: Array<app>,
    all: Array<app>,
    pinned: Array<app>,
    currentApp: app | null
}