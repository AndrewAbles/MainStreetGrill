(function () {
    $(window).scroll(function () { 
        var Num = $(window).scrollTop() / 500;
        var Num2 = $(window).scrollTop() * .007; // Zoom for the scroll effect
        var Num2mod = Num2 + 1;
        var Num3 = $(window).scrollTop() * .5; // Zoom speed for the "Main Street Serves You"
        var Num3mod = Num3 + 1;
        return $('.shade').css('opacity', Num),
        $(".bg").css({"transform":"scale(" + Num2mod + ")"}),
        $(".text").css({"margin-top":"-" + Num3mod + "px"});
    });
}.call(this));

