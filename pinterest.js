 // Function to create the grid with images
 function createGrid(images) {
    const gridContainer = document.getElementById('grid-container');
    
    images.forEach(image => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        
        // Create image element
        const img = document.createElement('img');
        img.src = image.url;
        
        // Use naturalHeight/naturalWidth to determine aspect ratio after loading
        img.onload = function() {
            // Optional: Add image dimensions for debugging
            const imgInfo = document.createElement('div');
            imgInfo.className = 'image-info';
            imgInfo.textContent = `${this.naturalWidth} × ${this.naturalHeight}`;
            gridItem.appendChild(imgInfo);
        };
        
        gridItem.appendChild(img);
        gridContainer.appendChild(gridItem);
    });
}

// Function to add images from an array of URLs
function addImagesFromUrls(urls) {
    const images = urls.map(url => ({ url }));
    createGrid(images);
}

// Example usage with placeholder images
document.addEventListener('DOMContentLoaded', () => {
    // Sample image URLs - replace with your actual image paths
    const imageUrls = [
        './src/png/card.png',
        './src/png/thumbnail.png',
        './src/png/invitation.png',
        './src/png/post.png',
        '/api/placeholder/400/400',
        '/api/placeholder/400/550',
        '/api/placeholder/400/450',
    ];
    
    addImagesFromUrls(imageUrls);
});

// Function to add new images (can be called with new image URLs)
function addMoreImages(newUrls) {
    addImagesFromUrls(newUrls);
}

// Example of how to add more images when scrolling to bottom
window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
        // Add more images when approaching bottom of page
        const moreUrls = [
     
        ];
        addMoreImages(moreUrls);
    }
});