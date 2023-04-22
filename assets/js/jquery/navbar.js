$(document).ready(function () {
    $('.navbar-01 ul li').hover(
        function () {
            //console.log('hover', $(this).attr('id'));
            if ($(this).attr('id') == "nav_btn_01") {
                 $('#sq_hover_01').css('background-color', 'orange');
            }
             if ($(this).attr('id') == "nav_btn_02") {
                 $('#sq_hover_02').css('background-color', 'orange');
            }
             if ($(this).attr('id') == "nav_btn_03") {
                 $('#sq_hover_03').css('background-color', 'orange');
            }
             if ($(this).attr('id') == "nav_btn_04") {
                 $('#sq_hover_04').css('background-color', 'orange');
            }
             if ($(this).attr('id') == "nav_btn_05") {
                 $('#sq_hover_05').css('background-color', 'orange');
            }
        }, 
        function () {
            //console.log('no hover');
            if ($(this).attr('id') == "nav_btn_01") {
                 $('#sq_hover_01').css('background-color', 'white');
            }
            if ($(this).attr('id') == "nav_btn_02") {
                 $('#sq_hover_02').css('background-color', 'white');
            }
            if ($(this).attr('id') == "nav_btn_03") {
                 $('#sq_hover_03').css('background-color', 'white');
            }
            if ($(this).attr('id') == "nav_btn_04") {
                 $('#sq_hover_04').css('background-color', 'white');
            }
            if ($(this).attr('id') == "nav_btn_05") {
                 $('#sq_hover_05').css('background-color', 'white');
            }
        }
    )
});