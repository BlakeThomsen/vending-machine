import GameService from "../Services/gameservice.js"
let _gameservice = new GameService();

let total = 0

function _draw() {
  document.getElementById("total").innerText = total.toString();
}

export default class GameController {

  addCart() {
    console.log("add cart from controller")
  }
  constructor() {
    console.log("Hello from Game Controller");
  }
}