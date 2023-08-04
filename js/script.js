let ulNav = document.querySelector(".nav-bar")

document.querySelector(".bars").onclick = () => {
    ulNav.classList.add("show")

    let div = document.createElement("div")
    div.className = "nav-head"

    let logo = document.createElement("img")
    logo.src = "../images/logo.svg"
    logo.style.width = "150px"

    let xMark = document.createElement("i")
    xMark.className = "fa-solid fa-xmark xmark" 

    xMark.onclick = () => {
        ulNav.classList.remove("show")
        div.remove()
        xMark.remove()
        logo.remove()
    }
    
    div.appendChild(logo)
    div.appendChild(xMark)
    ulNav.prepend(div)    
}