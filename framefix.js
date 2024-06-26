function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
if (inIframe()){
    Array.from(document.getElementsByTagName("a")).forEach(function (e) {
        e.target = "_blank"
    });
}