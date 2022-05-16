$(function() {
    $('.first-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.second-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1200:{
                items:5
            }
        }
    })
    var clock = $('.clock').FlipClock({
        clockFace:'DailyCounter',
        
        autoStart:false,
    
        callbacks: {
    
          stop:function() {
    
            $('.message').html('The clock has stopped!')
    
          }
    
        }
    
    });
    clock.setTime(220880);
    clock.setCountdown(true);
    // start the clock
    clock.start();

    //add to card
    if (JSON.parse(localStorage.getItem("products")) == null) {
        localStorage.setItem("products", JSON.stringify([]));
    }
    let countElem = $("sup")
    let products = JSON.parse(localStorage.getItem("products"));

    $(".add-to-card").click(function() {
       
        let productId = $(this).parent().parent().parent().attr("data-id"); 
        if (productId == $(this).attr("data-id")) {
            let productImg = $(this).parent().parent().prev().attr("src")
            let productName = $(this).parent().parent().children(":first").text();
            let productPrice = $(this).parent().prev().text();
            let existProduct = products.find(m => m.id == productId);
            if ($(this).attr("data-id") == 4) {
                return;
            }
            else if (existProduct == undefined) {
                products.push({
                    id: productId,
                    img: productImg,
                    name: productName,
                    price: productPrice,
                    count: 1
                })
            } else {
                existProduct.count += 1;
            }
            localStorage.setItem("products", JSON.stringify(products));
            countElem.text(products.length);
        }
    })
    countElem.text(products.length);
    $(".input-box .btn").click(function(e) {
        if($(".input-box input").val() == 0) {
            e.preventDefault();
            $(".input-box input").css("border","2px solid red");
        }
        else {
            $(".input-box input").css("border","none");
        }
    })
})