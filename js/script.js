$( document ).ready(function() {

    console.log('dfvfv');

    
    $('.city_select').hover(function(){
        console.log('city_select');
        $('.city_select_options').removeClass('hidden')
    })
    var city_select_options = $( ".city_select_options" );
    $(document).mouseup( function(e){ // событие клика по веб-документу
		if ( !city_select_options.is(e.target) // если клик был не по нашему блоку
		    && city_select_options.has(e.target).length === 0 ) { // и не по его дочерним элементам
                city_select_options.addClass('hidden') // скрываем его
		}
	});
    $('#city_1').click(function(){
        $('.city_select_text').text($('#city_1').text());
        $('#city_3').removeClass('hidden');
        $('#city_1').addClass('hidden');
        city_select_options.addClass('hidden');
    })
    $('#city_2').click(function(){
        $('.city_select_text').text($('#city_2').text());
        $('#city_1').removeClass('hidden');
        $('#city_2').addClass('hidden');
        city_select_options.addClass('hidden');
    })
    $('#city_3').click(function(){
        $('.city_select_text').text($('#city_3').text());
        $('#city_3').addClass('hidden');
        $('#city_2').removeClass('hidden');
        $('#city_1').removeClass('hidden');
        city_select_options.addClass('hidden');
    });

    

    $('#header_input').click(function(){
        $('.my_fade').addClass('my_fade_open');
    })
    
    $(document).mouseup( function(e){ // событие клика по веб-документу
		if ( ! $('#header_input').is(e.target) // если клик был не по нашему блоку
		    &&  $('#header_input').has(e.target).length === 0 ) { // и не по его дочерним элементам
                // $('.my_fade').addClass('hidden') // скрываем его
                // $('.my_fade').removeClass('my_fade_open');
                $('.my_fade').removeClass('my_fade_open');
		} else {
            $('.my_fade').addClass('my_fade_open');
        }
	});


$('.accordion-item').click(function(){
    // console.log('привет');
    $(this).find('svg').toggleClass('arrow_rotate');
})


    $('.card_buy_btn').click(function(){
        $(this).find('svg').toggleClass('d-none');
    })

    $('.like').click(function(){
        $(this).find('path').toggleClass('like_active');
    })



});
