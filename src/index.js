import $ from "jquery";
import utils from "./utils/world";
import "./style/index.css";
import "./style/nihao.less";
import "./style/world.scss"
import picturePath from "./images/hello.jpg";

function component() {
    var element = $("<div></div>");

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.html("hello webpack");

    return element.get(0);
}

document.body.appendChild(component());
let url = "http://www.baidu.com?name=李明&age=12";
console.log(utils.getQuery(url));

let img1 = document.createElement("img");
img1.src = picturePath;
document.body.appendChild(img1);