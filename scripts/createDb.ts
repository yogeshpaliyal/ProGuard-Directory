import * as fs from 'fs';
import { ProguardInfo } from "../src/types/proguard-info";
import { runCommand } from "../src/utils/utils";
import { fetchContributors, fetchLastUpdate } from "../src/utils/git-utils";

const directory = './proguards'
fs.readdir(directory, async (err: any, files: string[]) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // 'files' is an array containing the names of all files in the directory
    console.log('Files in the directory:', files);

    const newJson: ProguardInfo[] = []
    for (const item of files) {
        try {
            console.log("Start fetching file info", item)
            const filePath = directory + "/" + item
            const dataSync = fs.readFileSync(filePath, 'utf8');
            const json: ProguardInfo = JSON.parse(dataSync)
            if (json.name) {
                json.contributors = await fetchContributors(filePath)
                json.lastUpdated = await fetchLastUpdate(filePath)
                newJson.push(json)
            }
            console.log("End fetching file info", json)
        } catch (e) {
            console.log("Error fetching file info", e)
        }
    }


    console.log("End fetching files", newJson)

    newJson.sort((a, b) => a.name.localeCompare(b.name));

    var finalOutPut = `// Auto Generated //
 import { ProguardInfo } from "./types/proguard-info";
 export const data: ProguardInfo[] = ${ JSON.stringify(newJson) }`

    fs.writeFile('src/db.ts', finalOutPut, (error) => {
        console.log("Error", error)
    })

    // You can now use this information in your React components or further process the files.
});

