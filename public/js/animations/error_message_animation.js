const errorMsgConatiner = document.getElementById("error-message");
const errorMsgText = document.getElementById("error-text");

function showErrorMsg(msg, delay){
    hide();
    setTimeout(() => {
        errorMsgConatiner.classList.remove('hide');
        errorMsgText.textContent = msg;
        errorMsgText.classList.add('show-error-msg');
    }, 100);
    
    setTimeout(() => {
        hide();
    }, delay);
    function hide(){
        errorMsgText.classList.remove('show-error-msg');
        errorMsgConatiner.classList.add('hide');
    }
}