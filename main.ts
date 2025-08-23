// main.ts
// Interactive house building console application

import * as readline from "readline";
import { ConstructionCompany } from "./ConstructionCompany";

class HouseBuildingApp {
  private company: ConstructionCompany;
  private rl: readline.Interface;
  private housesBuilt: number = 0;

  constructor() {
    this.company = new ConstructionCompany();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  public async start(): Promise<void> {
    this.showWelcome();
    await this.mainMenu();
  }

  private showWelcome(): void {
    console.clear();
    console.log("🏗️ ===============================================");
    console.log("    WELCOME TO HOUSE CONSTRUCTION COMPANY");
    console.log("===============================================");
    console.log("We build houses using our proven construction process!");
    console.log("Choose your house type and watch us build it step by step.\n");
  }

  private async mainMenu(): Promise<void> {
    while (true) {
      console.log("🏠 MAIN MENU");
      console.log("=============");
      console.log("1. Build a Wood House 🌳");
      console.log("2. Build a Brick House 🧱");
      console.log("3. Build a Luxury House ✨");
      console.log("4. View Available House Types 📋");
      console.log("5. View Building Statistics 📊");
      console.log("6. Exit 🚪\n");

      const choice = await this.askQuestion("Choose an option (1-6): ");

      switch (choice.trim()) {
        case "1":
          await this.buildHouseInteractive("wood");
          break;
        case "2":
          await this.buildHouseInteractive("brick");
          break;
        case "3":
          await this.buildHouseInteractive("luxury");
          break;
        case "4":
          this.showHouseTypes();
          break;
        case "5":
          this.showStatistics();
          break;
        case "6":
          await this.exitApp();
          return;
        default:
          console.log("❌ Invalid choice! Please select 1-6.\n");
      }
    }
  }

  private async buildHouseInteractive(houseType: string): Promise<void> {
    console.clear();
    console.log(`🏗️ BUILDING A ${houseType.toUpperCase()} HOUSE`);
    console.log("=".repeat(40));

    const confirm = await this.askQuestion(
      `Are you sure you want to build a ${houseType} house? (y/n): `
    );

    if (confirm.toLowerCase() === "y" || confirm.toLowerCase() === "yes") {
      console.log("\n🚀 Starting construction...\n");

      // Add some suspense with delays
      await this.delay(1000);
      this.company.constructHouse(houseType);
      this.housesBuilt++;

      console.log("🎊 Congratulations! Your house is ready!");
      await this.askQuestion("\nPress Enter to continue...");
    } else {
      console.log("❌ Construction cancelled.\n");
      await this.delay(1500);
    }
    console.clear();
  }

  private showHouseTypes(): void {
    console.clear();
    console.log("🏠 AVAILABLE HOUSE TYPES");
    console.log("=========================\n");

    console.log("🌳 WOOD HOUSE");
    console.log("   • Materials: Timber walls");
    console.log("   • Finish: Brown wood stain");
    console.log("   • Features: Basic and cozy");
    console.log("   • Price: $ (Budget-friendly)\n");

    console.log("🧱 BRICK HOUSE");
    console.log("   • Materials: Red brick walls");
    console.log("   • Finish: Natural brick color");
    console.log("   • Features: Chimney + garden path");
    console.log("   • Price: $$ (Mid-range)\n");

    console.log("✨ LUXURY HOUSE");
    console.log("   • Materials: Marble and glass");
    console.log("   • Finish: Premium white paint");
    console.log("   • Features: Pool + gold handles + landscaping");
    console.log("   • Price: $$$ (Premium)\n");

    console.log("💡 All houses follow the same construction process:");
    console.log("   Foundation → Walls → Roof → Paint → Final touches\n");
  }

  private showStatistics(): void {
    console.clear();
    console.log("📊 CONSTRUCTION STATISTICS");
    console.log("===========================\n");
    console.log(`🏠 Total houses built: ${this.housesBuilt}`);
    console.log("🏗️ Construction method: Template Method Pattern");
    console.log("⚡ All houses follow the same proven process");
    console.log("🎯 100% success rate with our construction template!\n");

    if (this.housesBuilt === 0) {
      console.log("🤔 You haven't built any houses yet. Try building one!\n");
    } else if (this.housesBuilt >= 3) {
      console.log("🏆 Wow! You're becoming a construction expert!\n");
    }
  }

  private async exitApp(): Promise<void> {
    console.clear();
    console.log("👋 THANK YOU FOR USING OUR SERVICE!");
    console.log("=====================================");
    console.log(`🏠 Houses built today: ${this.housesBuilt}`);
    console.log("🏗️ Remember: We follow the same process every time!");
    console.log("✨ That's the power of the Template Method Pattern!\n");
    console.log("Goodbye! 👋\n");

    this.rl.close();
  }

  private askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

// Start the interactive application
async function main() {
  const app = new HouseBuildingApp();
  await app.start();
}

main().catch(console.error);
