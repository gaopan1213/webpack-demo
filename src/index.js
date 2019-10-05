import $ from "jquery";

function component() {
    var element = $("<div></div>");

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.html("hello webpack");

    return element.get(0);
}

document.body.appendChild(component());