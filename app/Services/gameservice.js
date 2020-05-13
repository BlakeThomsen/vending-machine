import Target from "../Models/target.js"
var _target = new Target();

export default class GameService {
  addCart() {
    console.log("add cart from service")
  }
  constructor() {
    console.log("Hello from Game Service");
  }
}