const colors=["red","green","blue","yellow"];
const gamePattern=[];

const box1=document.querySelector('.green');
const box2=document.querySelector('.red');
const box3=document.querySelector('.yellow');
const box4=document.querySelector('.blue');
box4.addEventListener('click',()=>{
    console.log('clicked');
})
box1.addEventListener('click',()=>{
    console.log('clicked');
})
box2.addEventListener('click',()=>{
    console.log('clicked');
})
box3.addEventListener('click',()=>{
    console.log('clicked');
    
})
var randomNumber;
var randomChoosenColor=colors[randomNumber];
function sequenceGenerator(){
    randomNumber=Math.floor(Math.random()*4);
    
}
gamePattern.push(randomChoosenColor);

