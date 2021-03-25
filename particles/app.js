const canvas = document.getElementById("canvas1")

const ctx = canvas.getContext("2d")
console.log(ctx)

window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // ctx.fillStyle = "white"
    // ctx.fillRect(10,10,500,400)
})
// ctx.fillStyle = "white"
// ctx.fillRect(10,10,500,400)

const mouse = {
    x:null,
    y:null
}

canvas.addEventListener("mousemove", function(e){
    mouse.x =e.x
    mouse.y = e.y
    drawCircle()
    console.log("click")
})


function drawCircle(){
    ctx.beginPath()
ctx.arc(mouse.x, mouse.y    ,20,0 ,Math.PI * 2)
ctx.fillStyle= "blue"
ctx.strokeStyle ="red"
ctx.stroke()
ctx.fill()

}