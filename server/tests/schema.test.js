import { graphql } from 'graphql';
import { schema } from '../graphql/schema.js';

describe('GraphQL API', () => {
    // Test for appetizers query with specific item validation
    it('fetches appetizers with specific item details', async () => {
        const query = `
            query {
                appetizers {
                    name
                    description
                    price
                }
            }
        `;
        const result = await graphql({
            schema: schema,
            source: query,
        });
        
        expect(result.data.appetizers).toBeDefined();
        expect(result.data.appetizers.length).toBeGreaterThan(0);
        
        // Check specific appetizer details
        const icebergWedge = result.data.appetizers.find(item => item.name === "Iceberg Wedge Salad");
        expect(icebergWedge).toBeDefined();
        expect(icebergWedge.description).toContain("House Cured Bacon");
        expect(icebergWedge.price).toBeCloseTo(7.50, 2); // Price comparison with 2 decimal places
    });

    // Test for entrees with price range validation
    it('fetches entrees with price range validation', async () => {
        const query = `
            query {
                entrees {
                    name
                    description
                    price
                }
            }
        `;
        const result = await graphql({
            schema: schema,
            source: query,
        });
        
        expect(result.data.entrees).toBeDefined();
        expect(result.data.entrees.length).toBeGreaterThan(0);
        
        // Check price ranges
        const prices = result.data.entrees.map(item => item.price);
        expect(Math.min(...prices)).toBeGreaterThan(10);
        expect(Math.max(...prices)).toBeLessThan(16);
        
        // Check specific entree details
        const salmonTofu = result.data.entrees.find(item => item.name === "Salmon & Crispy Tofu in Yellow Curry Sauce");
        expect(salmonTofu).toBeDefined();
        expect(salmonTofu.description).toContain("Vegetable sauté");
    });

    // Test for sandwiches with price comparison
    it('fetches sandwiches with price comparison', async () => {
        const query = `
            query {
                sandwiches {
                    cold {
                        name
                        description
                        half_price
                        full_price
                    }
                    hot {
                        name
                        description
                        price
                    }
                }
            }
        `;
        const result = await graphql({
            schema: schema,
            source: query,
        });
        
        expect(result.data.sandwiches).toBeDefined();
        expect(result.data.sandwiches.cold.length).toBeGreaterThan(0);
        expect(result.data.sandwiches.hot.length).toBeGreaterThan(0);
        
        // Check price relationships
        result.data.sandwiches.cold.forEach(sandwich => {
            expect(sandwich.full_price).toBeGreaterThan(sandwich.half_price);
            expect(sandwich.full_price - sandwich.half_price).toBeCloseTo(1.30, 2);
        });
        
        // Check specific sandwich details
        const turkeyAvocado = result.data.sandwiches.cold.find(item => item.name === "Turkey & Avocado");
        expect(turkeyAvocado).toBeDefined();
        expect(turkeyAvocado.description).toContain("With tomato");
    });

    // Test for salads with complex description validation
    it('fetches salads with complex description validation', async () => {
        const query = `
            query {
                salads {
                    name
                    description
                    price
                }
            }
        `;
        const result = await graphql({
            schema: schema,
            source: query,
        });
        
        expect(result.data.salads).toBeDefined();
        expect(result.data.salads.length).toBeGreaterThan(0);
        
        // Check complex salad with multiple ingredients
        const mediterranean = result.data.salads.find(item => item.name === "Mediterranean");
        expect(mediterranean).toBeDefined();
        
        // Verify all ingredients are present in description
        const ingredients = ["Italian sausage", "artichoke hearts", "green beans", "Roma tomato", 
                           "kalamatas", "red onion", "cucumber", "croutons", "parmesan", 
                           "fresh mozzarella", "gorgonzola vinaigrette"];
        ingredients.forEach(ingredient => {
            expect(mediterranean.description.toLowerCase()).toContain(ingredient.toLowerCase());
        });
    });

    // Test for tacos with sides validation
    it('fetches tacos with sides validation', async () => {
        const query = `
            query {
                tacos {
                    name
                    description
                    price
                    sides
                }
            }
        `;
        const result = await graphql({
            schema: schema,
            source: query,
        });
        
        expect(result.data.tacos).toBeDefined();
        expect(result.data.tacos.length).toBeGreaterThan(0);
        
        // Check sides consistency
        result.data.tacos.forEach(taco => {
            expect(taco.sides).toBeDefined();
            expect(Array.isArray(taco.sides)).toBe(true);
            expect(taco.sides.length).toBeGreaterThan(0);
            
            // Check for specific sides
            const commonSides = ["red rice", "black beans", "corn & romaine salad", "tortilla chips"];
            commonSides.forEach(side => {
                expect(taco.sides).toContain(side);
            });
        });
    });

    // Test for fajitas with sides validation
    it('fetches fajitas with sides validation', async () => {
        const query = `
            query {
                fajitas {
                    name
                    description
                    price
                    sides
                }
            }
        `;
        const result = await graphql({
            schema: schema,
            source: query,
        });
        
        expect(result.data.fajitas).toBeDefined();
        expect(result.data.fajitas.length).toBeGreaterThan(0);
        
        // Check sides consistency
        result.data.fajitas.forEach(fajita => {
            expect(fajita.sides).toBeDefined();
            expect(Array.isArray(fajita.sides)).toBe(true);
            expect(fajita.sides.length).toBeGreaterThan(0);
            
            // Check for specific sides
            const commonSides = ["red rice", "black beans", "grilled tomato salad", "corn tortillas", "flour tortillas"];
            commonSides.forEach(side => {
                expect(fajita.sides).toContain(side);
            });
        });
    });

    // Test for enchiladas with price progression validation
    it('fetches enchiladas with price progression validation', async () => {
        const query = `
            query {
                enchiladas {
                    uno {
                        name
                        price
                    }
                    dos {
                        name
                        price
                    }
                    tres {
                        name
                        price
                    }
                    specials {
                        name
                        description
                        price
                    }
                }
            }
        `;
        const result = await graphql({
            schema: schema,
            source: query,
        });
        
        expect(result.data.enchiladas).toBeDefined();
        
        // Check price progression
        const unoPrices = result.data.enchiladas.uno.map(item => item.price);
        const dosPrices = result.data.enchiladas.dos.map(item => item.price);
        const tresPrices = result.data.enchiladas.tres.map(item => item.price);
        
        expect(Math.min(...unoPrices)).toBeLessThan(Math.min(...dosPrices));
        expect(Math.min(...dosPrices)).toBeLessThan(Math.min(...tresPrices));
        
        // Check specials price range
        const specialsPrices = result.data.enchiladas.specials.map(item => item.price);
        expect(Math.min(...specialsPrices)).toBeGreaterThan(Math.max(...tresPrices));
    });

    // Test for quiche with options validation
    it('fetches quiche with options validation', async () => {
        const query = `
            query {
                quiche {
                    name
                    options
                    price
                    includes
                }
            }
        `;
        const result = await graphql({
            schema: schema,
            source: query,
        });
        
        expect(result.data.quiche).toBeDefined();
        expect(result.data.quiche.length).toBeGreaterThan(0);
        
        // Check options and includes
        result.data.quiche.forEach(quiche => {
            expect(quiche.options).toBeDefined();
            expect(Array.isArray(quiche.options)).toBe(true);
            expect(quiche.options.length).toBeGreaterThan(0);
            
            expect(quiche.includes).toBeDefined();
            expect(Array.isArray(quiche.includes)).toBe(true);
            expect(quiche.includes.length).toBeGreaterThan(0);
            
            // Check specific options
            const expectedOptions = ["Bacon, Swiss, Mushroom", "Zucchini and Mushroom"];
            expectedOptions.forEach(option => {
                expect(quiche.options).toContain(option);
            });
        });
    });
});