function _loadToggleClassStagger(mainContainer, clickableElement, columns, staggerDelay, delay){
    let previewImgs = mainContainer.querySelectorAll('img');
    clickableElement.addEventListener('click', ()=>{
        let maxNumberOfChildren = 0
        for(let i=0;columns.length>i;i++){
            if(maxNumberOfChildren < columns[0].children.length) maxNumberOfChildren = columns[0].children.length
        }
        (window.getComputedStyle(mainContainer).getPropertyValue("opacity") == '0') ? mainContainer.style.opacity = '1' : mainContainer.style.opacity = '0';
        let counter = 0;
        if(columns[0].children[0].children[0].classList.contains('appearFromBottom')){
            mainContainer.style.pointerEvents = 'none';
            previewImgs.forEach(img=>{
                img.style.transition = 'all .2s ease-out';
                img.classList.remove('appearFromBottom');
                img.style.transform = 'translateY(50px)';
                img.style.opacity = 0;
            })
                
                
            
        }else{
            setTimeout(()=>{
                mainContainer.style.pointerEvents = 'all';
                for(let j=0;maxNumberOfChildren>j;j++){
                    
                    for(let i=0;columns.length>i;i++){
                        makeChildAppear(columns[i], j, staggerDelay, counter)
                        counter++
                    }
                }
            }, delay)
        }
        

    })
}

function makeChildAppear(column, childrenNumber, staggerDelay, counter){
    if(column.children[childrenNumber].children[0]){
        setTimeout(()=>{        
            column.children[childrenNumber].children[0].style.transition = 'all .7s ease-out';
            column.children[childrenNumber].children[0].classList.add('appearFromBottom');
            column.children[childrenNumber].children[0].style.transform = 'translateY(0px)';
            column.children[childrenNumber].children[0].style.opacity = 1;
        
        }, staggerDelay*counter)
    }

}