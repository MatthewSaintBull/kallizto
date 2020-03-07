document.querySelectorAll('.btn-mdl').forEach(modBtn => {
    modBtn.addEventListener("click", function () {
        document.querySelector('.modal').style.display = document.querySelector('.modal').style.display == 'block' ? document.querySelector('.modal').style.display = 'none' : document.querySelector('.modal').style.display = 'block'
    })
})

const clickedBar = () => {
    var nav = document.querySelector(".navbar-secondary") || document.querySelector(".navbar-primary")
    nav.querySelectorAll(".btn-primary" || ".btn-secondary").forEach(
        node => {
            node.style.display = node.style.display == "block" ? "none" : "block"
        }
    )
}

var tabs = [] // [button : pane]

document.querySelectorAll(".tab-container").forEach(
    container => {
        var tab = container.querySelector("[class^=tab-nav]")
        container.querySelectorAll("[class^=pane]").forEach(
            (pane) => {
                const id = pane.getAttribute("id")
                var element = document.createElement("BUTTON")
                element.innerHTML = id
                element.setAttribute("value", id)
                element.classList.add("btn-tab")
                element.addEventListener("click", function(){
                    tabs.forEach(tab => {
                        tab.style.display = "none"
                    })
                    pane.style.display = "block"
                })
                tabs.push(pane)
                tab.appendChild(element)
            }
        )
    }
)


document.getElementsByClassName("mobile")[0].addEventListener("click", clickedBar)

