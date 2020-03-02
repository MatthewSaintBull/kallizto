document.querySelectorAll('.btn-mdl').forEach(modBtn=>{
    modBtn.addEventListener("click", function(){
        document.querySelector('.modal').style.display= document.querySelector('.modal').style.display=='block' ? document.querySelector('.modal').style.display='none' : document.querySelector('.modal').style.display='block'
    })
})

const clickedBar = ()=>{
    var nav = document.querySelector(".navbar-secondary") || document.querySelector(".navbar-primary")
    nav.querySelectorAll(".btn-primary" || ".btn-secondary").forEach(
        node=>{
            node.style.display =  node.style.display == "block" ? "none":"block"
        }
    )
}

document.getElementsByClassName("mobile")[0].addEventListener("click", clickedBar)

