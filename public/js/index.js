const scrollableElement = document.querySelector(".pages-wrapper");
(function (y){
    scrollableElement.scrollTo(0, y);
})(0)

const ball = document.querySelector('#initial-ball');
const blocker = document.querySelector('#blocker');

// -------------loading screen-----------------------
// -------------loading screen-----------------------

(()=>{
    function playAgain(){
            
        ball.classList.add('loading-ball--animation');
        setTimeout(()=>{
            ball.classList.remove('loading-ball--animation');
        }, 1400)
        setTimeout(()=>{
            if(document.readyState != "complete") playAgain()
            else loadedPage();
        }, 1500)
            
    }playAgain();
})()

function loadedPage(){
    ball.classList.remove('loading-ball--animation');
    setTimeout(()=>{
        ball.classList.add('load-ball--animation');
    }, 100)
    setTimeout(()=>{
        ball.classList.remove('drop-ball');
        ball.classList.add('expand-ball--animation');
        scrollableElement.classList.add('expand-mask')
        blocker.classList.add('hide-white-bg')
    }, 800)
    setTimeout(()=>{
        blocker.style.display = 'none';
    }, 2500)
}

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
    const aboutMeCards = document.querySelectorAll('.about-me-card');
const artWrapper = document.querySelector("#art-wrapper");
const column1 = document.querySelector(".art-column-1");
const column2 = document.querySelector(".art-column-2");
const column3 = document.querySelector(".art-column-3");
const previewsWrapper = document.querySelector("#art-previews-wrapper");
const contactWrapper = document.querySelector("#contact-wrapper");
const contactFormWrapper = document.querySelector("#contact-form-wrapper");
const contactButton = document.querySelector('#contact-button');
const aboutMeButton = document.querySelector('#about-me-button');


const aboutButtonsArray = [
    bioWrapper,
    artWrapper,
    contactWrapper
]
//---------------------animation functions-------------------
_loadXanimation(aboutButtonsArray)
_loadDropButtons_animation(aboutButtonsArray)
_load_show_translateAndOpacity(bioWrapper, aboutMeCards, 200, 800)
_load_show_translateAndOpacity(contactWrapper, contactFormWrapper, 200, 800)
_loadToggleClassStagger(previewsWrapper, artWrapper, [column1, column2, column3], 100, 800)

contactButton.addEventListener('click',(e)=>{
    if(!(contactWrapper.classList.contains('selected'))) {
        dropButtons(contactWrapper);
        contactWrapper.classList.add('cards-shown');
        show_translateAndOpacity(contactFormWrapper, 200, 200)
        arrowToX(contactWrapper)
    } else{
        resetButtons();
        hide_trasnlateAndOpacity(contactFormWrapper)
        arrowToX(contactWrapper)
    }
})

document.querySelector('#contact-me-bar').addEventListener('click',(e)=>{
    if(!(contactWrapper.classList.contains('selected'))) {
        dropButtons(contactWrapper);
        contactWrapper.classList.add('cards-shown');
        show_translateAndOpacity(contactFormWrapper, 200, 200)
        arrowToX(contactWrapper)
    } else{
        resetButtons();
        hide_trasnlateAndOpacity(contactFormWrapper)
        arrowToX(contactWrapper)
    }
})

document.querySelector('#about-me-bar').addEventListener('click',(e)=>{
    resetButtons();
    hide_trasnlateAndOpacity(contactFormWrapper)
    arrowToX(contactWrapper)
    if(contactWrapper.querySelector('.arrow-container').children[0].classList.contains('expanded')){
        arrowToX(contactWrapper)
    }
})
aboutMeButton.addEventListener('click',(e)=>{
    resetButtons();
    hide_trasnlateAndOpacity(contactFormWrapper)
    if(contactWrapper.querySelector('.arrow-container').children[0].classList.contains('expanded')){
        arrowToX(contactWrapper)
    }
})

//------------------calculate age----------------------------------

const ageContainers = document.querySelectorAll('#age');

