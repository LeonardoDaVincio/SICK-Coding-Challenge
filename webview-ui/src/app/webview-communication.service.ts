import { Injectable } from '@angular/core';
import { WebviewApi } from "vscode-webview";

@Injectable({
  providedIn: 'root'
})
export class WebviewCommunicationService {

  private vscode: WebviewApi<any> = acquireVsCodeApi<any>();

  constructor() { 
    console.log(this.vscode);
  }

  /**
   * Post a message (i.e. send arbitrary data) to the owner of the webview.
   *
   * @remarks When running webview code inside a web browser, postMessage will instead
   * log the given message to the console.
   *
   * @param message Abitrary data (must be JSON serializable) to send to the extension context.
   */
  postMessage(message: unknown) {
    console.log("post message", message);
    if (this.vscode) {
      console.log("posting...");
      this.vscode.postMessage(message);
    } else {
      console.log(message);
    }
  }

  /**
   * Get the persistent state stored for this webview.
   *
   * @remarks When running webview source code inside a web browser, getState will retrieve state
   * from local storage (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
   *
   * @return The current state or `undefined` if no state has been set.
   */
  getState(): unknown | undefined {
    if (this.vscode) {
      return this.vscode.getState();
    } else {
      const state = localStorage.getItem("vscodeState");
      return state ? JSON.parse(state) : undefined;
    }
  }

  /**
   * Set the persistent state stored for this webview.
   *
   * @remarks When running webview source code inside a web browser, setState will set the given
   * state using local storage (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
   *
   * @param newState New persisted state. This must be a JSON serializable object. Can be retrieved
   * using {@link getState}.
   *
   * @return The new state.
   */
  setState<T extends unknown | undefined>(newState: T): T {
    if (this.vscode) {
      return this.vscode.setState(newState);
    } else {
      localStorage.setItem("vscodeState", JSON.stringify(newState));
      return newState;
    }
  }

}
