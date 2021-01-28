'use strict';

$(document).ready(function(){

    $('.archive__link').on('click', function(e){
        e.preventDefault()
        $('.archive__flex.archive__flex--all').slideToggle(400)
    });
});
