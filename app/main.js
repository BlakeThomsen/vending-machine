import GameController from "./Controller/gamecontroller.js"

class App {
  constructor() {
    console.log("Hello from app")
    this.GameController = new GameController();
  }
}

window["app"] = new App()