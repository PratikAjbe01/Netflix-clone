const acordian=document.querySelectorAll('.acordian');
acordian.forEach(acordian=>{
    const icon=acordian.querySelector('.icon');
    const answer=acordian.querySelector('.answer');
    acordian.addEventListener('click',()=>{
        if(icon.classList.contains('active')){
icon.classList.remove('active');
answer.style.maxHeight=null;
        }
else{
    icon.classList.add('active');
answer.style.maxHeight=answer.scrollHeight+'px';

}
    })
})
