const samplePins = [
    { imageUrl: "..\\src\\pinterest\\1.png", description: "Youtube Channel Logo" },
    { imageUrl: "..\\src\\pinterest\\2.png", description: "Youtube Channel Banner" },
    { imageUrl: "..\\src\\pinterest\\3.png", description: "Book Cover Design" },
    { imageUrl: "..\\src\\pinterest\\5.png", description: "Youtube Channel Logo" },
    { imageUrl: "..\\src\\pinterest\\6.png", description: "Youtube Thumbnail Design" },
    { imageUrl: "..\\src\\pinterest\\7.png", description: "Linkedin banner" },
    { imageUrl: "..\\src\\pinterest\\8.png", description: "Wedding Entry Board" },
    { imageUrl: "..\\src\\pinterest\\9.png", description: "Youtube Channel Banner" },
    { imageUrl: "..\\src\\pinterest\\19.jpg", description: "Birthday Party Invitation" },
    { imageUrl: "..\\src\\pinterest\\11.png", description: "Business Agency Post" },
    { imageUrl: "..\\src\\pinterest\\12.png", description: "Estateclues prestation " },
    { imageUrl: "..\\src\\pinterest\\17.jpg", description: "Birthday Party Invitation" },
    { imageUrl: "..\\src\\pinterest\\14.png", description: "Estateclues -Realestate Instagram Post" },
    { imageUrl: "..\\src\\pinterest\\34.png", description: "Wedding Entry Board Deisgn" },
    { imageUrl: "..\\src\\pinterest\\4.png", description: "Book Cover Design" },
    { imageUrl: "..\\src\\pinterest\\16.png", description: "Youtube Channel Logo" },
    { imageUrl: "..\\src\\pinterest\\30.png", description: "Gudi padwa banner for techspre Club" },
    { imageUrl: "..\\src\\pinterest\\24.png", description: "Poster Design" },
    { imageUrl: "..\\src\\pinterest\\27.png", description: "Presentation" },
    { imageUrl: "..\\src\\pinterest\\28.png", description: "Eid Mubarak banner for Techspire Club" },
    { imageUrl: "..\\src\\pinterest\\31.png", description: "Youtube community post & instagram post" },
    { imageUrl: "..\\src\\pinterest\\32.png", description: "Youtube 1M subscriber design for Post" },
    { imageUrl: "..\\src\\pinterest\\33.png", description: "Wedding Card Design" },
    { imageUrl: "..\\src\\pinterest\\35.png", description: "Ganpati Invition Design" },
    { imageUrl: "..\\src\\pinterest\\13.png", description: "Estateclues -Realestate Post" },
    { imageUrl: "..\\src\\pinterest\\36.png", description: "Wedding Card Deisgn" },
    { imageUrl: "..\\src\\pinterest\\37.png", description: "Resume " },
    { imageUrl: "..\\src\\pinterest\\38.png", description: "Modern Wedding Card Design" },
    { imageUrl: "..\\src\\pinterest\\39.png", description: "Modern Wedding Card Design" },
    { imageUrl: "..\\src\\pinterest\\25.png", description: "Poster Design" },
    { imageUrl: "..\\src\\pinterest\\40.png", description: "Ganpati Invitation Design" },
    { imageUrl: "..\\src\\pinterest\\41.png", description: "Music channel logo" },
    { imageUrl: "..\\src\\pinterest\\42.png", description: "Music Channel Banner" },
    { imageUrl: "..\\src\\pinterest\\43.png", description: "Youtube Video Thumbnail" },
];

// Function to create a pin element
function createPin(pinData) {
    const pin = document.createElement('div');
    pin.className = 'pin';
    
    pin.innerHTML = `
        <img src="${pinData.imageUrl}" alt="${pinData.description}" class="pin-image">
        <div class="pin-content">
            <p class="pin-description">${pinData.description}</p>
        </div>
    `;
    
    return pin;
}

// Function to load pins
function loadPins(pins) {
    const pinGrid = document.getElementById('pinGrid');
    
    pins.forEach(pinData => {
        const pin = createPin(pinData);
        pinGrid.appendChild(pin);
    });
}

// Load pins on page load
document.addEventListener('DOMContentLoaded', () => {
    loadPins(samplePins);
});
