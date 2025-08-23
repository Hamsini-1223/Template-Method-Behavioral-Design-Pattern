// BrickHouse.ts
// Brick house implementation

import { HouseBuilder } from "./HouseBuilder";

export class BrickHouse extends HouseBuilder {
  protected buildWalls(): void {
    console.log("2. Building walls with red bricks");
  }

  protected paintHouse(): void {
    console.log("4. No painting needed - natural brick color");
  }

  // Override the hook to add special features
  protected addFinalTouches(): void {
    console.log("5. Adding brick house chimney");
    console.log("6. Installing brick garden path");
  }
}
