var box = document.querySelector("#box")
var cursor= document.querySelector("#cursor")
var imageDiv =document.querySelector("#img")
box.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})
imageDiv.addEventListener("mouseenter",function(){
gsap.to(cursor,{
    scale:2
})
})
imageDiv.addEventListener("mouseleave",function(){
gsap.to(cursor,{
    scale:1
})
})