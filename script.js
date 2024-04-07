const btn = document.querySelectorAll(".buttons");
btn.forEach((el, index) => {
    el.addEventListener("click", () => {
        switch (index) {
            case 0: var audio = new Audio("sound/11.04.34 AM.mpeg");
                audio.play();
                break;

            case 1: var audio = new Audio("sound/at 11.04.35 AM (1).mpeg");
                audio.play();
                break;

            case 2: var audio = new Audio("sound/11.04.36 AM (1).mpeg");
                audio.play();
                break;

            case 3: var audio = new Audio("sound/11.04.35 AM.mpeg");
                audio.play();
                break;

            case 4: var audio = new Audio("sound/11.04.36 AM (2).mpeg");
                audio.play();
                break;

            case 5: var audio = new Audio("sound/11.04.36 AM.mpeg");
                audio.play();
                break;

            default: var audio = new Audio("sound/11.04.35 AM (2).mpeg");
                audio.play();
                break;
        }
    })
})