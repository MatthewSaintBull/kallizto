document.querySelectorAll('.btn-mdl').forEach(modBtn=>{
    modBtn.addEventListener("click", function(){
        document.querySelector('.modal').style.display= document.querySelector('.modal').style.display=='block' ? document.querySelector('.modal').style.display='none' : document.querySelector('.modal').style.display='block'
    })
})