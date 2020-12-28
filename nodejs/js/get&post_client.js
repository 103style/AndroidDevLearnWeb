var ajaxHttp;
if (window.XMLHttpRequest) {
    ajaxHttp = new XMLHttpRequest();
} else {
    ajaxHttp = new ActiveXObject("Microsoft.XMLHTTP");
}

ajaxHttp.onreadystatechange = function() {
    console.log("ajaxHttp.readyState = " + ajaxHttp.readyState);
    console.log("ajaxHttp.status = " + ajaxHttp.status);
    if (ajaxHttp.readyState == 4 && ajaxHttp.status == 200) {
        var data = ajaxHttp.responseText;
        console.log(data);
        var arr = data.split("\n");
        $("#website_name").text(arr[0]);
        $("#website_url").text(arr[1]);
        $("#website_author").text(arr[2]);
    }
}

ajaxHttp.open("GET", "http://localhost:5000", true);
ajaxHttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
ajaxHttp.send();


function post() {
    ajaxHttp.open("POST", "http://localhost:5000", true);
    ajaxHttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    ajaxHttp.setRequestHeader("Content-Security-Policy", "default-src https: http: 'unsafe-inline' 'unsafe-eval';connect-src https: http:");
    var name = $("#name").text();
    var url = $("#url").text();
    var author = $("#author").text();
    console.log(name + "---" + url + "---" + author);
    ajaxHttp.send("name=" + name + "&url=" + url + "&author=" + author);
}