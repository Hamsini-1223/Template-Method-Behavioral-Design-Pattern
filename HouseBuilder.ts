// HouseBuilder.ts
// Base class that defines HOW to build a house (the template)

export abstract class HouseBuilder {
  // This is the Template Method - it defines the steps to build ANY house
  public buildHouse(): void {
    console.log("🏗️ Starting house construction...\n");

    this.layFoundation();
    this.buildWalls();
    this.installRoof();
    this.paintHouse();
    this.addFinalTouches(); // Hook method - optional

    console.log("✅ House completed!\n");
  }

  // Steps that every house needs (concrete methods)
  private layFoundation(): void {
    console.log("1. Laying foundation...");
  }

  private installRoof(): void {
    console.log("3. Installing roof...");
  }

  // Steps that can be different for each house type (abstract methods)
  protected abstract buildWalls(): void;
  protected abstract paintHouse(): void;

  // Hook method - subclasses can override if they want
  protected addFinalTouches(): void {
    console.log("5. Basic cleanup done.");
  }
}
