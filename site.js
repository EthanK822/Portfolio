function checkIfNeedNavAnim(){ //Checks if the user has already seen the navbar anim, if not then it plays
    if (sessionStorage.getItem("navAnimPlayed") === null){
        document.querySelector(".navbar").classList.add("animate");
        sessionStorage.setItem("navAnimPlayed", "true");
    }
}

function applyStoredTheme(){ //Applies the user's saved theme choice on page load, if they've made one before
    const saved = localStorage.getItem("theme");
    if (saved === "dark"){
        document.body.classList.add("force-dark");
    } else if (saved === "light"){
        document.body.classList.add("force-light");
    }
}

document.querySelector(".theme-toggle").addEventListener("click", function(){ //Toggle theme button, on click animate it and flip the theme
   this.classList.add("animate");

   const isDark = document.body.classList.contains("force-dark") ||
       (!document.body.classList.contains("force-light") && window.matchMedia("(prefers-color-scheme: dark)").matches);

   if (isDark){
       document.body.classList.remove("force-dark");
       document.body.classList.add("force-light");
       localStorage.setItem("theme", "light");
   } else {
       document.body.classList.remove("force-light");
       document.body.classList.add("force-dark");
       localStorage.setItem("theme", "dark");
   }
});

addEventListener("animationend", function(e){ //When the theme toggle button animation ends, remove the class so it can be clicked again
    if (e.target.classList.contains("theme-toggle")){
        e.target.classList.remove("animate");
    }
});

function init(){
    checkIfNeedNavAnim();
    applyStoredTheme();
}

init();