// src/demo.ts
import { ConstructionCompany } from "./services/constructionCompany";

function runDemo(): void {
  try {
    console.log("🏠 TEMPLATE METHOD PATTERN DEMO");
    console.log("================================\n");

    const company = new ConstructionCompany();
    const houseTypes = company.getAvailableHouseTypes();

    console.log(
      "Building different house types using the same construction template:\n"
    );

    houseTypes.forEach((type, index) => {
      company.constructHouse(type);

      if (index < houseTypes.length - 1) {
        console.log("=".repeat(50) + "\n");
      }
    });

    console.log("\n🎯 KEY TAKEAWAY:");
    console.log(
      "All houses follow the same building process with customized implementations."
    );
    console.log("This demonstrates the Template Method Pattern in action!\n");
  } catch (error) {
    console.error(
      "Demo failed:",
      error instanceof Error ? error.message : "Unknown error"
    );
    process.exit(1);
  }
}

runDemo();
