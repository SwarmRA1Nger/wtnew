$(document).on('click', '.MenuA', function(){
    $('.MenuA').removeClass('active');//При клике сперва убираем класс со всех кнопок
    $(this).addClass('active');//Потом добавляем его на текущую кликнутую.
});
$(document).on('click', '.ContactUs', function(){
    $('.MenuA').removeClass('active');//При клике сперва убираем класс со всех кнопок
});