let resources = 0;
let autoClickers = 0;
let multiplier = 1;

// Initial costs for the upgrades
let autoClickerCost = 5;
let multiplierCost = 10;
let clickerCostMultiplier = 1.25;
let multiplierCostMultiplier = 1.25;

// DOM Elements
const resourceCountEl = document.getElementById('resource-count');
const clickButton = document.getElementById('click-button');
const autoClickerBtn = document.getElementById('auto-clicker-btn');
const multiplierBtn = document.getElementById('multiplier-btn');
const autoClickerCountEl = document.getElementById('auto-clicker-count');
const multiplierCountEl = document.getElementById('multiplier-count');

// Click Button Functionality
clickButton.addEventListener('click', () => {
    resources += 1 * multiplier;
    updateResourceDisplay();
});

// Auto Clicker Purchase
autoClickerBtn.addEventListener('click', () => {
    if (resources >= autoClickerCost) {
        resources -= autoClickerCost;
        autoClickers += 1;
        autoClickerCost = Math.floor(autoClickerCost * clickerCostMultiplier); // Increase cost by 1.25 times
        clickerCostMultiplier = 1.25 * ((clickerCostMultiplier/10)+1); 
        updateResourceDisplay();
        updateAutoClickerCount();
        updateAutoClickerBtn(); // Update button text with new cost
    }
});

// Multiplier Purchase
multiplierBtn.addEventListener('click', () => {
    if (resources >= multiplierCost) {
        resources -= multiplierCost;
        multiplier += 1;
        multiplierCost = Math.floor(multiplierCost * 1.25); // Increase cost by 1.25 times
        multiplierCostMultiplier = 1.25 * ((multiplierCostMultiplier/10)+1); 
        updateResourceDisplay();
        updateMultiplierCount();
        updateMultiplierBtn(); // Update button text with new cost
    }
});

// Automatic Resource Generation (Auto Clickers)
setInterval(() => {
    resources += autoClickers * multiplier;
    updateResourceDisplay();
}, 1000);

// Update Functions
function updateResourceDisplay() {
    resourceCountEl.textContent = resources;
}

function updateAutoClickerCount() {
    autoClickerCountEl.textContent = autoClickers;
}

function updateMultiplierCount() {
    multiplierCountEl.textContent = `${multiplier}x`;
}

function updateAutoClickerBtn() {
    autoClickerBtn.innerHTML = `Buy Auto Clicker (Cost: ${autoClickerCost}) - <span id="auto-clicker-count">${autoClickers}</span>`;
}

function updateMultiplierBtn() {
    multiplierBtn.innerHTML = `Buy Multiplier (Cost: ${multiplierCost}) - <span id="multiplier-count">${multiplier}x</span>`;
}

// Initialize the button text
updateAutoClickerBtn();
updateMultiplierBtn();
