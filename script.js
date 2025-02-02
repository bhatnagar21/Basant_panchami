const kitesContainer = document.querySelector('.kites');
const sparklesContainer = document.querySelector('.sparkles');

function createKite() {
    const kite = document.createElement('div');
    kite.classList.add('kite');
    kite.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    kite.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random duration between 5s and 10s
    kitesContainer.appendChild(kite);

    // Remove kite after animation ends
    kite.addEventListener('animationend', () => {
        kite.remove();
    });
}

// Create kites at intervals
setInterval(createKite, 1000);

// Function to create sparkles
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    sparkle.style.top = Math.random() * 100 + 'vh'; // Random vertical position
    sparkle.style.animationDuration = Math.random() * 1 + 0.5 + 's'; // Random duration between 0.5s and 1.5s
    sparklesContainer.appendChild(sparkle);

    // Remove sparkle after animation ends
    sparkle.addEventListener('animationend', () => {
        sparkle.remove();
    });
}

// Create sparkles at intervals
setInterval(createSparkle, 300);