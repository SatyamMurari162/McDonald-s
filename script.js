const foodImages = {
    Burger: 'https://th.bing.com/th/id/OIP.6v1Pgs-hQhixg6juuEC6HgHaFj?w=204&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    Pizza: 'https://images7.alphacoders.com/596/596343.jpg',
    Fries: 'https://th.bing.com/th/id/OIP.DnwMWCd0jU_vgFWePKcTngHaE9?rs=1&pid=ImgDetMain',
    Salad: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Simple-Italian-Salad_EXPS_FT20_25957_F_0624_1.jpg',
    IceCream: 'https://th.bing.com/th/id/OIP.PRTmQ28xDsXhTjEDl-2WwwHaE8?rs=1&pid=ImgDetMain',
};

function updateImage() {
    const foodForm = document.getElementById('foodForm');
    const selectedFood = Array.from(foodForm.elements.foodItem)
        .filter(item => item.checked)
        .map(item => item.value)[0];

    const foodImage = document.getElementById('foodImage');

    // Hide the previous image
    foodImage.style.display = 'none';

    // Show the image of the selected item
    foodImage.src = foodImages[none];
    // foodImage.alt = `${selectedFood} Image`;
    foodImage.style.display = 'block';
}

function getRandomFood() {
    const foodItems = ['Burger', 'Pizza', 'Fries', 'Salad', 'IceCream'];
    const randomIndex = Math.floor(Math.random() * foodItems.length);
    return foodItems[randomIndex];
}

function simulateOrderProcessing() {
    return new Promise(resolve => {
        const processingTime = Math.floor(Math.random() * 5000) + 2000; // Random processing time between 2 to 7 seconds
        setTimeout(() => {
            resolve();
        }, processingTime);
    });
}

function placeOrder() {
    const orderButton = document.getElementById('orderButton');
    const orderIdElement = document.getElementById('orderId');
    const foodImage = document.getElementById('foodImage');
    const foodForm = document.getElementById('foodForm');

    const selectedFood = Array.from(foodForm.elements.foodItem)
        .filter(item => item.checked)
        .map(item => item.value)[0];

    if (!selectedFood) {
        alert('Please select at least one food item before placing an order.');
        return;
    }

    orderButton.disabled = true;
    orderIdElement.textContent = 'Order in progress...';

    simulateOrderProcessing().then(() => {
        const orderId = Math.floor(Math.random() * 1000) + 1;
        const imageUrl = foodImages[selectedFood];

        orderIdElement.textContent = `Order ID: ${orderId}`;
        foodImage.src = imageUrl;
        foodImage.style.display = 'block';

        orderButton.disabled = false;
        
        // Reset checkboxes
        foodForm.reset();
    });
}