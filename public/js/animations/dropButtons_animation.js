let dropButtons_importedArray;
let originalTopPositions = []
function _loadDropButtons_animation(array){
    dropButtons_importedArray = array;
    for(let i=0;dropButtons_importedArray.length>i;i++){
        console.log(dropButtons_importedArray[i].offsetTop)
        originalTopPositions.push(dropButtons_importedArray[i].offsetTop);
    }
    array.forEach(element =>{
        element.addEventListener('click',(e)=> {
            if(!(e.currentTarget.classList.contains('selected'))) dropButtons(e.currentTarget);
            else resetButtons()
        })
    })
}
function dropButtons(clickedElement){
    for(let i=0;dropButtons_importedArray.length>i;i++){
        if(clickedElement!=dropButtons_importedArray[i]){
            delay = i*200;
            dropButtons_importedArray[i].style.transform = 'translateY(-15px)'
            dropButtons_importedArray[i].style.transform += 'rotate(1deg)'
            setTimeout(() => {
                dropButtons_importedArray[i].style.transition = 'all .7s ease-in';
                dropButtons_importedArray[i].style.transform = 'translateY(50vh)'
                dropButtons_importedArray[i].style.transform += 'rotate(-20deg)'
                dropButtons_importedArray[i].style.opacity = '0'
            }, 200 + delay);
        }else{
            dropButtons_importedArray[i].style.transition = "all .3s ease-out"
            dropButtons_importedArray[i].style.top = "184px"
            dropButtons_importedArray[i].classList.add('selected');
        }
    }
    
}
function resetButtons(){
    for(let i=0;dropButtons_importedArray.length>i;i++){
        dropButtons_importedArray[i].classList.remove('selected');
        dropButtons_importedArray[i].style.transition = 'transition: all .3s ease-in'
        dropButtons_importedArray[i].style.top = `${originalTopPositions[i]}px`
        dropButtons_importedArray[i].style.transform = `TranslateY(0px)`
        dropButtons_importedArray[i].style.transform += `rotate(0deg)`
        dropButtons_importedArray[i].style.opacity = 1
    }
}