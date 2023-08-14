const pianoKeys = document.querySelectorAll(".Piano-Keys .Key");
const volumeSilder = document.querySelector(".Volume-Slider input");
const keyCheckbox = document.querySelector(".Key-checkbox input");

audio = new Audio("tune/a.wav")

const playTune = (key) => {
    audio.src = (`tune/${key}.wav`); // Create a new Audio object
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");

    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 300); // Remove "active" class after 300ms (adjust as needed)
};

pianoKeys.forEach(key => {
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handelVloume = (e) => {
    audio.volume = e.target.value;
}

const toggleKeysVisibility = () => {
 pianoKeys.forEach(key=>  key.classList.toggle("hide"));
};

const pressedKey = (e) => {
    const key = e.key.toLowerCase(); // Convert to lowercase to match your dataset keys
    playTune(key);
};
document.addEventListener("input", handelVloume);

keyCheckbox.addEventListener("click", toggleKeysVisibility);

document.addEventListener("keydown", pressedKey);
