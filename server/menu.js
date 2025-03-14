const menu = {
  appetizers: [
    { name: "Iceberg Wedge Salad", description: "House Cured Bacon, tomato salsa, gorgonzola", price: 7.50 },
    { name: "Sautéed Shredded Brussels Sprouts", description: "Bacon, hazelnuts, gorgonzola", price: 6.95 },
    { name: "Kale Salad", description: "Parmesan crisp, corn, radish, garlic-lemon vinaigrette", price: 7.50 },
    { name: "Pecan Crusted Utah Goat Cheese", description: "Basil-Mint Pesto, grilled tomato salsa, crostini", price: 6.95 },
    { name: "Chicken and Cabbage Eggrolls", description: "Hot & sour dipping sauce", price: 6.95 }
  ],
  entrees: [
    { name: "Farfalle Pasta with Braised Pork", description: "Tomato Cream, capers, butternut squash, kale", price: 12.95 },
    { name: "Stout Braised Bratwurst", description: "Horseradish mashed potatoes, roasted root veggies, grilled onion", price: 13.95 },
    { name: "Salmon & Crispy Tofu in Yellow Curry Sauce", description: "Vegetable sauté, golden raisin chutney", price: 15.95 },
    { name: "Sesame Shrimp", description: "Udon noodles, ramen broth, shiitake mushrooms, bean sprouts, scallions", price: 13.95 }
  ],
  sandwiches: {
    cold: [
      { name: "Turkey & Avocado", description: "With tomato", half_price: 7.95, full_price: 9.25 },
      { name: "Pub Club", description: "Turkey, bacon, lettuce, tomato", half_price: 7.95, full_price: 9.25 },
      { name: "Rare Roast Beef & Swiss", description: "Sweet-hot mustard, lettuce, red onion", half_price: 7.95, full_price: 9.25 },
      { name: "Veggie", description: "Pepper jack, avocado, sprout, tomato", half_price: 7.95, full_price: 9.25 }
    ],
    hot: [
      { name: "Southwest Chicken Breast", description: "Grilled onion, poblano pepper, tomato, lettuce, jack cheese", price: 9.50 },
      { name: "Portobello Fresh Mozzarella", description: "Caramelized onion, roasted pepper, tomato, field greens, basil aioli", price: 9.50 },
      { name: "Chipotle BBQ Pork Sandwich", description: "Pickled jalapeño slaw", price: 9.50 },
      { name: "Bacon Burger*", description: "Swiss, lettuce, tomato", price: 9.25 },
      { name: "Mexi Burger*", description: "Pepper relish, pepper jack, tomato, lettuce, guacamole", price: 9.25 },
      { name: "Herb Marinated Top Sirloin*", description: "Crimini mushrooms, caramelized onion, gorgonzola, basil aioli, served open faced on focaccia", price: 10.95 },
      { name: "Roast Beef with Ancho Au Jus", description: "Jack cheese, grilled onions, served on Crumb Bros. baguette", price: 9.75 },
      { name: "Blackened Catfish", description: "Creole peppers & onions, fresh herb aioli, served on house made sourdough", price: 9.75 }
    ]
  },
  soupSalads: {
    soups: [
      { name: "French Onion", price: 4.95 },
      { name: "Soup of the Day", price: 4.95 }
    ],
    combos: [
      { name: "With small green salad, fresh fruit or house pasta", price: 7.25 },
      { name: "With half pasta of the day", price: 8.75 }
    ]
  },
  fajitas: [
    {
      name: "Chicken",
      description: "Onions, Poblano and Bell Peppers, Guacamole, Two Salsas",
      price: 10.95,
      sides: ["red rice", "black beans", "grilled tomato salad", "corn tortillas", "flour tortillas"]
    },
    {
      name: "Sirloin Steak",
      description: "Onions, Poblano and Bell Peppers, Carrots, Onion, Guacamole, Two Salsas",
      price: 10.95,
      sides: ["red rice", "black beans", "grilled tomato salad", "corn tortillas", "flour tortillas"]
    }
  ],
  tacos: [
    {
      name: "Beer Battered Fish",
      description: "Jalapeño Remoulade, Roasted Salsa, Cabbage",
      price: 9.95,
      sides: ["red rice", "black beans", "corn & romaine salad", "tortilla chips"]
    },
    {
      name: "Carne Asada",
      description: "Guacamole, Tomatillo Salsa",
      price: 9.95,
      sides: ["red rice", "black beans", "corn & romaine salad", "tortilla chips"]
    },
    {
      name: "Citrus Marinated Chicken",
      description: "Guacamole, Tomatillo Salsa",
      price: 9.95,
      sides: ["red rice", "black beans", "corn & romaine salad", "tortilla chips"]
    },
    {
      name: "Grilled Veggie",
      description: "Zucchini, Yellow Squash, Bell Peppers, Onion, Guacamole, Tomatillo Salsa",
      price: 9.95,
      sides: ["red rice", "black beans", "corn & romaine salad", "tortilla chips"]
    }
  ],
  enchiladas: {
    uno: [
      { name: "Beef", price: 8.50 },
      { name: "Chicken", price: 8.50 },
      { name: "Cheese", price: 8.50 },
      { name: "Veggie", price: 8.50 }
    ],
    dos: [
      { name: "Beef", price: 9.95 },
      { name: "Chicken", price: 9.95 },
      { name: "Cheese", price: 9.95 },
      { name: "Veggie", price: 9.95 }
    ],
    tres: [
      { name: "Beef", price: 11.50 },
      { name: "Chicken", price: 11.50 },
      { name: "Cheese", price: 11.50 },
      { name: "Veggie", price: 11.50 }
    ],
    specials: [
      {
        name: "Chili Relleno",
        description: "Stuffed with Jack Cheese & Corn Glazed Yam, Chayote Squash Succotash, Red Chili Sauce",
        price: 9.95
      },
      {
        name: "Pepita Crusted Salmon",
        description: "Chipotle Glaze – chevre whipped yams, jicama slaw, tomatillo sauce",
        price: 10.95
      }
    ]
  },
  quiche: [
    {
      name: "Quiche Selection",
      options: ["Bacon, Swiss, Mushroom", "Zucchini and Mushroom"],
      price: 8.95,
      includes: ["Choice of Fresh Fruit or Green Salad"]
    }
  ],
  salads: [
    {
      name: "Grilled Red Trout",
      description: "Lentils, tomatoes, cukes, green beans, red bells, almonds, sundried tomato vinaigrette",
      price: 10.95
    },
    {
      name: "Smoked Turkey",
      description: "Cheese tortellini, bacon, tomato, cucumber, egg, black bean-corn salsa, avocado",
      price: 9.95
    },
    {
      name: "Asian Grilled Chicken",
      description: "Snow peas, carrot slaw, red bells, water chestnut, peanuts, baby corn, cilantro, cukes, spicy peanut dressing",
      price: 10.50
    },
    {
      name: "Southwest Grilled Chicken",
      description: "Tomato, guacamole, pepitas, jicama, corn & black bean salsa, orange wedges, spicy citrus vinaigrette",
      price: 10.50
    },
    {
      name: "Mediterranean",
      description: "Italian sausage, artichoke hearts, green beans, Roma tomato, kalamatas, red onion, cucumber, croutons, parmesan, fresh mozzarella, gorgonzola vinaigrette",
      price: 9.95
    },
    {
      name: "Grilled Salmon",
      description: "Artichoke tapenade, shredded kale, corn, radish, parmesan crisps",
      price: 11.50
    }
  ]
};

export default menu;