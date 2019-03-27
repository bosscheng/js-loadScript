export function loadScript(url) {
    return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        var headTag = document.getElementsByTagName("head")[0]
        script.type = "text/javascript";
        script.onload = function () {
            resolve();
        };

        script.onerror = function () {
            reject();
        };

        script.src = url;
        headTag.appendChild(script);
    })
}

//
export function loadScripts(urlArray) {
    var scriptArr = [];
    for (var i = 0; i < urlArray.length; i++) {
        scriptArr.push(loadScript(urlArray[i]))
    }
    return Promise.all(scriptArr);
}


