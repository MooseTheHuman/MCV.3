var wrapper = document.querySelector('.animate');
window.onscroll = function (event) {
    if (wrapper.getBoundingClientRect().top < 0) {
        wrapper.className = "animate onScreen";
        window.onscroll = null;
    }
}