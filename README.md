# Spice Spice Baby Monorepo

## Contents

- API Server written in Go
- Mobile app written in Typescript

## Feature Plans/Ideas

### Add recipe

- Users should be able to add their own recipes, including tags/ingredients etc
- Should have some sort of fuzzy matching to keep user input consistent with db structure? LLM?

### Inventory Management 📋

- Users can add what's in their kitchen
  - Text input or picture + image recognition + barcode scanning (?)
- Tracks best before/expiration dates or estimated shelf life

### Meal planner 🥘

- Generates meal plan for a week
- User can exclude/include recipes
- Current inventory can be taken into account
- User can select which meals to schedule for (Breakfast/Lunch/Dinner)

### Discover 💡

- Scrolling feed of recipes catered to user by:
  - Taste profile
  - Ingredients used
  - Time commitment?
