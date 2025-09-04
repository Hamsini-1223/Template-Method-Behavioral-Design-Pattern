// src/models/luxuryHouse.ts
import { HouseBuilder } from "./houseBuilder";

export class LuxuryHouse extends HouseBuilder {
  protected buildWalls(): void {
    console.log("2. Building walls with marble and glass");
  }

  protected paintHouse(): void {
    console.log("4. Applying premium white paint");
  }

  protected addFinalTouches(): void {
    console.log("5. Installing swimming pool");
    console.log("6. Adding gold door handles");
    console.log("7. Landscaping with exotic plants");
  }
}
