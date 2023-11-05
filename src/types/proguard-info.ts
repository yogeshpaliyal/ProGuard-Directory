

export interface ProguardInfoJSON{
    name: string,
    link: string,
    tags?: string[]
}

export interface ProguardInfo extends ProguardInfoJSON {
    contributors?: string[],
    addedOn?: string,
    lastUpdated?: string
}
