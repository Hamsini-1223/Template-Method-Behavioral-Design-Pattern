// src/main.ts
import * as readline from "readline";
import { ConstructionCompany } from "./services/constructionCompany";

class HouseBuildingApp {
  private readonly company: ConstructionCompany;
  private readonly rl: readline.Interface;
  private housesBuilt: number = 0;

  constructor() {
    this.company = new ConstructionCompany();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  public async start(): Promise<void> {
    try {
      this.showWelcome();
      await this.mainMenu();
    } catch (error) {
      console.error(
        "Application error:",
        error instanceof Error ? error.message : "Unknown error"
      );
    } finally {
      this.rl.close();
    }
  }

  private showWelcome(): void {
    console.clear();
    console.log("🏗️ HOUSE CONSTRUCTION COMPANY");
    console.log("===============================");
    console.log(
      "Professional house building using proven construction methods.\n"
    );
  }

  private async mainMenu(): Promise<void> {
    while (true) {
      try {
        console.log("🏠 MAIN MENU");
        console.log("=============");
        console.log("1. Build Wood House");
        console.log("2. Build Brick House");
        console.log("3. Build Luxury House");
        console.log("4. View House Types");
        console.log("5. View Statistics");
        console.log("6. Exit\n");

        const choice = await this.askQuestion("Choose option (1-6): ");

        if (!this.isValidChoice(choice)) {
          console.log("❌ Invalid choice. Please select 1-6.\n");
          continue;
        }

        if (choice === "6") {
          await this.exitApp();
          return;
        }

        await this.handleMenuChoice(choice);
      } catch (error) {
        console.error(
          "Menu error:",
          error instanceof Error ? error.message : "Unknown error"
        );
        await this.askQuestion("Press Enter to continue...");
      }
    }
  }

  private isValidChoice(choice: string): boolean {
    return ["1", "2", "3", "4", "5", "6"].includes(choice.trim());
  }

  private async handleMenuChoice(choice: string): Promise<void> {
    const houseTypes = ["wood", "brick", "luxury"];

    switch (choice.trim()) {
      case "1":
      case "2":
      case "3":
        await this.buildHouseInteractive(houseTypes[parseInt(choice) - 1]);
        break;
      case "4":
        this.showHouseTypes();
        break;
      case "5":
        this.showStatistics();
        break;
    }
  }

  private async buildHouseInteractive(houseType: string): Promise<void> {
    console.clear();
    console.log(`🏗️ BUILDING ${houseType.toUpperCase()} HOUSE`);
    console.log("=".repeat(30));

    const confirm = await this.askQuestion(`Confirm construction? (y/n): `);

    if (confirm.toLowerCase() === "y" || confirm.toLowerCase() === "yes") {
      try {
        console.log("\n🚀 Starting construction...\n");
        await this.delay(1000);

        this.company.constructHouse(houseType);
        this.housesBuilt++;

        console.log("🎉 Construction completed successfully!");
      } catch (error) {
        console.error(
          "Construction error:",
          error instanceof Error ? error.message : "Unknown error"
        );
      }
    } else {
      console.log("❌ Construction cancelled.");
    }

    await this.askQuestion("\nPress Enter to continue...");
    console.clear();
  }

  private showHouseTypes(): void {
    console.clear();
    console.log("🏠 AVAILABLE HOUSE TYPES");
    console.log("=========================\n");

    const types = [
      {
        name: "WOOD HOUSE",
        materials: "Timber walls",
        features: "Basic design",
        price: "$",
      },
      {
        name: "BRICK HOUSE",
        materials: "Red brick walls",
        features: "Chimney, garden path",
        price: "$$",
      },
      {
        name: "LUXURY HOUSE",
        materials: "Marble walls",
        features: "Pool, premium finishes",
        price: "$$$",
      },
    ];

    types.forEach((type) => {
      console.log(`${type.name}`);
      console.log(`  • Materials: ${type.materials}`);
      console.log(`  • Features: ${type.features}`);
      console.log(`  • Price: ${type.price}\n`);
    });

    console.log("All houses follow the same construction process.\n");
  }

  private showStatistics(): void {
    console.clear();
    console.log("📊 CONSTRUCTION STATISTICS");
    console.log("===========================\n");
    console.log(`🏠 Houses built: ${this.housesBuilt}`);
    console.log("🏗️ Method: Template Method Pattern");
    console.log("✅ Success rate: 100%\n");

    if (this.housesBuilt === 0) {
      console.log("Build your first house to see more statistics.\n");
    }
  }

  private async exitApp(): Promise<void> {
    console.clear();
    console.log("👋 THANK YOU");
    console.log("=============");
    console.log(`Houses built: ${this.housesBuilt}`);
    console.log("Template Method Pattern demonstration complete.\n");
  }

  private askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(question, (answer) => {
        resolve(answer.trim());
      });
    });
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

async function main(): Promise<void> {
  const app = new HouseBuildingApp();
  await app.start();
}

main().catch((error) => {
  console.error(
    "Application startup failed:",
    error instanceof Error ? error.message : "Unknown error"
  );
  process.exit(1);
});
