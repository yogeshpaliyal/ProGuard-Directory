import * as fs from 'fs';

const directory = './proguards'
fs.readdir(directory, (err: any, files: string[]) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // 'files' is an array containing the names of all files in the directory
    console.log('Files in the directory:', files);

    const newJson: {name: string, link: string}[] = []
    files.forEach((item: string) => {
        try {
            const dataSync = fs.readFileSync(directory + "/" + item, 'utf8');
            const json = JSON.parse(dataSync)
            if (json.name) {
                newJson.push(json)
            }
        } catch (e) {
            console.log(e)
        }
    })

    newJson.sort((a, b) => a.name.localeCompare(b.name));

    var finalOutPut = `// Auto Generated //
        export const data = ${JSON.stringify(newJson)}`

    fs.writeFile('src/db.ts', finalOutPut, (error) => {
        console.log("Error", error)
    })

    // You can now use this information in your React components or further process the files.
});

