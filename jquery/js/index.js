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


    //添加和删除元素
    $(".append").click(function() {
        $(".append_content").append("END!");
    })

    $(".prepend").click(function() {
        $(".append_content").prepend("HEAD!")
    })

    $(".after").click(function() {
        $(".append_content").after("After!");
    })

    $(".before").click(function() {
        $(".append_content").before("Before!")
    })

    $(".remove").click(function() {
        $(".remove").remove();
    })

    $(".emtpy").click(function() {
        if (confirm("确认清空？")) {
            //点击确认
            $(".emptyDemo").empty();
        } else {
            //点击取消
            console.log("取消清空。")
        }
    })

    $(".emtpyfilter").click(function() {
        if (confirm("确认清空所有类名为 clickButton 的元素？")) {
            //点击确认
            $("p").empty(".clickButton");
        } else {
            //点击取消
            console.log("取消清空。")
        }
    })


    //获取并设置 CSS 类
    $(".addclass").click(function() {
        $(".addclass").addClass("clickButton");
    })

    $(".removecalss").click(function() {
        $(".removecalss").removeClass("clickButton");
    })

    //添加或删除clickButton类
    $(".toggleclass").click(function() {
        $(".toggleclass").toggleClass("clickButton");
    })

    $(".cssgetattr").click(function() {
        $(".cssgetattr").append("background = " + $(".cssgetattr").css("background"));
    })

    //设置单个css属性
    $(".csssetattr").click(function() {
        $(".csssetattr").css("background", "black");
    })

    //设置多个css属性
    $(".csssetattrs").click(function() {
        $(".csssetattrs").css({ "background": "black", "font-size": "30px" });
    })


    //jQuery尺寸
    $(".widthget").click(function() {
        $(".widthget").append(", width = " + $(".widthget").width());
    })

    $(".heightget").click(function() {
        $(".heightget").append(", height = " + $(".heightget").height());
    })

    $(".widthset").click(function() {
        var value = prompt("");
        if (value != null) {
            $(".widthset").width(value);
        }
    })
    $(".heightset").click(function() {
        var value = prompt("");
        if (value != null) {
            $(".heightset").height(value);
        }
    })


    $(".innerWidth").click(function() {
        $(".innerWidth").append(", innerWidth = " + $(".innerWidth").innerWidth());
    })

    $(".innerHeight").click(function() {
        $(".innerHeight").append(", innerHeight = " + $(".innerHeight").innerHeight());
    })

    $(".outerWidth").click(function() {
        $(".outerWidth").append(", outerWidth = " + $(".outerWidth").outerWidth());
    })

    $(".outerHeight").click(function() {
        $(".outerHeight").append(", outerHeight = " + $(".outerHeight").outerHeight());
    })


    //jQuery遍历
    $(".parent").click(function() {
        $(".parent").parent().css({ "border": "5px solid blue" });
    })

    $(".parents").click(function() {
        $(".parents").parents().css({ "border": "5px solid green" });
    })

    $(".parentsUntil").click(function() {
        $(".parentsUntil").parentsUntil("body").css({ "border": "5px solid yellow" });
    })

    $(".children").click(function() {
        $("body").children().css({ "border": "5px solid brown" });
    })

    $(".find").click(function() {
        $("body").find(".title").css({ "border": "5px solid lime" });
    })


    //AJAX
    $(".ajax_load").click(function() {
        $(".ajax_load_show").load("ajaxload.txt",
            function(responseTxt, statusTxt, xhr) {
                if (statusTxt == "success")
                    alert("外部内容加载成功!");
                if (statusTxt == "error")
                    alert("Error: " + xhr.status + ": " + xhr.statusText);
            });
    })

    $(".ajax_load_id").click(function() {
        $(".ajax_load_id_show").load("ajaxload.txt #ajax_test",
            function(responseTxt, statusTxt, xhr) {
                if (statusTxt == "success")
                    alert("外部内容加载成功! \n\n responseTxt = " + responseTxt + "\n\n statusTxt = " + statusTxt + "\n\n xhr = " + xhr);
                if (statusTxt == "error")
                    alert("Error: " + xhr.status + ": " + xhr.statusText);
            });
    })

    // var testjq = $.noConflict();
    // testjq(".noConflict_test").click(function() {
    //     testjq(".noConflict_test_show").toggle();
    // })

});