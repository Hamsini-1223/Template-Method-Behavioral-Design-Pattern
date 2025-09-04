// src/models/brickHouse.ts
import { HouseBuilder } from "./houseBuilder";

export class BrickHouse extends HouseBuilder {
  protected buildWalls(): void {
    console.log("2. Building walls with red bricks");
  }

  protected paintHouse(): void {
    console.log("4. No painting needed - natural brick color");
  }

  protected addFinalTouches(): void {
    console.log("5. Adding brick house chimney");
    console.log("6. Installing brick garden path");
  }
}
