# Template Method Pattern - House Builder

A TypeScript implementation of the Template Method behavioral design pattern demonstrating how to define a skeleton algorithm while allowing subclasses to customize specific steps.

## Overview

The Template Method pattern defines the skeleton of an algorithm in a base class, allowing subclasses to override specific steps without changing the algorithm's structure. This implementation uses a house construction process where all house types follow the same building steps but with customized implementations.

## Installation

```bash
npm install
npm run dev    # Interactive mode
npm run demo   # Simple demonstration
```

## Project Structure

```
├── src/
│   ├── models/
│   │   ├── houseBuilder.ts           # Abstract base (Template Method pattern)
│   │   ├── woodHouse.ts              # Concrete: builds a wood house
│   │   ├── brickHouse.ts             # Concrete: builds a brick house
│   │   └── luxuryHouse.ts            # Concrete: builds a luxury house
│   │
│   ├── services/
│   │   └── constructionCompany.ts    # Factory + orchestrates house construction
│   │
│   ├── main.ts                       # Interactive CLI app (user chooses house type)
│   └── demo.ts                       # Quick demo / test run (non-interactive)
│
├── README.md                         # Documentation
├── package.json                      # Project dependencies & scripts
└── tsconfig.json                     # TypeScript configuration

```

## Pattern Implementation

### Core Template Method

The `HouseBuilder` abstract class defines the template method that all house types must follow:

```typescript
abstract class HouseBuilder {
  // Template Method - defines the algorithm skeleton
  public buildHouse(): void {
    this.layFoundation(); // Common implementation
    this.buildWalls(); // Abstract - must be implemented
    this.installRoof(); // Common implementation
    this.paintHouse(); // Abstract - must be implemented
    this.addFinalTouches(); // Hook method - optional override
  }

  // Common steps implemented in base class
  private layFoundation(): void {
    console.log("1. Laying foundation...");
  }

  private installRoof(): void {
    console.log("3. Installing roof...");
  }

  // Abstract methods - subclasses must implement
  protected abstract buildWalls(): void;
  protected abstract paintHouse(): void;

  // Hook method - subclasses can override
  protected addFinalTouches(): void {
    console.log("5. Basic cleanup done.");
  }
}
```

### Concrete Implementations

Each house type implements the abstract methods differently:

**Wood House:**

```typescript
export class WoodHouse extends HouseBuilder {
  protected buildWalls(): void {
    console.log("2. Building wooden walls with timber");
  }

  protected paintHouse(): void {
    console.log("4. Painting with brown wood stain");
  }
  // Uses default addFinalTouches()
}
```

**Brick House:**

```typescript
export class BrickHouse extends HouseBuilder {
  protected buildWalls(): void {
    console.log("2. Building walls with red bricks");
  }

  protected paintHouse(): void {
    console.log("4. No painting needed - natural brick color");
  }

  // Overrides hook method
  protected addFinalTouches(): void {
    console.log("5. Adding brick house chimney");
    console.log("6. Installing brick garden path");
  }
}
```

**Luxury House:**

```typescript
export class LuxuryHouse extends HouseBuilder {
  protected buildWalls(): void {
    console.log("2. Building walls with marble and glass");
  }

  protected paintHouse(): void {
    console.log("4. Applying premium white paint");
  }

  // Extensive customization of hook method
  protected addFinalTouches(): void {
    console.log("5. Installing swimming pool");
    console.log("6. Adding gold door handles");
    console.log("7. Landscaping with exotic plants");
  }
}
```

## Usage Examples

### Interactive Mode

```bash
npm run dev
```

This launches an interactive CLI where you can:

- Build different house types
- View house type descriptions
- See construction statistics

### Demo Mode

```bash
npm run demo
```

## Expected Output

### Demo Mode Output

```
🏠 TEMPLATE METHOD PATTERN DEMO
================================

Building different house types using the same construction template:

🏗️ Building a WOOD house:
===================================
📋 Using standard construction template...

🏗️ Starting house construction...

1. Laying foundation...
2. Building wooden walls with timber
3. Installing roof...
4. Painting with brown wood stain
5. Basic cleanup done.
✅ House completed!

✅ WOOD house construction completed!
🎯 Construction successful!

==================================================

🏗️ Building a BRICK house:
===================================
📋 Using standard construction template...

🏗️ Starting house construction...

1. Laying foundation...
2. Building walls with red bricks
3. Installing roof...
4. No painting needed - natural brick color
5. Adding brick house chimney
6. Installing brick garden path
✅ House completed!

✅ BRICK house construction completed!
🎯 Construction successful!

==================================================

🏗️ Building a LUXURY house:
===================================
📋 Using standard construction template...

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
🎯 Construction successful!

🎯 KEY TAKEAWAY:
All houses follow the same building process with customized implementations.
This demonstrates the Template Method Pattern in action!
```

### Interactive Mode Sample Session

```
🏗️ HOUSE CONSTRUCTION COMPANY
===============================
Professional house building using proven construction methods.

🏠 MAIN MENU
=============
1. Build Wood House
2. Build Brick House
3. Build Luxury House
4. View House Types
5. View Statistics
6. Exit

Choose option (1-6): 4

🏠 AVAILABLE HOUSE TYPES
=========================

WOOD HOUSE
  • Materials: Timber walls
  • Features: Basic design
  • Price: $

BRICK HOUSE
  • Materials: Red brick walls
  • Features: Chimney, garden path
  • Price: $$

LUXURY HOUSE
  • Materials: Marble walls
  • Features: Pool, premium finishes
  • Price: $$$

All houses follow the same construction process.
```

## Key Pattern Benefits

1. **Code Reuse**: Common steps (foundation, roof) are implemented once in the base class
2. **Consistency**: All house types follow the same construction sequence
3. **Flexibility**: Each house type can customize specific steps (walls, painting, finishing)
4. **Extensibility**: New house types can be added easily by extending the base class
5. **Maintainability**: Algorithm structure is centralized and protected from modification

## Pattern Structure

- **Template Method** (`buildHouse()`): Defines the algorithm skeleton
- **Primitive Operations** (`buildWalls()`, `paintHouse()`): Abstract methods that subclasses must implement
- **Concrete Operations** (`layFoundation()`, `installRoof()`): Common implementations in base class
- **Hook Methods** (`addFinalTouches()`): Optional methods that subclasses can override

## Scripts

| Command         | Description             |
| --------------- | ----------------------- |
| `npm run dev`   | Interactive application |
| `npm run demo`  | Simple demonstration    |
| `npm run build` | Compile TypeScript      |
| `npm start`     | Run compiled code       |
| `npm run clean` | Remove build directory  |

## Requirements

- Node.js 16.0+
- TypeScript 5.0+

## Built By

Ms Hamsini S
