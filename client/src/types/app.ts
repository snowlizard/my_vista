export interface app {
    title: string,
    icon: string,
    entry: string,
    open: boolean,
    index: string,
    maximized: boolean
}

export interface appState {
    desktop: Array<app>,
    running: Array<app>
}