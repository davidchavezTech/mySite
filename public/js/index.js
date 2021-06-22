const scrollableElement = document.querySelector(".pages-wrapper");
(function (y){
    scrollableElement.scrollTo(0, y);
})(9999)

const pageOne = document.querySelector('page-1');
const pageTwo = document.querySelector('page-2');
const pageThree = document.querySelector('page-3');

//--------------------- Icons animation ---------------------------

const iconWrapper = document.querySelectorAll('.icon-wrapper');


iconWrapper.forEach(wrapper =>{
    inAndOutHoverAnimation(wrapper, 'grow-and-twist', 'shrink-and-reset', 200)
})
function inAndOutHoverAnimation(element, onHoverClass, onLeaveClass, animationDuration){
    element.addEventListener('mouseenter', (e)=>{
        e.target.children[0].classList.add(onHoverClass)
    })
    element.addEventListener('mouseleave', (e)=>{
            e.target.children[0].classList.add(onLeaveClass)
            setTimeout(() => {
                e.target.children[0].classList.remove(onHoverClass)
                e.target.children[0].classList.remove(onLeaveClass)
            }, animationDuration);
    })
}

//--------------------- navigation bar animation ---------------------------

const navbarBarsWrappers = document.querySelectorAll('.bar-wrapper');

navbarBarsWrappers.forEach(navbarBarWrapper =>{
    navBarOnHoverAnimation(navbarBarWrapper, 'grow-bounce--animation', 'leave-shrink-bounce--animation', 300, 'active-grow-bounce--animation')

    navbarBarWrapper.addEventListener('click', (e)=>{
        changeSelectedBar(e.currentTarget)
    })
})

function changeSelectedBar(clickedElement){
    //remove the "active" class from the active bar
    for(let i=0;navbarBarsWrappers.length>i;i++){
        if(navbarBarsWrappers[i].children[0].classList.contains('active')){
            navbarBarsWrappers[i].children[0].classList.remove('active');
            i=navbarBarsWrappers.length;
        }
    }//add the "active" class to the clicked bar
    clickedElement.children[0].classList.add('active')
    clickedElement.children[0].classList.add('shrink--animation')
    clickedElement.children[0].classList.remove('grow-bounce--animation')
    setTimeout(() => {
        clickedElement.children[0].classList.remove('shrink--animation')
    }, 300);
}
function navBarOnHoverAnimation(element, onHoverClass, onLeaveClass, animationDuration, ifActiveClass){
    element.addEventListener('mouseenter', (e)=>{
        if(e.target.children[0].classList.contains('active')){
            e.target.children[0].classList.add(ifActiveClass)
        }else{
            e.target.children[0].classList.add(onHoverClass)
        }
    })
    element.addEventListener('mouseleave', (e)=>{
        if(e.target.children[0].classList.contains('active')){
            setTimeout(() => {
                e.target.children[0].classList.remove(ifActiveClass)
            }, animationDuration);
        }else{
            e.target.children[0].classList.add(onLeaveClass)
            setTimeout(() => {
                e.target.children[0].classList.remove(onHoverClass)
                e.target.children[0].classList.remove(onLeaveClass)
            }, animationDuration);
        }
    })
}

//--------------------- navBar buttons animation ---------------------------

const navbarButtons = document.querySelectorAll('.nav-item')

navbarButtons.forEach(button =>{
    button.addEventListener('click', (e)=>{
        if(!(e.currentTarget.classList.contains('current-page'))) selectNavbarButton(e.currentTarget)
    })
})

    //select button on scroll

scrollableElement.addEventListener('scroll', (e)=>{
    // let windowHeight = window.innerHeight
    if(0==pageOne.getBoundingClientRect().y){
        selectNavbarButton(navbarButtons[0])
        changeSelectedBar(navbarBarsWrappers[0])
    } 
    else if(0==pageTwo.getBoundingClientRect().y){
        selectNavbarButton(navbarButtons[1])
        changeSelectedBar(navbarBarsWrappers[1])
    }
    else if(0==pageThree.getBoundingClientRect().y) {
        selectNavbarButton(navbarButtons[2])
        changeSelectedBar(navbarBarsWrappers[2])
    }
})

function selectNavbarButton(currentPage){
    for(let i=0;navbarButtons.length>i;i++){
        if(navbarButtons[i].classList.contains('current-page')){
            navbarButtons[i].classList.remove('current-page');
            i=navbarButtons.length
        } 
    }
    currentPage.classList.add('current-page');
}

//--------------------- portfolio images hover effect ---------------------------

const portfolioElement1 = document.querySelector('#img-1-wrapper')
const portfolioElement2 = document.querySelector('#img-2-wrapper')
const portfolioElement3 = document.querySelector('#img-3-wrapper')
const portfolioElement4 = document.querySelector('#img-4-wrapper')
const portfolioElement5 = document.querySelector('#img-5-wrapper')
const portfolioElement6 = document.querySelector('#img-6-wrapper')
const portfolioElement7 = document.querySelector('#img-7-wrapper')

portfolioImgHoverEffect(portfolioElement1)
portfolioImgHoverEffect(portfolioElement2)
portfolioImgHoverEffect(portfolioElement3)
portfolioImgHoverEffect(portfolioElement4)
portfolioImgHoverEffect(portfolioElement5)
portfolioImgHoverEffect(portfolioElement6)
portfolioImgHoverEffect(portfolioElement7)

function portfolioImgHoverEffect(wrapper){
    wrapper.addEventListener('mouseenter', (e)=>{
        e.currentTarget.children[0].classList.add('blurr-and-grow')
        e.currentTarget.children[0].style.backgroundSize = "105% 105%"
    
        e.currentTarget.children[1].style.opacity = 1;
    })
    wrapper.addEventListener('mouseleave', (e)=>{
        e.currentTarget.children[0].classList.remove('blurr-and-grow')
        e.currentTarget.children[0].style.backgroundSize = "100% 100%"
        e.currentTarget.children[1].style.opacity = 0;
    })
}

//--------------------- x animation ---------------------------

const bioWrapper = document.querySelector("#bio-wrapper");
const artWrapper = document.querySelector("#art-wrapper");
const contactWrapper = document.querySelector("#contact-wrapper");

const aboutButtonsArray = [
    bioWrapper,
    artWrapper,
    contactWrapper
]
_loadXanimation(aboutButtonsArray)
_loadDropButtons_animation(aboutButtonsArray)