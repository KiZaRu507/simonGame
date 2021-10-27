const colors=["red","green","blue","yellow"];
var gamePattern=[];
var level=0;
window.addEventListener('keydown',(e)=>{
    if(e.code=='KeyA'){
        console.log("success");
        sequenceGenerator();
        title.innerHTML=`${"You are at level "+level}`
    }
});

const title=document.querySelector('.title');
const box1=document.querySelector('.green');
const box2=document.querySelector('.red');
const box3=document.querySelector('.yellow');
const box4=document.querySelector('.blue');
box4.addEventListener('click',()=>{
    $(".blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
})
box1.addEventListener('click',()=>{
    $(".green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
})
box2.addEventListener('click',()=>{
    $(".red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
})
box3.addEventListener('click',()=>{
    $(".yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
})


function sequenceGenerator(){
    var randomNumber;
    var randomChoosenColor;
    for(var i=0;i<3;i++){
        randomNumber=Math.floor(Math.random()*4);
        randomChoosenColor=colors[randomNumber];
        gamePattern.push(randomChoosenColor);
    }
    for(var i=0;i<3;i++){
            $(`${'.'+gamePattern[i]}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        
        
    }
    console.log(gamePattern);
    level++;
    gamePattern=[];
    
}
