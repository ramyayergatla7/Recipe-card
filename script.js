// Elements

const toggleIngredients =
document.getElementById("toggleIngredients");

const toggleSteps =
document.getElementById("toggleSteps");

const ingredientsSection =
document.getElementById("ingredientsSection");

const stepsSection =
document.getElementById("stepsSection");

const steps =
document.querySelectorAll("#stepsList li");

const progressBar =
document.getElementById("progressBar");

const clickSound =
document.getElementById("clickSound");

const darkModeBtn =
document.getElementById("darkModeBtn");

let currentStep = 0;


// Sound Function

function playSound(){

    clickSound.play();

}


// Toggle Ingredients

toggleIngredients.addEventListener("click",()=>{

    ingredientsSection.classList.toggle("hidden");

    playSound();

});


// Toggle Steps

toggleSteps.addEventListener("click",()=>{

    stepsSection.classList.toggle("hidden");

    playSound();

});


// Start Cooking

document.getElementById("startCooking")
.addEventListener("click",()=>{

    steps.forEach(step =>
        step.classList.remove("active-step")
    );

    currentStep = 0;

    steps[currentStep]
    .classList.add("active-step");

    updateProgress();

    playSound();

});


// Next Step

document.getElementById("nextStep")
.addEventListener("click",()=>{

    if(currentStep < steps.length - 1){

        steps[currentStep]
        .classList.remove("active-step");

        currentStep++;

        steps[currentStep]
        .classList.add("active-step");

        updateProgress();

        playSound();
    }

});


// Progress Bar

function updateProgress(){

    let progress =
    ((currentStep + 1) / steps.length) * 100;

    progressBar.style.width =
    progress + "%";
}


// Dark Mode

darkModeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");

    playSound();

});


// Timer

let totalTime = 30 * 60;

let timerStarted = false;

function startTimer(){

    if(timerStarted) return;

    timerStarted = true;

    const timer = setInterval(()=>{

        let minutes =
        Math.floor(totalTime / 60);

        let seconds =
        totalTime % 60;

        seconds =
        seconds < 10 ?
        "0" + seconds :
        seconds;

        document.getElementById("time")
        .innerText =
        `${minutes}:${seconds}`;

        totalTime--;

        if(totalTime < 0){

            clearInterval(timer);

            document.getElementById("time")
            .innerText =
            "Recipe Completed!";
        }

    },1000);

}