
const menubtn= document.getElementById("menu-btn");
const back_blur= document.querySelector(".back-blur");
const close_aside= document.querySelector(".close");


menubtn.addEventListener('click', (e)=>{
    e.preventDefault();
    document.getElementById('aside').className = "active";
    back_blur.style.display = 'initial';
    
})

close_aside.onclick= ()=>{
    document.getElementById('aside').className = "";
    back_blur.style.display = 'none';
}