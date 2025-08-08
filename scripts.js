// smooth scrolling for anchor tags (links)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        })
    })
})

// for submit handling

document
.getElementById("contact")
.addEventListener("submit", function (e){
    e.preventDefault()
    alert("Thanks For Your Message"):
    this.reset();
});