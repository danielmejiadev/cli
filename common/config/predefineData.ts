import * as path from 'path';

export class PredefineData {
    projectDir = path.join(__dirname, "../../");
    executionDir = process.cwd();
    templatePath = path.join(this.projectDir, "../template");
    commandsPath = path.join(this.projectDir, "./engine/commands");
    functionHandlerPath = path.join(this.projectDir, "/common/functions/handler.js");
    functionWrapperPath = path.join(this.projectDir, "/common/functions/wrapper.js");
}