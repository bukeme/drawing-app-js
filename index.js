const canvas = document.querySelector('canvas')
const btn = document.querySelectorAll('button')
const decreaseBtn = btn[0]
const increaseBtn = btn[1]
const span = document.querySelectorAll('span')
let sizeEle = span[0]
const clear = span[1]
const colorBtn = document.querySelector('input')






const ctx = canvas.getContext('2d')


let isPressed = false,
    x = undefined,
    y = undefined,
    color = 'black',
    size = 10

canvas.addEventListener('mousedown', function(e) {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', function() {
    isPressed = false
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', function(e) {
    if (isPressed) {
        let x1 = e.offsetX,
            y1 = e.offsetY

        drawcircle(x1, y1)
        drawline(x, y, x1, y1)
        x = x1
        y = y1
    }

})

function drawline(x, y, x1, y1) {
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.moveTo(x, y)
    ctx.lineTo(x1, y1)
    ctx.stroke()
}

function drawcircle(x1, y1) {
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.arc(x1, y1, size, 0, Math.PI * 2)
    ctx.fill()
}

colorBtn.addEventListener('change', function() {
    color = this.value
})


increaseBtn.addEventListener('click', function() {
    (size < 50) ? size++ : size
    sizeEle.textContent = size
})

decreaseBtn.addEventListener('click', function() {
    (size > 1) ? size-- : size
    sizeEle.textContent = size
})

clear.addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})