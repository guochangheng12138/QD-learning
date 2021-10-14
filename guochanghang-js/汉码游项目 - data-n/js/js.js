// var ztm = document.getElementById('ztm');
var sred = document.getElementById('sred');
var contentparts = document.querySelectorAll('.ytmcd');



// ztm.onmouseover = function (e) {
ztm.addEventListener('onmouseover', function (e) {
    if (e.target.tagName.toLowerCase() == 'div') {
        e.target.style.backgroundColor = 'rgba(0,0,0,0.6)';
        var n = e.target.getAttribute('data-n');
        var contentpart = document.querySelector('.ytmcd[data-n=' + n + ']')
        contentpart.style.display = 'block';
        // e.stopPropagation();
    }

}, true)
// ztm.onmouseout = function (e) {
// ztm.addEventListener('onmouseout', function (e) {
//     if (e.target.tagName.toLowerCase() == 'div') {
//         e.stopPropagation();
//         var n = e.target.getAttribute('data-n');
//         e.target.style.backgroundColor = 'rgba(0,0,0,0.4)';
//         var contentpart = document.querySelector('.ytmcd[data-n=' + n + ']')
//         contentpart.style.display = 'none';
//     }
// }, true)