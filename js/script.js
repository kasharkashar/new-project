document.addEventListener("DOMContentLoaded", function() {
    var myCollapseElement = document.getElementById('mainNavbar')
    var bsCollapse = new bootstrap.Collapse(myCollapseElement, {
        toggle: false
    });
    document.getElementById('myToggle').addEventListener('click', function() {
        bsCollapse.toggle();
    });
});