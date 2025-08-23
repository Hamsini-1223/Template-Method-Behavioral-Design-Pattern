# Template Method Design Pattern - House Builder

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16.0+-green.svg)](https://nodejs.org/)
[![Built by](https://img.shields.io/badge/Built%20by-Ms%20Hamsini%20S-brightgreen.svg)]()

A TypeScript implementation of the Template Method behavioral design pattern using a house construction example.

## Overview

The Template Method pattern defines the skeleton of an algorithm in a base class, allowing subclasses to override specific steps without changing the algorithm's structure.

This project demonstrates the pattern through a house construction company that follows the same building process for all house types while allowing customization of materials and features.

## Project Structure

```
├── HouseBuilder.ts          # Abstract template class
├── WoodHouse.ts            # Wood house implementation
├── BrickHouse.ts           # Brick house implementation
├── LuxuryHouse.ts          # Luxury house implementation
├── ConstructionCompany.ts   # Business logic coordinator
├── main.ts                 # Interactive console application
├── demo.ts                 # Simple demonstration
├── package.json            # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/template-method-house-builder.git
cd template-method-house-builder

# Install dependencies
npm install

# Run interactive version
npm run dev

# Or run simple demo
npm run demo
```

## Usage

### Interactive Mode

```bash
npm run dev
```

Provides a console menu to build different house types and view statistics.

### Demo Mode

```bash
npm run demo
```

Demonstrates all house types in sequence without user interaction.

### Build and Run

```bash
npm run build
npm start
```

## House Types

| Type   | Materials                       | Features                        |
| ------ | ------------------------------- | ------------------------------- |
| Wood   | Timber walls, wood stain        | Basic design                    |
| Brick  | Red brick walls, natural finish | Chimney, garden path            |
| Luxury | Marble walls, premium paint     | Pool, gold handles, landscaping |

## Pattern Implementation

### Template Method Structure

```typescript
abstract class HouseBuilder {
  // Template method - defines algorithm skeleton
  public buildHouse(): void {
    this.layFoundation(); // Same for all
    this.buildWalls(); // Different for each type
    this.installRoof(); // Same for all
    this.paintHouse(); // Different for each type
    this.addFinalTouches(); // Optional customization
  }

  // Concrete methods
  private layFoundation(): void {
    /* implementation */
  }
  private installRoof(): void {
    /* implementation */
  }

  // Abstract methods - must be implemented
  protected abstract buildWalls(): void;
  protected abstract paintHouse(): void;

  // Hook method - can be overridden
  protected addFinalTouches(): void {
    /* default */
  }
}
```

### Key Components

- **Template Method**: `buildHouse()` defines the construction algorithm
- **Concrete Methods**: Common steps shared by all house types
- **Abstract Methods**: Steps that must be customized by each house type
- **Hook Methods**: Optional customization points

## Sample Output

### Interactive Mode Output

```
🏗️ ===============================================
    WELCOME TO HOUSE CONSTRUCTION COMPANY
===============================================
We build houses using our proven construction process!
Choose your house type and watch us build it step by step.

🏠 MAIN MENU
=============
1. Build a Wood House 🌳
2. Build a Brick House 🧱
3. Build a Luxury House ✨
4. View Available House Types 📋
5. View Building Statistics 📊
6. Exit 🚪

Choose an option (1-6): 2

🏗️ BUILDING A BRICK HOUSE
========================================
Are you sure you want to build a brick house? (y/n): y

🚀 Starting construction...

🏗️ Building a BRICK house:
===================================
📋 Using our standard construction template...

🏗️ Starting house construction...

1. Laying foundation...
2. Building walls with red bricks
3. Installing roof...
4. No painting needed - natural brick color
5. Adding brick house chimney
6. Installing brick garden path
✅ House completed!

✅ BRICK house construction completed!
🎯 Another successful build using our proven template!

🎊 Congratulations! Your house is ready!

Press Enter to continue...
```

### Demo Mode Output

```
🏠 TEMPLATE METHOD PATTERN DEMO
================================

Building different house types using the SAME construction template:

🏗️ Building a WOOD house:
===================================
📋 Using our standard construction template...

🏗️ Starting house construction...

1. Laying foundation...
2. Building wooden walls with timber
3. Installing roof...
4. Painting with brown wood stain
5. Basic cleanup done.
✅ House completed!

✅ WOOD house construction completed!
🎯 Another successful build using our proven template!

==================================================

🏗️ Building a BRICK house:
===================================
📋 Using our standard construction template...

🏗️ Starting house construction...

1. Laying foundation...
2. Building walls with red bricks
3. Installing roof...
4. No painting needed - natural brick color
5. Adding brick house chimney
6. Installing brick garden path
✅ House completed!

✅ BRICK house construction completed!
🎯 Another successful build using our proven template!

==================================================

🏗️ Building a LUXURY house:
===================================
📋 Using our standard construction template...

🏗️ Starting house construction...

1. Laying foundation...
2. Building walls with marble and glass
3. Installing roof...
4. Applying premium white paint
5. Installing swimming pool
6. Adding gold door handles
7. Landscaping with exotic plants
✅ House completed!

✅ LUXURY house construction completed!
🎯 Another successful build using our proven template!

🎯 KEY TAKEAWAY:
All houses follow the SAME building process:
1. Foundation → 2. Walls → 3. Roof → 4. Paint → 5. Final touches
But each house type customizes the materials and finishes!

✨ This is the Template Method Pattern in action!
🚀 Run 'npm run dev' for the interactive version!
```

### House Types Information Output

```
🏠 AVAILABLE HOUSE TYPES
=========================

🌳 WOOD HOUSE
   • Materials: Timber walls
   • Finish: Brown wood stain
   • Features: Basic and cozy
   • Price: $ (Budget-friendly)

🧱 BRICK HOUSE
   • Materials: Red brick walls
   • Finish: Natural brick color
   • Features: Chimney + garden path
   • Price: $ (Mid-range)

✨ LUXURY HOUSE
   • Materials: Marble and glass
   • Finish: Premium white paint
   • Features: Pool + gold handles + landscaping
   • Price: $$ (Premium)

💡 All houses follow the same construction process:
   Foundation → Walls → Roof → Paint → Final touches
```

### Statistics Output

```
📊 CONSTRUCTION STATISTICS
===========================

🏠 Total houses built: 3
🏗️ Construction method: Template Method Pattern
⚡ All houses follow the same proven process
🎯 100% success rate with our construction template!

🏆 Wow! You're becoming a construction expert!
```

## Extending the Pattern

To add a new house type:

1. Create a new class extending `HouseBuilder`:

```typescript
export class StoneHouse extends HouseBuilder {
  protected buildWalls(): void {
    console.log("2. Building walls with natural stone");
  }

  protected paintHouse(): void {
    console.log("4. Applying stone sealer");
  }
}
```

2. Register it in `ConstructionCompany`:

```typescript
if (houseType === "stone") {
  builder = new StoneHouse();
}
```

## Available Scripts

| Command         | Description                 |
| --------------- | --------------------------- |
| `npm run dev`   | Run interactive application |
| `npm run demo`  | Run simple demonstration    |
| `npm run build` | Compile TypeScript          |
| `npm start`     | Run compiled code           |
| `npm run clean` | Remove build files          |

## Pattern Benefits

- **Code Reuse**: Common construction steps are centralized
- **Consistency**: All houses follow the same building process
- **Flexibility**: Easy to add new house types
- **Maintainability**: Algorithm changes in one location
- **Polymorphism**: Same interface works with all implementations

## Requirements

- Node.js 16.0 or higher
- TypeScript 5.0 or higher

## Author

Built by **Ms Hamsini S**

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Acknowledgments

Based on the Template Method design pattern from "Design Patterns: Elements of Reusable Object-Oriented Software" by the Gang of Four.

**Template Method Pattern Implementation by Ms Hamsini S**
