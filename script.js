const darkMode = document.getElementById("darkMode");
const lightMode = document.getElementById("lightMode");
const pinkMode = document.getElementById("pinkMode");

darkMode.addEventListener("click", function(){
    
    document.body.classList.add("bg-dark")
    document.body.classList.remove("bg-pink")
    darkMode.classList.add("text-light")
    lightMode.classList.add("text-light")
    pinkMode.classList.add("text-light")
})

lightMode.addEventListener("click", function(){
    
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-pink")
    darkMode.classList.remove("text-light")
    lightMode.classList.remove("text-light")
    pinkMode.classList.remove("text-light")
})

pinkMode.addEventListener("click", function(){
    
    document.body.classList.remove("bg-dark")
    document.body.classList.add("bg-pink")
    darkMode.classList.remove("text-light")
    lightMode.classList.remove("text-light")
    pinkMode.classList.remove("text-light")
})