$(document).ready(function() {
    $("button").click(function() {
        $("h2").toggle();
    });

    $("#id_click").click(function() {
        $("#id_selector").toggle();
    });

    $(".class_click").click(function() {
        $(".class_show").toggle();
    });

    // event
    $(".event_click").click(function() {
        console.log("click");
        alert("收到 click 事件");
    });

    $(".event_dbclick").dblclick(function() {
        console.log("dblclick");
        alert("收到 dblclick 事件");
    });

    $(".event_mouse").mouseenter(function() {
        console.log("mouseenter");
        $(".event_mouse").append(" mouseenter");
    });

    $(".event_mouse").mouseleave(function() {
        console.log("mouseleave");
        $(".event_mouse").append(" mouseleave");
    });

    $(".event_hover").hover(function() {
        console.log("hover");
        $(".event_hover").append(" hover ");
    });


    //效果
    $(".d_hide").click(function() {
        $(".p_hide").hide();
    });
    $(".d_show").click(function() {
        $(".p_show").show();
    });
    $(".d_toggle").click(function() {
        $(".p_toggle").toggle();
    });


    $(".d_fadeout").click(function() {
        $(".p_fadeout").fadeOut(1000);
    });
    $(".d_fadein").click(function() {
        $(".p_fadein").fadeIn(1000);
    });
    $(".d_fadetoggle").click(function() {
        $(".p_fadetoggle").fadeToggle(1000);
    });


    $(".d_slidedown").click(function() {
        $(".p_slidedown").slideDown(1000);
    });
    $(".d_slideup").click(function() {
        $(".p_slideup").slideUp(1000);
    });
    $(".d_slidetoggle").click(function() {
        $(".p_slidetoggle").slideToggle(1000);
    });


    //动画
    $(".d_tranlateX").click(function() {
        $(".p_tranlateX").animate({ left: '50px' });
    });
});