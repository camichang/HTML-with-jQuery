$(document).ready(function () {
    var p = $("p").first();
    var position = p.position();
    $("p").last().text();
    alert("Para o Position - Left Position: " + position.left + ", Top Position: " + position.top);
    });

    var p = $("p").last();
    var offset = p.offset();
    p.html();
    alert("Para o Offset - Left Position: " + offset.left + ", Top Position: " + offset.top);

    $("#botaoscroll").click(function () {
        var y = $("#divscroll").scrollTop();
        alert(y);
    })
    

    $("#divTamanho").width(500).height(500);
    // questao 1 do jamboard
    $("#divTamanho").height();
    // questao 2 do jamboard
    $("#divTamanho").innerHeight();
    // questao 3 do jamboard


window.addEventListener('resize', function () {
    var tam = $(window).width();
    if (tam >= 1024) {
        $(".menuhorizontal").show();
    } else {
        $(".menuhorizontal").hide();
    }
});
