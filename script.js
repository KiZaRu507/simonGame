const colors=["red","green","blue","yellow"];
var gamePattern=[];
var userInput=[];
var level=0;
window.addEventListener('keydown',(e)=>{
    if(e.code=='KeyA'){
        console.log("success");
        sequenceGenerator();
        title.innerHTML=`${"You are at level "+level}`
    }
});
var count=0;
const clickbar=document.querySelector('.clicks');
const title=document.querySelector('.title');
const box1=document.querySelector('.green');
const box2=document.querySelector('.red');
const box3=document.querySelector('.yellow');
const box4=document.querySelector('.blue');
box4.addEventListener('click',()=>{
    userInput.push("blue");
    count++;
    clickbar.innerHTML=`${'Clicks:'+count}`;
    if(count==3){
        if(JSON.stringify(userInput)==JSON.stringify(gamePattern)){
            level++;
            userInput=[];
            gamePattern=[];
            sequenceGenerator();

        }
        else{
            alert('failed');
        }
    }
})
box1.addEventListener('click',()=>{
    userInput.push("green");
    count++;
    clickbar.innerHTML=`${'Clicks:'+count}`;
    if(count==3){
        if(JSON.stringify(userInput)==JSON.stringify(gamePattern)){
            level++;
            userInput=[];
            gamePattern=[];
            sequenceGenerator();

        }
        else{
            alert('failed');
        }
    }
})
box2.addEventListener('click',()=>{
    userInput.push("red");
    count++;
    clickbar.innerHTML=`${'Clicks:'+count}`;
    if(count==3){
        if((JSON.stringify(userInput)==JSON.stringify(gamePattern))){
            level++;
            userInput=[];
            gamePattern=[];
            sequenceGenerator();

        }
        else{
            alert('failed');
        }
    }
    
})
box3.addEventListener('click',()=>{
    userInput.push("yellow");
    count++;
    clickbar.innerHTML=`${'Clicks:'+count}`;
    if(count==3){
        if(JSON.stringify(userInput)==JSON.stringify(gamePattern)){
            level++;
            userInput=[];
            gamePattern=[];
            sequenceGenerator();
        }
        else{
            alert('failed');
        }
    }
    
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
    console.log(gamePattern==userInput);
    count=0;
    title.innerHTML=`${"You are at level "+level}`
    
}
