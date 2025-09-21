// const button=document.querySelector(".Btn");
// button.addEventListener("click",function(){
//     button.style.backgroundColor="red";
// })

const body=document.body;
const resetBtn=document.getElementById('reset');
const undoBtn=document.getElementById('undo');
const redoBtn=document.getElementById('redo');
const counter=document.getElementById('count');


let circles=[];
let undoStack=[];

function updatecounter(){
    counter.textContent=circles.length;
}

function getRandomColor(){
    const letters =  '0123456789ABCDEF';
    let color='#'
    for(let i=0;i<6;i++){
        color +=letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

body.addEventListener('click',(e)=>{
    if(e.target.tagName==='BUTTON') return;
    const circle =document.createElement('div');
    circle.classList.add('circle');
    circle.style.left=`${e.clientX-25}px`;
    circle.style.top=`${e.clientX-25}px`;
    circle.style.backgroundColor=getRandomColor();
    body.appendChild(circle);
    circles.push(circle);
    undoStack =[];
    updatecounter();
    
});
undoBtn.addEventListener('click',()=>{
    const last = circles.pop();
    if(last){
        undoStack.push(last);
        last.remove();
        updatecounter();
    }
});

redoBtn.addEventListener('click',()=>{
    const redoCircle = undoStack.pop();
    if(redoCircle){
        body.appendChild(redoCircle);
        circles.push(redoCircle);
        updatecounter();
    }
});

resetBtn.addEventListener('click',()=>{
    circles.forEach(c=>c.remove());
    circles=[]; 
    undoStack=[];
    updatecounter();
});