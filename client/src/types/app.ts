export type app = {
    title: string,
    icon: string,
    entry: string,
    hidden: boolean,
    index: string,
    maximized: boolean,
    zIndex: number,
}

export type appState = {
    desktop: Array<app>,
    running: Array<app>,
    currentApp: app | null
}