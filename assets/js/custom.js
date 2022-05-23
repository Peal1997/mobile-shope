

 // banner owl carousel
 $(".our-slider").owlCarousel({
     autoplay:true,
    dots: true,
    items: 1
});

// top sale owl carousel
$("#top-sale .owl-carousel").owlCarousel({
    autoplay:true,
    loop: true,
    nav: true,
    dots: false,
    responsive : {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000 : {
            items: 5
        }
    }
});

// isotope filter
let $grid = $(".grid").isotope({
    itemSelector : '.grid-item',
    layoutMode : 'fitRows'
});

    // filter items on button click
    $(".button-group").on("click", "button", function(){
        let filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue});
    })


      // new phones owl carousel
$("#new-phones .owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    responsive : {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000 : {
            items: 5
        }
    }
});
 // blogs owl carousel
 $(".blog-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    responsive : {
        0: {
            items: 1
        },
        600: {
            items: 3
        }
    }
});

let $qyt_up = $('.qty .qty-up');
let $qyt_down = $('.qty .qty-down');
//let $input = $('.qty .qty-input');

//click on quantity up button
$qyt_up.on('click',function(e){
    let $input = $(`.qty-input[data-id='${$(this).data("id")}']`);
    if($input.val()>=1 && $input.val()<=9){
        $input.val(function(i,oldval){
            return ++oldval;
        });
    }
});
$qyt_down.on('click',function(e){
    let $input = $(`.qty-input[data-id='${$(this).data("id")}']`);
    if($input.val()>1 && $input.val()<=10){
        $input.val(function(i,oldval){
            return --oldval;
        });
    }
});




    



