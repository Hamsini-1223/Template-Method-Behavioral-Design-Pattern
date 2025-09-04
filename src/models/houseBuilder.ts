// src/models/houseBuilder.ts
export abstract class HouseBuilder {
  public buildHouse(): void {
    try {
      console.log("🏗️ Starting house construction...\n");

      this.layFoundation();
      this.buildWalls();
      this.installRoof();
      this.paintHouse();
      this.addFinalTouches();

      console.log("✅ House completed!\n");
    } catch (error) {
      console.error(
        "❌ Construction failed:",
        error instanceof Error ? error.message : "Unknown error"
      );
      throw error;
    }
  }

  private layFoundation(): void {
    console.log("1. Laying foundation...");
  }

  private installRoof(): void {
    console.log("3. Installing roof...");
  }

  protected abstract buildWalls(): void;
  protected abstract paintHouse(): void;

  protected addFinalTouches(): void {
    console.log("5. Basic cleanup done.");
  }
}
