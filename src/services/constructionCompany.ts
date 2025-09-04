// src/services/constructionCompany.ts
import { HouseBuilder } from "../models/houseBuilder";
import { WoodHouse } from "../models/woodHouse";
import { BrickHouse } from "../models/brickHouse";
import { LuxuryHouse } from "../models/luxuryHouse";

export class ConstructionCompany {
  private readonly validHouseTypes = ["wood", "brick", "luxury"];

  public constructHouse(houseType: string): void {
    try {
      if (!this.isValidHouseType(houseType)) {
        throw new Error(
          `Invalid house type: ${houseType}. Available types: ${this.validHouseTypes.join(
            ", "
          )}`
        );
      }

      const builder = this.createHouseBuilder(houseType);

      console.log(`🏗️ Building a ${houseType.toUpperCase()} house:`);
      console.log("=".repeat(35));
      console.log("📋 Using standard construction template...\n");

      builder.buildHouse();

      console.log(
        `✅ ${houseType.toUpperCase()} house construction completed!`
      );
      console.log("🎯 Construction successful!\n");
    } catch (error) {
      console.error(
        "❌ Construction failed:",
        error instanceof Error ? error.message : "Unknown error"
      );
      throw error;
    }
  }

  private isValidHouseType(houseType: string): boolean {
    return this.validHouseTypes.includes(houseType.toLowerCase());
  }

  private createHouseBuilder(houseType: string): HouseBuilder {
    switch (houseType.toLowerCase()) {
      case "wood":
        return new WoodHouse();
      case "brick":
        return new BrickHouse();
      case "luxury":
        return new LuxuryHouse();
      default:
        throw new Error(`Unsupported house type: ${houseType}`);
    }
  }

  public getAvailableHouseTypes(): string[] {
    return [...this.validHouseTypes];
  }

  public getHouseDescription(houseType: string): string {
    const descriptions: Record<string, string> = {
      wood: "🌳 Timber house with natural wood finish",
      brick: "🧱 Brick house with chimney and garden path",
      luxury: "✨ Premium house with marble walls and luxury amenities",
    };

    return descriptions[houseType.toLowerCase()] || "❌ Unknown house type";
  }
}
