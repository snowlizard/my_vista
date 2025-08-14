export type app = {
    title: string,
    icon: string,
    entry: string,
    hidden: boolean,
    index: string,
    maximized: boolean,
    zIndex: number,
    type: string,
}

export type appState = {
    desktop: Array<app>,
    running: Array<app>,
    currentApp: app | null
}