


$(document).ready(function () {
    $('#sidebarToggle').click(function (e) {
        e.stopPropagation(); // Prevent click from bubbling up
        $('#sidebar').toggleClass('show');
        $(this).toggleClass('open', $('#sidebar').hasClass('show')); // Add/remove 'open'
    });

    // Close sidebar when clicking outside
    $(document).click(function (event) {
        if (!$(event.target).closest("#sidebar, #sidebarToggle").length) {
            $("#sidebar").removeClass("show");
            $("#sidebarToggle").removeClass("open"); // Remove open state
        }
    });
});




// menu function

const getBtn = document.querySelector('.mob-btn');
getBtn.addEventListener('click', e => {
    document.querySelector('body').classList.toggle('show-menu');
})


const getDropDown = document.getElementsByClassName('main-nav');
for (div of getDropDown) {
    var selectLi = div.getElementsByTagName('li');
    for (li of selectLi) {
        if (li.contains(li.querySelector('ul'))) {
            li.classList.add('submenu');
            li.innerHTML += "<i></i>";
        }
    }
}

const getDropDownClick = document.querySelectorAll('.main-nav i');
getDropDownClick.forEach((item) => {
    item.addEventListener('click', e => {
        e.target.parentNode.classList.toggle('open');
    })
})








