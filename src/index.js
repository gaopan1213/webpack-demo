import Vue from "vue/dist/vue.esm";
import App from "./assets/app.vue";

new Vue({
    el: "#app",
    data: {
        msg: "hello",
    },
    // render: h => {
    //     return h("div", null, "hello");
    // }
    template: `
    <div>
        <p>你好</p>
        <h1>我真好看</h1>
        <h3>你也好看</h3>
        <h4>13123</h4>
        <App></App>
    </div>
    `,
    components: {
        App,
    }
});
// let p = document.createElement("p");
// p.innerHTML = "奶好";
// document.body.appendChild(p);