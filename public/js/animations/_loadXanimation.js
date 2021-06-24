const arrowContainers = document.querySelectorAll(".arrow-container");

function _loadXanimation(array){
    array.forEach(element =>{
        element.addEventListener('click',(e)=> arrowToX(e.currentTarget))
    })
}

function arrowToX(clickedElement){
    let arrow = clickedElement.querySelector('.arrow-svg');
    let x = clickedElement.querySelector('.x-svg');
    let isItExpanded;
    if(arrow.classList.contains('expanded')) isItExpanded = true
    arrowContainers.forEach(arrowContainer =>{
        if(arrowContainer.children[0].classList.contains('expanded')){
            arrowContainer.children[0].classList.remove('expanded');
            arrowContainer.children[0].style.transform = "translate(-9px, 12px)";
            arrowContainer.children[0].style.transform += "rotate(0deg)";
            arrowContainer.children[0].style.opacity = "1";
            arrowContainer.children[1].style.opacity = "0";
            arrowContainer.children[1].style.transform = "translate(-9px, 12px)";
            arrowContainer.children[1].style.transform += "rotate(0deg)";
        }
    })
    
    if(!isItExpanded){
        arrow.classList.add('expanded');
        arrow.style.transform = "translate(-9px, 9px)";
        arrow.style.transform += "rotate(-90deg)";
        arrow.style.opacity = "0";
        x.style.opacity = "1";
        x.style.transform = "translate(-9px, 9px)";
        x.style.transform += "rotate(-90deg)";
    }else{
        arrow.classList.remove('expanded');
        arrow.style.transform = "translate(-9px, 12px)";
        arrow.style.transform += "rotate(0deg)";
        arrow.style.opacity = "1";
        x.style.opacity = "0";
        x.style.transform = "translate(-9px, 12px)";
        x.style.transform += "rotate(0deg)";
    }
}