const left = document.getElementById("left");
const social = document.querySelector(".social");
const socialDesktop = document.querySelector(".social-desktop");
const shareBtn = document.querySelector(".share");
const user = document.querySelector(".user");

let isShared = false;

shareBtn.addEventListener("click", function () {
    if (window.innerWidth < 600) {
        left.classList.toggle("left");
        left.classList.toggle("hidden");
        social.classList.toggle("hidden");

        if (!isShared) {
            user.style.backgroundColor = "var(--grayish-blue-300)";
            isShared = true;
        } else {
            user.style.backgroundColor = "white";
            isShared = false;
        }
    } else {
        socialDesktop.classList.toggle("hidden");
    }
});
