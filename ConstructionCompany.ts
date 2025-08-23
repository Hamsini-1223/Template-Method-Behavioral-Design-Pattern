// ConstructionCompany.ts
// The construction company that builds different houses

import { HouseBuilder } from "./HouseBuilder";
import { WoodHouse } from "./WoodHouse";
import { BrickHouse } from "./BrickHouse";
import { LuxuryHouse } from "./LuxuryHouse";

export class ConstructionCompany {
  public constructHouse(houseType: string): void {
    let builder: HouseBuilder;

    if (houseType === "wood") {
      builder = new WoodHouse();
    } else if (houseType === "brick") {
      builder = new BrickHouse();
    } else if (houseType === "luxury") {
      builder = new LuxuryHouse();
    } else {
      console.log("❌ We don't know how to build that type!");
      console.log("Available types: wood, brick, luxury");
      return;
    }

    console.log(`🏗️ Building a ${houseType.toUpperCase()} house:`);
    console.log("=".repeat(35));

    // Show that we're using the same template method for all house types
    console.log("📋 Using our standard construction template...\n");

    builder.buildHouse();

    console.log(`✅ ${houseType.toUpperCase()} house construction completed!`);
    console.log("🎯 Another successful build using our proven template!\n");
  }

  public getAvailableHouseTypes(): string[] {
    return ["wood", "brick", "luxury"];
  }

  public getHouseDescription(houseType: string): string {
    const descriptions: { [key: string]: string } = {
      wood: "🌳 Cozy timber house with natural wood finish",
      brick: "🧱 Sturdy brick house with chimney and garden path",
      luxury: "✨ Premium house with marble walls and luxury amenities",
    };

    return descriptions[houseType] || "❌ Unknown house type";
  }
}
