// demo.ts
// Simple non-interactive demo of the Template Method pattern

import { ConstructionCompany } from "./ConstructionCompany";

function simpleDemo() {
  console.log("🏠 TEMPLATE METHOD PATTERN DEMO");
  console.log("================================\n");

  const company = new ConstructionCompany();

  console.log(
    "Building different house types using the SAME construction template:\n"
  );

  // Build all house types to show they follow the same process
  company.constructHouse("wood");
  console.log("\n" + "=".repeat(50) + "\n");

  company.constructHouse("brick");
  console.log("\n" + "=".repeat(50) + "\n");

  company.constructHouse("luxury");

  console.log("\n🎯 KEY TAKEAWAY:");
  console.log("All houses follow the SAME building process:");
  console.log(
    "1. Foundation → 2. Walls → 3. Roof → 4. Paint → 5. Final touches"
  );
  console.log("But each house type customizes the materials and finishes!\n");

  console.log("✨ This is the Template Method Pattern in action!");
  console.log("🚀 Run 'npm run dev' for the interactive version!");
}

simpleDemo();
