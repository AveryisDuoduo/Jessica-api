// const apiUrl = 'https://webservice-sit3.onrender.com';

// document.addEventListener("DOMContentLoaded", () => {
//     const categorySelect = document.getElementById('category-select');
//     const itemSelect = document.getElementById('item-select');
//     const content = document.getElementById('content');

//     categorySelect.addEventListener('change', async () => {
//         const category = categorySelect.value;

//         if (category) {
//             try {
//                 const response = await fetch(`${apiUrl}/menu/category?category=${category}`);
//                 const menuItems = await response.json();
             
//                 populateItemSelect(menuItems);
//             } catch (error) {
//                 content.innerHTML = `<p>Error fetching menu items: ${error}</p>`;
//             }
//         } else {
//             itemSelect.innerHTML = '<option value="">Select Item</option>';
//         }
//     });

//     function populateItemSelect(items) {
//         itemSelect.innerHTML = '<option value="">Select Item</option>';
//         items.forEach(item => {
//             const option = document.createElement('option');
//             option.value = item.id;
//             option.textContent = item.name;
//             itemSelect.appendChild(option);
//         });
//     }

//     itemSelect.addEventListener('change', async () => {
//         const itemId = itemSelect.value;
//         if (itemId) {
//             try {
//                 const response = await fetch(`${apiUrl}/menu/vanilla-latte`);
//                 const itemDetails = await response.json();
//                 displayItemDetails(itemDetails);
//                 console.log(response)
//             } catch (error) {
//                 content.innerHTML = `<p>Error fetching item details: ${error}</p>`;
//             }
//         }
//     });

//     function displayItemDetails(item) {
//         content.innerHTML = `
//             <h2>${item.name}</h2>
//             <p>${item.description}</p>
//             <p>Price: $${item.price.toFixed(2)}</p>
//             <p>Category: ${item.category}</p>
//             <p>Availability: ${item.availability}</p>
//         `;
//     }
// });

const hardcodedData = {
    menu: [
        {
            id: "item_001",
            name: "Vanilla Latte",
            category: "coffee",
            size: ["short", "tall", "grande", "venti"],
            flavor: ["vanilla"],
            price: 5.00,
            availability: "in_stock",
            description: "Creamy vanilla-flavored coffee with steamed milk."
        },
        {
            id: "item_002",
            name: "Blueberry Muffin",
            category: "pastry",
            price: 3.00,
            availability: "in_stock",
            description: "Freshly baked blueberry muffin."
        },
        {
            id: "item_003",
            name: "Iced Peach Green Tea",
            category: "tea",
            size: ["short", "tall", "grande", "venti"],
            price: 5.38,
            availability: "in_stock",
            description: "A chilled mix of green tea, sweet peach, offering a perfect blend of fruity sweetness."
        }
    ]
};


document.addEventListener("DOMContentLoaded", () => {
    const categorySelect = document.getElementById('category-select');
    const itemSelect = document.getElementById('item-select');
    const content = document.getElementById('content');

    categorySelect.addEventListener('change', () => {
        const category = categorySelect.value;

        if (category) {
            const menuItems = hardcodedData.menu.filter(item => item.category === category);
            populateItemSelect(menuItems);
        } else {
            itemSelect.innerHTML = '<option value="">Select Item</option>';
        }
    });

    function populateItemSelect(items) {
        itemSelect.innerHTML = '<option value="">Select Item</option>';
        items.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.name;
            itemSelect.appendChild(option);
        });
    }

    itemSelect.addEventListener('change', () => {
        const itemId = itemSelect.value;
        if (itemId) {
            const itemDetails = hardcodedData.menu.find(item => item.id === itemId);
            if (itemDetails) {
                displayItemDetails(itemDetails);
            } else {
                content.innerHTML = `<p>Item not found</p>`;
            }
        }
    });

    function displayItemDetails(item) {
        content.innerHTML = `
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <p>Price: $${item.price.toFixed(2)}</p>
            <p>Category: ${item.category}</p>
            <p>Availability: ${item.availability}</p>
        `;
    }
});
