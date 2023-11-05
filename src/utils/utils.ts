import * as childProcess from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(childProcess.exec);

export const runCommand = async (command: string): Promise<string | undefined> => {
    try {
        const { stdout, stderr } = await execAsync(command);
        return stdout
    }catch (e) {
        console.log("Command Run", e)
    }
    return undefined
}
