const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotenv.config();

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, default: '' },
    category: { type: String, required: true },
    sizes: { type: Array, default: [] },
    flavors: { type: Array, default: [] },
    starchOptions: { type: Array, default: [] }
}, { timestamps: true });

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

// Complete menu data using your backend assets folder paths
const menuData = [
    // Hot Beverages Items
    {
        name: "Recoffee",
        price: "M20",
        image: "/assets/coffee1.jpeg",
        description: "Rich and aromatic instant coffee",
        category: "HotBeverages"
    },
    {
        name: "Hot Chocolate",
        price: "M25",
        image: "/assets/hot-chocolate.jpeg",
        description: "Creamy and comforting hot chocolate",
        category: "HotBeverages"
    },
    {
        name: "Jacobs Coffee",
        price: "M25",
        image: "/assets/coffee2.jpeg",
        description: "Premium German coffee",
        category: "HotBeverages"
    },
    {
        name: "Frisco Coffee",
        price: "M20",
        image: "/assets/coffee3.jpeg",
        description: "Smooth and balanced coffee",
        category: "HotBeverages"
    },
    {
        name: "Cappuccino",
        price: "M25",
        image: "/assets/coffee2.jpeg",
        description: "Espresso with steamed milk foam",
        category: "HotBeverages"
    },
    {
        name: "Freshpack Tea",
        price: "M15",
        image: "/assets/tea.jpeg",
        description: "Refreshing tea selection",
        category: "HotBeverages"
    },

    // BreakFast Items
    {
        name: "Break Fast Sandwich",
        price: "M35",
        image: "/assets/break-fast1.jpg",
        description: "Chicken Mayo, baked beans, Vianna, Boiled Eggs",
        category: "BreakFast"
    },
    {
        name: "Break Fast Sandwich (Green Salad)",
        price: "M35",
        image: "/assets/break-fast2.jpg",
        description: "Chicken Mayo, Green Salad, vianna, Scrambled eggs",
        category: "BreakFast"
    },
    {
        name: "Toasted bread, fish and chips",
        price: "M35",
        image: "/assets/break-fast2.jpg",
        description: "Chicken Mayo, Green Salad, vianna, Scrambled eggs",
        category: "BreakFast"
    },
    {
        name: "Break Fast Sandwich (Vegetables)",
        price: "M20",
        image: "/assets/break-fast3.jpeg",
        description: "Chicken Mayo, Vegetables",
        category: "BreakFast"
    },
    {
        name: "Break Fast Burger",
        price: "M25",
        image: "/assets/break-fast4.jpeg",
        description: "Ham, Cheese, Scrambled eggs, lettuce",
        category: "BreakFast"
    },
    {
        name: "Break Fast Mini Pizza",
        price: "M20",
        image: "/assets/break-fast5.jpeg",
        description: "Chicken, Ham, Vegetables",
        category: "BreakFast"
    },

    // Lunch Items
    {
        name: "Chicken Quarter Leg",
        price: "M50",
        image: "/assets/chicken-leg-quarters-5.jpg",
        description: "Juicy chicken portions with traditional sides",
        category: "Lunch",
        starchOptions: [
            { label: "Papa", addon: 0 },
            { label: "Samp", addon: 0 },
            { label: "Rice", addon: 0 },
            { label: "Chips", addon: 0 },
            { label: "Leqebekoane", addon: 5 }
        ]
    },
    {
        name: "Chicken Wings",
        price: "M40",
        image: "/assets/chicken-wings.jpg",
        description: "2 hot wings and salad",
        category: "Lunch",
        starchOptions: [
            { label: "Papa", addon: 0 },
            { label: "Samp", addon: 0 },
            { label: "Rice", addon: 0 },
            { label: "Chips", addon: 0 },
            { label: "Leqebekoane", addon: 5 }
        ]
    },
    {
        name: "Chicken Curry",
        price: "M45",
        image: "/assets/chicken-wings.jpg",
        description: "Creamy chicken curry with traditional sides",
        category: "Lunch",
        starchOptions: [
            { label: "Papa", addon: 0 },
            { label: "Samp", addon: 0 },
            { label: "Rice", addon: 0 },
            { label: "Leqebekoane", addon: 5 }
        ]
    },
    {
        name: "Lekakarane",
        price: "M45",
        image: "/assets/chicken-wings.jpg",
        description: "Traditional lekakarane served with accompaniments",
        category: "Lunch",
        starchOptions: [
            { label: "Papa", addon: 0 },
            { label: "Samp", addon: 0 },
            { label: "Rice", addon: 0 },
            { label: "Leqebekoane", addon: 5 }
        ]
    },
    {
        name: "Pork",
        price: "M50",
        image: "/assets/Grilled-Pork-Chop.jpg",
        description: "Tender pork cuts served with papa and moroho/chakalaka",
        category: "Lunch",
        starchOptions: [
            { label: "Papa", addon: 0 },
            { label: "Samp", addon: 0 },
            { label: "Rice", addon: 0 },
            { label: "Leqebekoane", addon: 5 }
        ]
    },
    {
        name: "Beef",
        price: "M50",
        image: "/assets/lunch4.jpeg",
        description: "Flavorful beef cuts with traditional accompaniments",
        category: "Lunch",
        starchOptions: [
            { label: "Papa", addon: 0 },
            { label: "Samp", addon: 0 },
            { label: "Rice", addon: 0 },
            { label: "Leqebekoane", addon: 5 }
        ]
    },
    {
        name: "Oxtail",
        price: "M65",
        image: "/assets/lunch5.jpeg",
        description: "Slow-cooked tender oxtail with rich sauce",
        category: "Lunch",
        starchOptions: [
            { label: "Papa", addon: 0 },
            { label: "Samp", addon: 0 },
            { label: "Rice", addon: 0 },
            { label: "Leqebekoane", addon: 5 }
        ]
    },
    {
        name: "Likahare (mutton)",
        price: "M35",
        image: "/assets/lunch6.jpeg",
        description: "Traditional tripe served with accompaniments",
        category: "Lunch",
        starchOptions: [
            { label: "Papa", addon: 0 },
            { label: "Samp", addon: 0 },
            { label: "Rice", addon: 0 },
            { label: "Leqebekoane", addon: 5 }
        ]
    },
    {
        name: "Likahare (beef)",
        price: "M30",
        image: "/assets/lunch6.jpeg",
        description: "Traditional tripe served with accompaniments",
        category: "Lunch",
        starchOptions: [
            { label: "Papa", addon: 0 },
            { label: "Samp", addon: 0 },
            { label: "Rice", addon: 0 },
            { label: "Leqebekoane", addon: 5 }
        ]
    },
    {
        name: "Livers (Chicken)",
        price: "M30",
        image: "/assets/lunch7.jpeg",
        description: "Spicy peri-peri chicken livers with sides",
        category: "Lunch",
        starchOptions: [
            { label: "Papa", addon: 0 },
            { label: "Samp", addon: 0 },
            { label: "Rice", addon: 0 },
            { label: "Leqebekoane", addon: 5 }
        ]
    },
    {
        name: "Livers (Beef)",
        price: "M30",
        image: "/assets/lunch7.jpeg",
        description: "Spicy peri-peri beef livers with sides",
        category: "Lunch",
        starchOptions: [
            { label: "Papa", addon: 0 },
            { label: "Samp", addon: 0 },
            { label: "Rice", addon: 0 },
            { label: "Leqebekoane", addon: 5 }
        ]
    },
    {
        name: "Chicken Hearts",
        price: "M30",
        image: "/assets/lunch8.jpeg",
        description: "Grilled chicken hearts seasoned to perfection",
        category: "Lunch",
        starchOptions: [
            { label: "Papa", addon: 0 },
            { label: "Samp", addon: 0 },
            { label: "Rice", addon: 0 },
            { label: "Leqebekoane", addon: 5 }
        ]
    },
    {
        name: "Linaoa",
        price: "M25",
        image: "/assets/lunch9.jpeg",
        description: "Traditional beans served with accompaniments",
        category: "Lunch",
        starchOptions: [
            { label: "Papa", addon: 0 },
            { label: "Samp", addon: 0 },
            { label: "Rice", addon: 0 },
            { label: "Leqebekoane", addon: 5 }
        ]
    },
    {
        name: "Hlooho ea nku",
        price: "M25",
        image: "/assets/lunch9.jpeg",
        description: "Traditional sheep head delicacy",
        category: "Lunch",
        sizes: [
            { label: "Mohlare", price: "M20" },
            { label: "Sekopo", price: "M30" },
            { label: "Tlhakoana", price: "M10" }
        ],
        starchOptions: [
            { label: "Papa", addon: 0 },
            { label: "Samp", addon: 0 },
            { label: "Rice", addon: 0 },
            { label: "Leqebekoane", addon: 5 }
        ]
    },

    // Classics Items
    {
        name: "Fries",
        price: "M15",
        image: "/assets/fries.jpeg",
        description: "Crispy golden fries",
        category: "classics",
        sizes: [
            { label: "Small", price: "M15" },
            { label: "Medium", price: "M20" },
            { label: "Large", price: "M25" }
        ]
    },
    {
        name: "Chinese Food",
        price: "M20",
        image: "/assets/chinese-food.jpeg",
        description: "Delicious Chinese cuisine",
        category: "classics",
        sizes: [
            { label: "Small", price: "M20" },
            { label: "Medium", price: "M25" },
            { label: "Large", price: "M30" }
        ]
    },
    {
        name: "Lekoenya",
        price: "M1",
        image: "/assets/lekoenya.jpg",
        description: "Traditional fried dough",
        category: "classics"
    },
    {
        name: "Bread Roll",
        price: "M10",
        image: "/assets/bread-roll.jpeg",
        description: "Fresh baked bread roll",
        category: "classics"
    },
    {
        name: "Sausage Roll",
        price: "M15",
        image: "/assets/bread-roll.jpeg",
        description: "Flaky pastry with sausage",
        category: "classics"
    },
    {
        name: "Mabaso",
        price: "M8",
        image: "/assets/bread-roll.jpeg",
        description: "Traditional snack",
        category: "classics"
    },
    {
        name: "Leqebekoane",
        price: "M10",
        image: "/assets/bread-roll.jpeg",
        description: "Traditional delicacy",
        category: "classics"
    },
    {
        name: "Smoked Russian",
        price: "M8",
        image: "/assets/russian.jpeg",
        description: "Smoked Russian sausage",
        category: "classics",
        sizes: [
            { label: "Small", price: "M10" },
            { label: "Large", price: "M20" }
        ]
    },
    {
        name: "Fish",
        price: "M20",
        image: "/assets/fish.jpg",
        description: "Crispy fried fish",
        category: "classics",
        sizes: [
            { label: "Small", price: "M20" },
            { label: "Medium", price: "M25" },
            { label: "Large", price: "M30" }
        ]
    },

    // Drinks Items
    {
        name: "Coca-Cola",
        price: "M15",
        image: "/assets/coca-cola.jpeg",
        description: "The classic refreshing cola",
        category: "Drinks",
        sizes: [
            { label: "300ml", price: "M15" },
            { label: "1 Litre", price: "M20" },
            { label: "2 Litre", price: "M30" }
        ]
    },
    {
        name: "Fanta",
        price: "M15",
        image: "/assets/fanta.jpeg",
        description: "Fruity and refreshing",
        category: "Drinks",
        sizes: [
            { label: "300ml", price: "M15" },
            { label: "1 Litre", price: "M20" },
            { label: "2 Litre", price: "M28" }
        ],
        flavors: [
            { label: "Orange", color: "#f97316" },
            { label: "Grape", color: "#7c3aed" },
            { label: "Pineapple", color: "#eab308" }
        ]
    },
    {
        name: "Twist",
        price: "M15",
        image: "/assets/fanta.jpeg",
        description: "Fruity and refreshing",
        category: "Drinks",
        sizes: [
            { label: "300ml", price: "M15" },
            { label: "1 Litre", price: "M20" },
            { label: "2 Litre", price: "M28" }
        ],
        flavors: [
            { label: "Lemon", color: "#f97316" },
            { label: "Granadilla", color: "#7c3aed" }
        ]
    },
    {
        name: "Cappy",
        price: "M15",
        image: "/assets/fanta.jpeg",
        description: "Fruity and refreshing",
        category: "Drinks",
        sizes: [
            { label: "300ml", price: "M15" },
            { label: "1 Litre", price: "M20" },
            { label: "2 Litre", price: "M28" }
        ],
        flavors: [
            { label: "Tropical", color: "#f97316" },
            { label: "Breakfast blend", color: "#7c3aed" }
        ]
    },
    {
        name: "Liqui Fruit",
        price: "M20",
        image: "/assets/fanta.jpeg",
        description: "Fruity and refreshing juice",
        category: "Drinks",
        sizes: [
            { label: "300ml", price: "M20" }
        ],
        flavors: [
            { label: "Orange", color: "#f97316" },
            { label: "Grape", color: "#7c3aed" },
            { label: "Fruit blend", color: "#eab308" }
        ]
    },
    {
        name: "Rhodes",
        price: "M35",
        image: "/assets/fanta.jpeg",
        description: "Premium fruit juice",
        category: "Drinks",
        sizes: [
            { label: "1 Litre", price: "M35" }
        ],
        flavors: [
            { label: "Tropical", color: "#f97316" }
        ]
    },
    {
        name: "Sprite",
        price: "M15",
        image: "/assets/sprite.jpeg",
        description: "Crisp lemon-lime refreshment",
        category: "Drinks",
        sizes: [
            { label: "300ml", price: "M15" },
            { label: "1 Litre", price: "M20" },
            { label: "2 Litre", price: "M28" }
        ],
        flavors: [
            { label: "Lemon-Lime", color: "#84cc16" },
            { label: "Cranberry", color: "#be123c" }
        ]
    },
    {
        name: "Oros",
        price: "M12",
        image: "/assets/sprite.jpeg",
        description: "Refreshing orange drink",
        category: "Drinks",
        sizes: [
            { label: "300ml", price: "M12" },
            { label: "500ml", price: "M17" }
        ]
    },
    {
        name: "Switch",
        price: "M12",
        image: "/assets/red-bull.jpeg",
        description: "Energy drink",
        category: "Drinks",
        flavors: [
            { label: "Dry Lemon", color: "#84cc16" },
            { label: "Element", color: "#3b82f6" }
        ]
    },
    {
        name: "Dragon",
        price: "M15",
        image: "/assets/red-bull.jpeg",
        description: "Premium energy drink",
        category: "Drinks",
        flavors: [
            { label: "Original", color: "#ef4444" },
            { label: "Element", color: "#3b82f6" }
        ]
    },
    {
        name: "Reboost",
        price: "M15",
        image: "/assets/red-bull.jpeg",
        description: "Energy drink",
        category: "Drinks"
    },
    {
        name: "Powerate",
        price: "M19",
        image: "/assets/powerate.jpeg",
        description: "Sports drink",
        category: "Drinks"
    },
    {
        name: "Redbull",
        price: "M25",
        image: "/assets/powerate.jpeg",
        description: "Premium energy drink",
        category: "Drinks"
    },
    {
        name: "Appletiser",
        price: "M25",
        image: "/assets/powerate.jpeg",
        description: "Sparkling apple juice",
        category: "Drinks"
    },
    {
        name: "Grapetiser",
        price: "M25",
        image: "/assets/powerate.jpeg",
        description: "Sparkling grape juice",
        category: "Drinks"
    },
    {
        name: "Twizza",
        price: "M15",
        image: "/assets/powerate.jpeg",
        description: "Soft drink",
        category: "Drinks"
    },
    {
        name: "Alkaline Water",
        price: "M25",
        image: "/assets/powerate.jpeg",
        description: "Alkaline spring water",
        category: "Drinks"
    },
    {
        name: "Dewdrop",
        price: "M10",
        image: "/assets/powerate.jpeg",
        description: "Flavoured drink",
        category: "Drinks",
        sizes: [
            { label: "500ml", price: "M10" },
            { label: "1L", price: "M15" },
            { label: "1.5L", price: "M20" }
        ]
    },
    {
        name: "Stoney Ginger Beer",
        price: "M15",
        image: "/assets/stoney.jpeg",
        description: "Bold and spicy ginger kick",
        category: "Drinks",
        sizes: [
            { label: "300ml", price: "M15" },
            { label: "1 Litre", price: "M20" },
            { label: "2 Litre", price: "M30" }
        ],
        flavors: [
            { label: "Original", color: "#d97706" },
            { label: "Extra Bold", color: "#92400e" }
        ]
    }
];

