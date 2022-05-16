$(function() {
    $(".minus").click(function(){
        if ($(".input-box input").val() > 1) {
            $(".input-box input").val( function(i, oldval) {
                return --oldval;
            });
        }


    })
    $(".plus").click(function(){
        $(".input-box input").val( function(i, oldval) {
            return ++oldval;
        });
        


    })

    $('.slide').carousel({
        interval: false,
      });

})