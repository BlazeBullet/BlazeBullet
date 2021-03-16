var loadplugins = function loadplugins() {
    var github = new XMLHttpRequest();
    github.open("GET", "https://raw.githubusercontent.com/BlazeBullet/store/master/Plugins.json", false);
    github.send(null);

    var l = JSON.parse(github.responseText);
    var end = "";
    var x = document.getElementsByClassName("store")[0];

    l["root"].forEach(a => {
        end +=  `
            <tr>
                <th scope="row">${a.name.toLocaleString()} - ${a.author}</th>
                <td>${a.desc} - <a href="${a.download}">Download</a></td>
            </tr>
        `
    })

    x.innerHTML = "<table class=\"table\">" + end.toString(); + "</table>"
}

var loadthemes = function loadplugins() {
    var github = new XMLHttpRequest();
    github.open("GET", "https://raw.githubusercontent.com/BlazeBullet/store/master/Themes.json", false);
    github.send(null);

    var l = JSON.parse(github.responseText);
    var end = "";
    var x = document.getElementsByClassName("store")[0];

    l["root"].forEach(a => {
        end += `
            <tr>
                <th scope="row">${a.name.toLocaleString()} - ${a.author}</th>
                <td>${a.desc} - <a href="${a.download}">Download</a></td>
            </tr>
        `
    })

    x.innerHTML = "<table class=\"table\">" + end.toString(); + "</table>"
}

var loadconfigs = function loadconfigs() {
    var github = new XMLHttpRequest();
    github.open("GET", "https://raw.githubusercontent.com/BlazeBullet/store/master/Configs.json", false);
    github.send(null);

    var l = JSON.parse(github.responseText);
    var end = "";
    var x = document.getElementsByClassName("store")[0];

    l["root"].forEach(a => {
        end += `
            <tr>
                <th scope="row">${a.name.toLocaleString()} - ${a.author}</th>
                <td>${a.desc} - <a href="${a.download}">Download</a></td>
            </tr>
        `
    })

    x.innerHTML = "<table class=\"table\">" + end.toString(); + "</table>"
}