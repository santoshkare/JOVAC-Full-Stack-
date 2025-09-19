const circles=document.querySelectorAll('.circle');

circles.forEach(circle=>{
    circle.addEventListener('click',()=>{
        if(circle.style.backgroundColor ==='green'){
            circle.style.backgroundColor='purple';
        }else{
            circle.style.backgroundColor='green';
        }
    });
});