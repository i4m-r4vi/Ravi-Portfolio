const nav_icon=document.getElementById("nav_icon");
const list_items=document.getElementById("nav_1");
const text=document.getElementById("text1")

nav_icon.addEventListener('click',()=>{
    list_items.classList.toggle("navon");

    if(list_items.classList.contains('navon')){
        text.style.zIndex="0";
    }else{
        text.style.zIndex="1";
    }
});

document.addEventListener('click',(e)=>{
    if(!nav_icon.contains(e.target)){
        list_items.classList.remove('navon');
    }
})





