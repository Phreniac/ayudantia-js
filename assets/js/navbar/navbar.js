window.addEventListener("click", function (event) {
    console.log('target', event.target);
    let cart_list = document.getElementById('cart_list');
    let cart_list_btn = document.getElementById('cart_list_btn');
    let cart_list_icon = document.getElementById('cart_list_icon');
    if (cart_list != event.target && cart_list_btn != event.target && cart_list_icon != event.target) {
        console.log('no es el contenedor');
        if (cart_list.classList.contains('open')) {
             cart_list.classList.remove('open');
        }
    }

});
function openCartList() {
    let cart_list = document.getElementById('cart_list');
    console.log('elemento cart_list', cart_list.classList.contains('open'));
    if (cart_list.classList.contains('open')) {
        cart_list.classList.remove('open');
    } else {
        cart_list.classList.add('open');
    }
}