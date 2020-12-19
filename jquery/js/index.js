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

    $(".d_anim_test1").click(function() {
        $(".p_anim_test1").animate({
            left: '50px',
            opacity: '0.5',
            height: '200px',
            width: '200px'
        });
    });

    $(".d_anim_plus").click(function() {
        $(".p_anim_plus").animate({
            height: '+=10px',
            width: '+=10px'
        });
    });

    $(".d_anim_toggle").click(function() {
        $(".p_anim_toggle").animate({
            height: 'toggle',
            width: 'toggle'
        }, 1000);
    });

    $(".d_anim_queue").click(function() {
        var animshow = $(".p_anim_queue");
        animshow.animate({
            left: '50px',
            opacity: '0.5'
        }, 1000);
        animshow.animate({
            left: '-100px',
            opacity: '1'
        }, 1000);
        animshow.animate({
            left: '0px',
            width: '+=10px',
            height: '+=10px',
        }, 1000);
    });

    $(".d_anim_stop").click(function() {
        $(".p_anim_stop").animate({ width: '+=200px', height: '+=200px' }, 5000);
    });
    $(".animate_stop").click(function() {
        $(".p_anim_stop").stop();
    });


    $(".d_anim_callback").click(function() {
        $(".p_anim_callback").animate({ height: '+=50px', width: '+=50px' },
            2000,
            function() {
                alert("动画完成！");
            });
    });


    //链(Chaining)
    $(".d_chaining")
        .click(function() {
            $(".p_chaining").animate({ width: '+=20px', height: '+=20px' })
                .slideUp(2000)
                .slideDown(2000)
                .hide(2000)
                .show(2000);

        });


    //获取、修改内容和属性
    $(".text_get").click(function() {
        alert("文本内容是: \n\n" + $(".text_get").text());
    })

    $(".html_get").click(function() {
        alert("html内容是: \n\n" + $(".html_get").html());
    })

    $(".val_get").click(function() {
        alert("val = " + $(".input_val_get").val());
    })

    $(".attr_get").click(function() {
        alert("class = " + $(".attr_get").attr("class"));
    })


    $(".text_set").click(function() {
        $(".text_set").text("通过text('value')修改");
    })

    $(".html_set").click(function() {
        $(".html_set").html("<b>修正成功！</b>");
    })

    $(".val_set").click(function() {
        $(".input_val_set").val($(".input_val_set").val().toUpperCase());
    })

    $(".attr_set").click(function() {
        $(".attr_set").attr({ "class": "backtext" }).text("修改为黑色文字");
    })
});