// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "firmware-compatibility-matcher" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let openWebview = vscode.commands.registerCommand('firmware-compatibility-matcher.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		const panel = vscode.window.createWebviewPanel(
			'openWebview',
			'Example Page',
			vscode.ViewColumn.One,
			{
				enableScripts: true,
				localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, "src", "resources"))]
			}
			);
			
		// Kleiner Umweg, um die HTML Datei aus dem File-System zu lesen
		const indexUri = vscode.Uri.file(path.join(context.extensionPath, "src", "resources", "index.html"));
		panel.webview.html = fs.readFileSync(indexUri.fsPath,"utf8");
	});
	context.subscriptions.push(openWebview);
}

// This method is called when your extension is deactivated
export function deactivate() {}
