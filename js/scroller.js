x=document.querySelector('.container')
x.style.display='none'
preloader=document.querySelector('#preloader')
onload=()=>{
    x.style.display='block';
    preloader.style.display='none';
}
const btn=document.getElementById('scroller')
console.log(btn)
btn.style.display='none'
window.addEventListener('scroll',()=>{
    if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
        btn.style.display='block'
    }
    else{
        // document.documentElement.scrollTop=0;
        btn.style.display='none'
    }
})
btn.addEventListener('click',()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
    btn.style.display='none'
})
