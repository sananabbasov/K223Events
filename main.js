let myButton = document.getElementById("button")
let container = document.querySelector("#container")
let box1 = document.getElementById("box1")


container.addEventListener("dragover", function (e) {
    e.preventDefault()
    box1.style.top = `${e.clientY-50}px`
    box1.style.left = `${e.clientX-50}px`
})

container.addEventListener("dragend", function (e) {
    e.preventDefault()

    box1.style.top = `${e.clientY-50}px`
    box1.style.left = `${e.clientX-50}px`
})
