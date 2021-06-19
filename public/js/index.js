const scrollableElement = document.querySelector(".pages-wrapper");
(function (y){
    scrollableElement.scrollTo(0, y);
})(scrollableElement.scrollHeight)
