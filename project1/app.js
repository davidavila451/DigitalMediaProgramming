const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

sun.addEventListener("click", function(){
        sun.classList.remove("active");
        document.body.style.backgroundColor = "rgb(0,0,20)";
        moon.classList.add("active");
});

moon.addEventListener("click", function(){
    moon.classList.remove("active");
    document.body.style.backgroundColor = "rgb(350,350,0)";
    sun.classList.add("active");
});