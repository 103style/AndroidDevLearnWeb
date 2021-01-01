var ajaxHttp;
if (window.XMLHttpRequest) {
    ajaxHttp = new XMLHttpRequest();
} else {
    ajaxHttp = new ActiveXObject("Microsoft.XMLHTTP");
}

ajaxHttp.onreadystatechange = function() {
    // console.log("ajaxHttp.readyState = " + ajaxHttp.readyState);
    // console.log("ajaxHttp.status = " + ajaxHttp.status);
    if (ajaxHttp.readyState == 4 && ajaxHttp.status == 200) {
        var json = ajaxHttp.responseText;
        // console.log(json);
        var jsonObj = JSON.parse(json);
        $("#wx").text(jsonObj.wx);
        $("#web").text(jsonObj.web);
    }
}

$(function() {
    get();
});

function get() {
    ajaxHttp.open("GET", "http://localhost:8081/get?wx=103Tech&web=103style.top", true);
    ajaxHttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    ajaxHttp.send();
}


function post() {
    var wx = $("#wxedit").val();
    var web = $("#webedit").val();
    console.log('wx = ' + wx + ', web = ' + web)
    ajaxHttp.open("post", "http://localhost:8081/post/", true);
    ajaxHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajaxHttp.send("wx=" + wx + "&web=" + web);
}