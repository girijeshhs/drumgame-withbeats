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
