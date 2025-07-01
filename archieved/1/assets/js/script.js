// JavaScript to animate floating images
const images = [
    'assets/images/fish/blueTang.png', // Correct path to blueTang.png
    'assets/images/fish/butterfly.png', // Correct path to butterfly.png
    'assets/images/fish/goldfish.png', // Correct path to goldfish.png
    'assets/images/fish/powderBlueTang.png' // Correct path to powderBlueTang.png
];

const numImages = images.length;
const containers = [];

// Initialize images
for (let i = 0; i < numImages; i++) {
    const container = document.createElement('div');
    container.classList.add('image-container');
    
    const img = document.createElement('img');
    img.src = images[i];
    
    container.appendChild(img);
    document.body.appendChild(container);
    
    // Randomize initial positions and velocities
    container.style.left = `${Math.random() * window.innerWidth}px`;
    container.style.top = `${Math.random() * window.innerHeight}px`;
    
    containers.push({
        element: container,
        velocityX: Math.random() * 2 - 1,
        velocityY: Math.random() * 2 - 1,
        flipped: false
    });
}

// Animate the images
function animate() {
    containers.forEach((item) => {
        const rect = item.element.getBoundingClientRect();
        
        // Update position
        let newX = rect.x + item.velocityX;
        let newY = rect.y + item.velocityY;

        // Check boundaries and bounce
        if (newX <= 0 || newX + rect.width >= window.innerWidth) {
            item.velocityX *= -1;
            flipImage(item);
        }
        
        if (newY <= 0 || newY + rect.height >= window.innerHeight) {
            item.velocityY *= -1;
        }

        item.element.style.left = `${newX}px`;
        item.element.style.top = `${newY}px`;
    });

    requestAnimationFrame(animate);
}

// Flip the image horizontally
function flipImage(item) {
    const img = item.element.querySelector('img');
    if (!item.flipped) {
        img.style.transform = 'scaleX(-1)';
        item.flipped = true;
    } else {
        img.style.transform = 'scaleX(1)';
        item.flipped = false;
    }
}

// Start animation
animate();
