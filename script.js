// var box = document.querySelector("#box")
// var cursor= document.querySelector("#cursor")
// var imageDiv =document.querySelector("#img")
// box.addEventListener("mousemove",function(dets){
//     gsap.to(cursor,{
//         x:dets.x,
//         y:dets.y
//     })
// })
// imageDiv.addEventListener("mouseenter",function(){
// gsap.to(cursor,{
//     scale:2
// })
// })
// imageDiv.addEventListener("mouseleave",function(){
// gsap.to(cursor,{
//     scale:1
// })
// var menu = document.querySelector("#nav h3")
// var close = document.querySelector("#full h3")
// var tl = gsap.timeline()
// tl.to("#full",{
//     right:0,
//     duration:1,
// })
// tl.from("#full h2",{
//     x:200,
//     duration:1,
//     stagger:0.4,
//     opacity:0,
// })
// tl.from("#full h3",{
//     opacity:0,
// })
// tl.pause()
// menu.addEventListener("click",function(){
//     tl.play()
// })
// close.addEventListener("click",function(){
//     tl.reverse()
// })
function breakText(){
var h1 = document.querySelector("h1")
var h1Text = h1.textContent
var splittedText = h1Text.split("")
var clutter = ''
splittedText.forEach(function(elem,idx){
    if(idx<splittedText.length/2){
    clutter = clutter + `<span class='a'>${elem}</span>`
    }else{
        clutter = clutter + `<span class='b'>${elem}</span>`
    }
})
console.log(clutter)
h1.innerHTML = clutter
}
breakText()
gsap.from("h1 .a",{
    y:60,
    opacity:0,
duration:0.7,
stagger:0.2,
delay:1
})
gsap.from("h1 .b",{
    y:60,
    opacity:0,
duration:0.7,
stagger:-0.2,
delay:1
})