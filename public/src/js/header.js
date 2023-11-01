document.addEventListener("DOMContentLoaded", () =>{
    const schoolLink = document.querySelector(".school a")
    const schoolItem = document.querySelector(".school")
    const specialtiesLink = document.querySelector(".specialties a")
    const specialtiesItem = document.querySelector(".specialties")
    const toggleIcon = document.querySelectorAll(".toggle-icon")

    schoolLink.addEventListener("click", event =>{
        event.preventDefault()
        schoolItem.classList.toggle("active")
    })
    specialtiesLink.addEventListener("click", event =>{
        event.preventDefault()
        specialtiesItem.classList.toggle("active")
    })
    toggleIcon.forEach( toggleIcon =>{
        const icon = toggleIcon.querySelector("i");
        toggleIcon.addEventListener("click", event =>{
            event.preventDefault();
            icon.classList.toggle("bi-caret-down")
            icon.classList.toggle("bi-caret-up")
        });
    });
})
window.addEventListener("scroll", () =>{
    const header = document.querySelector("header")
    header.classList.toggle("scrollY", window.scrollY > 50)
})