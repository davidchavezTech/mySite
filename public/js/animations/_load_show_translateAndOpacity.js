let Ytranslate = []
function _load_show_translateAndOpacity(clickElement, cards, staggeringDelay, delay){
    //store Ytranslate values in "Ytranslate" let variable
    if(cards.length>1){
        cards.forEach(card=>{
            Ytranslate.push(
                window
                .getComputedStyle(card)
                .getPropertyValue('transform').match(/(-?[0-9\.]+)/g)[5]
            );
        })
    }else{
        Ytranslate.push(window
            .getComputedStyle(cards)
            .getPropertyValue('transform').match(/(-?[0-9\.]+)/g)[5])
    }

    clickElement.addEventListener('click', ()=>{
        if(!(clickElement.classList.contains('cards-shown'))){
            clickElement.classList.add('cards-shown');
            show_translateAndOpacity(cards, staggeringDelay, delay)
        }else{
            clickElement.classList.remove('cards-shown');
            hide_trasnlateAndOpacity(cards)
        }
    })
}
function show_translateAndOpacity(elements, staggeringDelay, delay) {
    setTimeout(() => {
        let counter = 0
        if(elements.length>1){
            elements.forEach(element => {
                setTimeout(() => {
                    element.style.pointerEvents = 'all';
                    element.style.opacity = 1;
                    element.style.transform = 'translate(0, 0)';
                }, staggeringDelay*counter);
                counter++
            });
        }else{
            elements.style.pointerEvents = 'all';
            elements.style.opacity = 1;
            elements.style.transform = 'translate(0, 0)';
        }
    }, delay);
}
function hide_trasnlateAndOpacity(cards){
    if(cards.length>1){
        cards.forEach(card => {
            card.style.opacity = 0;
        });
        setTimeout(()=>{
            for(let i=0;cards>i;i++){
                cards[i].style.transform = `translateY(${Ytranslate[i]}px)`;
            }
        },300);
    }else{

        cards.style.opacity = 0;

        setTimeout(()=>{
            cards.style.transform = `translateY(${Ytranslate[0]}px)`;
            cards.style.pointerEvents = "none";

        },300);
    }
}