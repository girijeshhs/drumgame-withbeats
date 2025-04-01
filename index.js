const soundMap = {
    "w": "sounds/tom-1.mp3",
    "a": "sounds/tom-2.mp3",
    "s": "sounds/tom-3.mp3",
    "d": "sounds/tom-4.mp3",
    "j": "sounds/snare.mp3",
    "k": "sounds/crash.mp3",
    "l": "sounds/kick-bass.mp3"
};

// Function to play sound
function playSound(key) {
    let soundFile = soundMap[key];
    if (soundFile) {
        let audio = new Audio(soundFile);
        audio.play();
    }
}

// Click event for buttons
document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", () => {
        playSound(button.classList[0]);
    });
});

// Keypress event for keyboard input
document.addEventListener("keydown", (event) => {
    playSound(event.key); // Checks if the pressed key is in soundMap
});
// Function to play sound based on key
function playSound(key) {
    let audio;
    
    switch (key) {
        case "w":
            audio = new Audio("sounds/crash.mp3");
            break;
        case "a":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "s":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "j":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "k":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "l":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        default:
            return;
    }

    audio.play();
}

// Function to add animation effect
function addAnimation(key) {
    let activeButton = document.querySelector(`.${key}`);
    if (activeButton) {
        activeButton.classList.add("pressed");

        setTimeout(() => {
            activeButton.classList.remove("pressed");
        }, 100); // Effect lasts for 100ms
    }
}

// Event listener for button clicks
document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function () {
        let key = this.classList[0]; // Get the key from class name
        playSound(key);
        addAnimation(key);
    });
});

// Event listener for keyboard presses
document.addEventListener("keydown", function (event) {
    let key = event.key.toLowerCase();
    playSound(key);
    addAnimation(key);
});
