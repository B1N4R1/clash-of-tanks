
$(document).ready(function(){

    slider();

});

$(".arrow").on("click", function(){

    var active = parseInt($(".content").attr("data-active"));

    if (active == 4) {
        var dir = -3;
    }
    else{

        var dir = ($(this).text().includes("next")) ? 1 : -1;

        if (active == 1 && dir == -1) {
            
            dir = 3;

        }

    }

    $(".content").attr("data-active", active + dir);

    slider();

});


function slider() {

    var active = $(".content").attr("data-active");

    $.getJSON("https://b1n4r1.github.io/clash-of-tanks/ClashOFTanks/js/taldea.json", function(json) {
        
        var taldekideak = json.taldekideak;

        var name = taldekideak[active].name;
        var job = taldekideak[active].job;
        var desc = taldekideak[active].desc;
        var img = taldekideak[active].image;

        $(".name").text(name);
        $(".job").text(job);
        $(".biography").text(desc);
        // $(".image-wrapper > img").attr("src", img);

        $(".image-wrapper > img").animate({opacity: '0.75'}, "slow", function(){

            $(this).attr('src', img);
            $(this).fadeIn('slow');

        });

        $(".image-wrapper > img").animate({opacity: '1'}, "slow")

        // $(".image-wrapper > img").fadeOut('slow', function () {

        // });
        
    });

}
