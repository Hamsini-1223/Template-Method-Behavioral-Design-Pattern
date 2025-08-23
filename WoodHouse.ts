// WoodHouse.ts
// Simple wood house implementation

import { HouseBuilder } from "./HouseBuilder";

export class WoodHouse extends HouseBuilder {
  protected buildWalls(): void {
    console.log("2. Building wooden walls with timber");
  }

  protected paintHouse(): void {
    console.log("4. Painting with brown wood stain");
  }
}
