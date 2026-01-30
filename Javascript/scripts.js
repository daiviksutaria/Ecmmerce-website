document.addEventListener("DOMContentLoaded", function() {
    // Example products data
    const products = {
        "tesla-model-s": {
            name: "Tesla Model S",
            price: "$79,990",
            images: ["file:///C:/Users/daivi/OneDrive/Desktop/Daivik/Ecmmerce%20website/Imaages/h1.png","file:///C:/Users/daivi/OneDrive/Desktop/Daivik/Ecmmerce%20website/Imaages/h1.png"],
            details: {
                "Engine Type": "Electric",
                "Power": "670 hp",
                "Torque": "750 Nm"
            },
            features: ["Autopilot", "Long Range", "Fast Charging"]
        },
        "harley-davidson": {
            name: "Harley Davidson Iron 883",
            price: "$9,499",
            images: ["file:///C:/Users/daivi/OneDrive/Desktop/Daivik/Ecmmerce%20website/Imaages/t1.png", "file:///C:/Users/daivi/OneDrive/Desktop/Daivik/Ecmmerce%20website/Imaages/t1.png"],
            details: {
                "Engine Type": "V-Twin",
                "Power": "50 hp",
                "Torque": "73 Nm"
            },
            features: ["Classic Design", "Comfortable Ride", "Customizable"]
        }
        // Add more products here
    };

    // Get the query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productKey = urlParams.get('product');

    if (productKey && products[productKey]) {
        const product = products[productKey];

        // Update product title
        document.getElementById("product-title").textContent = product.name;
        document.getElementById("model-name").textContent = "Model: " + product.name;
        document.getElementById("price").textContent = "Price: " + product.price;

        // Update images
        const gallery = document.getElementById("gallery");
        product.images.forEach(image => {
            const imgElement = document.createElement("img");
            imgElement.src = image;
            gallery.appendChild(imgElement);
        });

        // Update details
        const detailsList = document.getElementById("details-list");
        for (const [key, value] of Object.entries(product.details)) {
            const liElement = document.createElement("li");
            liElement.innerHTML = `<strong>${key}:</strong> ${value}`;
            detailsList.appendChild(liElement);
        }

        // Update features
        const featuresList = document.getElementById("features-list");
        product.features.forEach(feature => {
            const liElement = document.createElement("li");
            liElement.textContent = feature;
            featuresList.appendChild(liElement);
        });
    }
});
