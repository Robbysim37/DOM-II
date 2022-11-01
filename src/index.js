import './less/index.less'

// Your code goes here!
let navLinks = document.querySelectorAll("nav a")
let funBusTitle = document.querySelector("header h1")
let headers = document.querySelectorAll("h2")
let textContent = document.querySelectorAll("p")
let buttons = document.querySelectorAll(".btn")
let images = document.querySelectorAll("img")
let body = document.querySelector("body")


navLinks.forEach( el => el.addEventListener("mouseover", (e) =>{
    e.target.style.fontSize = "4rem"
}))
navLinks.forEach( el => el.addEventListener("mouseleave", (e) =>{
    e.target.style.fontSize = "1.7rem"
}))

funBusTitle.addEventListener("click", (e) => {
    let randomColorArr = ["blue","green","red"]
    let randomIndex = Math.floor(Math.random() * randomColorArr.length)
    e.target.style.color = randomColorArr[randomIndex]
})

window.addEventListener("resize", (e) => {
    body.style.backgroundColor = "black"
})

window.addEventListener("load", (e) => {
    let randomColorArr = ["blue","green","red"]
    let randomIndex = Math.floor(Math.random() * randomColorArr.length)
    funBusTitle.style.color = randomColorArr[randomIndex]    
})

window.addEventListener("wheel", (e) => {
    if(headers[0].style.fontSize != "4rem"){
        headers.forEach(el => el.style.fontSize = "4rem") 
    }
    else if(headers[0].style.fontSize == "4rem"){
        headers.forEach(el => el.style.fontSize = "3rem")
    }
})

window.addEventListener("scroll", (e) => {
    let randomColorArr = ["blue","green","red"]
    let randomIndex = Math.floor(Math.random() * randomColorArr.length)
    textContent.forEach(el => el.style.color = randomColorArr[randomIndex])
})

window.addEventListener("keydown", (e) => {
    let randomColorArr = ["blue","green","red"]
    let randomIndex = Math.floor(Math.random() * randomColorArr.length)
    buttons.forEach(el => el.style.backgroundColor = randomColorArr[randomIndex])
})

window.addEventListener("keyup", (e) => {
    let randomColorArr = ["blue","green","red"]
    let randomIndex = Math.floor(Math.random() * randomColorArr.length)
    buttons.forEach(el => el.style.backgroundColor = randomColorArr[randomIndex])
})

images.forEach(el => el.addEventListener("dblclick", (e) => {
e.target.style.borderRadius = "50%"
}))