ageContainers.forEach(ageContainer=>{
    ageContainer.textContent = calculate_age(12, 2, 1991);
})
function calculate_age(birth_month,birth_day,birth_year)
{
    today_date = new Date();
    today_year = today_date.getFullYear();
    today_month = today_date.getMonth();
    today_day = today_date.getDate();
    age = today_year - birth_year;

    if ( today_month < (birth_month - 1))
    {
        age--;
    }
    if (((birth_month - 1) == today_month) && (today_day < birth_day))
    {
        age--;
    }
    return age;
}

// let preview1 = document.getElementById('preview-1');

// preview1.addEventListener('click', ()=>{
//     loadImg('public/img/art-work/luffy-by-davidchavez.tech.jpg')
// })

//-----------------loader animation------------------------

const loaderWrapper = document.querySelector('#loader-wrapper');
const loaderBG = document.querySelector('#loader-bg');
const loaderBar = document.querySelector('#loader-bar');
const loaderInnerWrapper = document.querySelector('#loader-inner-wrapper');

function animateLoader(){

    loaderWrapper.style.opacity = 1;
    loaderWrapper.style.pointerEvents = 'all';
    setTimeout(()=>{
        setTimeout(()=>{
            loaderBG.classList.add('shrink-bg')
        }, 200)
        loaderBar.style.transform = `translateX(${loaderBar.clientWidth-200}px)`;
    }, 200)
}
function resetLoader(){
    loaderWrapper.style.pointerEvents = 'none';
    loaderWrapper.style.opacity = 0;
    setTimeout(()=>{
    loaderBG.classList.remove('shrink-bg')
}, 400)
    loaderBar.style.transform = `translateX(0px)`;
}
window.addEventListener('click', (e)=>{
    let clickedElement = e.target
    resetLoader();
    if(clickedElement.classList.contains('previewImg')) loadImg(clickedElement.getAttribute('link'));

})
const _img = document.getElementById('img-loader');

function loadImg(imgURL){
    let newImg = new Image;
    newImg.onload = function() {

        _img.src = this.src;
        if(_img.height > _img.width){
            console.log('one')
            _img.parentElement.style.width = "auto";
            _img.style.height = `${_img.parentElement.clientHeight}px`
            _img.style.width = 'auto'
        }else {
            console.log('two')
            _img.parentElement.style.width = "80vh";
            _img.style.width = `${_img.parentElement.clientWidth}px`
            _img.style.height = 'auto'
        }
        animateLoader()
    }
    newImg.src = imgURL;
}

//-----------------copy text-----------------------------

const copyIcon = document.querySelector('#copy-icon');
const copySpan = document.querySelector('#copy');

copyIcon.addEventListener('click', async ()=>{
    let delay = 800
    try {
        await navigator.clipboard.writeText("hello@davidchavez.tech");
        copySpan.style.opacity = 0;
        setTimeout(()=>{
            copySpan.style.color = 'white';
            copySpan.textContent = 'Copied!'
            copySpan.style.opacity = 1;
        },delay*0.2)
        setTimeout(()=>{
            copySpan.style.opacity = 0;
        },delay*2.5)
        setTimeout(()=>{
            copySpan.style.color = '#d0d0d0';
            copySpan.textContent = 'Copy!';
            copySpan.style.opacity = 1;
        },delay*2.9)
      } catch (error) {
        console.error("Copy failed", error);
      }
    
});
copySpan.addEventListener('click', async ()=>{
    let delay = 1000
    try {
        await navigator.clipboard.writeText("hello@davidchavez.tech");
        copySpan.style.opacity = 0;
        setTimeout(()=>{
            copySpan.style.color = 'white';
            copySpan.textContent = 'Copied!'
            copySpan.style.opacity = 1;
        },delay)
        setTimeout(()=>{
            copySpan.style.opacity = 0;
        },delay*3)
        setTimeout(()=>{
            copySpan.style.color = '#d0d0d0';
            copySpan.textContent = 'Copy!';
            copySpan.style.opacity = 1;
        },delay*4)
      } catch (error) {
        console.error("Copy failed", error);
      }
    
});