// Function to check which images exist in the assets folder
function checkExistingImages() {
    const assetsPath = path.join(__dirname, 'assets');
    const missingImages = [];
    const foundImages = [];
    
    if (!fs.existsSync(assetsPath)) {
        console.log(`\n⚠️  Assets folder not found at: ${assetsPath}`);
        console.log('Please create the assets folder and add your images there.');
        return { missingImages, foundImages };
    }
    
    const uniqueImages = [...new Set(menuData.map(item => item.image))];
    
    uniqueImages.forEach(imagePath => {
        const filename = path.basename(imagePath);
        const fullPath = path.join(assetsPath, filename);
        
        if (fs.existsSync(fullPath)) {
            foundImages.push(imagePath);
        } else {
            missingImages.push(imagePath);
        }
    });
    
    if (missingImages.length > 0) {
        console.log(`\n⚠️  Missing ${missingImages.length} image(s):`);
        missingImages.forEach(img => console.log(`   - ${img}`));
    } else {
        console.log(`\n✅ All ${foundImages.length} images found in assets folder!`);
    }
    
    return { missingImages, foundImages };
}

async function seedDatabase() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/topgrill');
        console.log('✅ Connected to MongoDB');
        
        // Check which images exist
        console.log('\n📁 Checking assets folder...');
        checkExistingImages();
        
        // Clear existing data
        const deleted = await MenuItem.deleteMany({});
        console.log(`\n🗑️  Cleared ${deleted.deletedCount} existing menu items`);
        
        // Insert new data
        const inserted = await MenuItem.insertMany(menuData);
        console.log(`✅ Inserted ${inserted.length} menu items`);
        
        // Log summary by category
        const categoryCount = {};
        menuData.forEach(item => {
            categoryCount[item.category] = (categoryCount[item.category] || 0) + 1;
        });
        
        console.log('\n📊 Menu Summary by Category:');
        Object.entries(categoryCount).forEach(([category, count]) => {
            console.log(`   ${category}: ${count} items`);
        });
        
        console.log('\n🎉 Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
}

// Run the seed function
seedDatabase();