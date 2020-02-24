var modBtns = document.querySelectorAll('.btn-mdl')

modBtns.forEach(modBtn=>{
    modBtn.addEventListener("click", function(){
        document.querySelector('.modal').style.display= document.querySelector('.modal').style.display=='block' ? document.querySelector('.modal').style.display='none' : document.querySelector('.modal').style.display='block'
    })
})

