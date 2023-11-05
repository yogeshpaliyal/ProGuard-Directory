import { runCommand } from "./utils";


export const fetchContributors = async (filePath: string): Promise<string[]> => {
    try {
        const gitContributors = await runCommand(`git log --follow --format="%aN" ${ filePath }`)
        if (gitContributors) {
            return gitContributors.split('\n').filter(name => name.trim() !== '');
        }
    } catch (e) {
        console.log("fetchContributors", e)
    }
    return []
}

export const fetchLastUpdate = async (filePath: string): Promise<string | undefined> => {
    try {
        const lastUpdatedTime = await runCommand(`git log -1 --format="%ad" -- ${ filePath }`)
        if (lastUpdatedTime) {
            return lastUpdatedTime.trim();
        }
    } catch (e) {
        console.log("fetchContributors", e)
    }
    return undefined
}
