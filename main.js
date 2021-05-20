const app = new Vue({
  el: "#app",
  data: {
    list: [
      {
        itemid: 1,
        itemname: "JQuery",
        url: "https://jquery.cuishifeng.cn/index.html",
        icon: "https://jquery.cuishifeng.cn/favicon.ico",
      },
      {
        itemid: 2,
        itemname: "BootCDN",
        url: "https://www.bootcdn.cn/",
        icon: "https://www.bootcdn.cn/assets/ico/favicon.ico?1618753550044",
      },
      {
        itemid: 3,
        itemname: "Less",
        url: "https://less.bootcss.com/",
        icon: "https://less.bootcss.com/public/ico/favicon.ico",
      },
      {
        itemid: 4,
        itemname: "Bootatrap",
        url: "http://docs.bootcss.com/bootstrap-2.3.2/docs/index.html",
        icon: "http://docs.bootcss.com/bootstrap-2.3.2/docs/assets/ico/favicon.png",
      },
      {
        itemid: 5,
        itemname: "Axios",
        url: "http://www.axios-js.com/zh-cn/docs/",
        icon: "http://www.axios-js.com/icon/favicon-32x32.png",
      },
      {
        itemid: 6,
        itemname: "React",
        url: "https://react.docschina.org/",
        icon: "https://react.docschina.org/favicon.ico",
      },
      {
        itemid: 7,
        itemname: "NDM",
        url: "https://developer.mozilla.org/zh-CN/docs/Web",
        icon: "https://developer.mozilla.org/favicon-48x48.97046865.png",
      },
      {
        itemid: 8,
        itemname: "印记笔记",
        url: "https://docschina.org/",
        icon: "https://docschina.org/favicon.ico",
      },
      {
        itemid: 9,
        itemname: "TypeScript",
        url: "https://www.tslang.cn/",
        icon: "https://www.tslang.cn/assets/images/icons/favicon.ico",
      },
      {
        itemid: 10,
        itemname: "Sass",
        url: "https://www.sass.hk/",
        icon: "https://www.sass.hk/favicon.ico",
      },
      {
        itemid: 11,
        itemname: "npm",
        url: "https://www.npmjs.com/",
        icon: "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png",
      },
      {
        itemid: 12,
        itemname: "Vue",
        url: "https://v3.cn.vuejs.org/",
        icon: "https://v3.cn.vuejs.org/logo.png",
      },
      {
        itemid: 13,
        itemname: "nodejs",
        url: "http://nodejs.cn/",
        icon: "http://static.nodejs.cn/_static/img/favicon.png",
      },
      {
        itemid: 14,
        itemname: "ECMAScript",
        url: "https://ecma262.docschina.org/",
        icon: "https://ecma262.docschina.org/img/favicon.ico",
      },
    ],

    itemid: 0,
    itemname: "",
    url: "",
    icon: "",

    isView: false,
  },
  created() {
    let s = JSON.parse(window.localStorage.getItem("item"));
    if (s) this.list = s;
  },
  methods: {
    additem() {
      this.itemid = this.list[this.list.length - 2].itemid + 1;
      Vue.set(this.list, this.list.length - 1, {
        itemid: this.itemid,
        itemname: this.itemname,
        url: this.url,
        icon: this.icon,
      });
      this.itemname = "";
      this.url = "";
      this.icon = "";
      this.isView = false;
      let s = window.localStorage.getItem("item");
      s = this.list;
      window.localStorage.setItem("item", JSON.stringify(s));
      this.addAdd();
    },
    removeItem(e) {
      if (e.target.id != "add") {
        this.list = this.list.filter((i) => i.itemid != e.target.id);
        let tmp = this.list.filter((i) => i.itemid != "add");
        let s = window.localStorage.getItem("item");
        s = tmp;
        window.localStorage.setItem("item", JSON.stringify(s));
      }
    },
    item(e) {
      if (e.target.nodeName === "IMG" && e.target.id != "add") {
        open(e.target.id);
      } else if (e.target.id === "add") {
        this.isView = true;
      } else if (e.target.id === "app" && this.isView === true) {
        this.isView = false;
      }
    },
    addAdd() {
      Vue.set(this.list, this.list.length, {
        itemid: "add",
        itemname: "",
        url: "add",
        icon: "https://z3.ax1x.com/2021/05/18/ghOHiD.png",
      });
    },
    infile(e) {
      input = e.target;
      if (window.FileReader) {
        var file = input.files[0];
        filename = file.name.split(".")[0];
        var reader = new FileReader();
        reader.onload = function () {
          var data = JSON.parse(this.result);
          let s = window.localStorage.getItem("item");
          s = data;
          window.localStorage.setItem("item", JSON.stringify(s));
        };
        reader.readAsText(file);
      }
      location.reload();
    },
    outfile(e) {
      let tmp = this.list.filter((i) => i.itemid != "add");
      str = JSON.stringify(tmp);
      var blob = new Blob([str]);
      e.target.children[0].href = URL.createObjectURL(blob);
      e.target.children[0].download = `chancoki_nav_${this.getCurrentDate()}_config.json`;
      e.target.children[0].click();
      this.isView = false;
    },
    btnclick() {
      this.$refs.file.click();
    },
    getCurrentDate() {
      var curDate = new Date();
      var curYear = curDate.getFullYear();
      var curMonth = curDate.getMonth() + 1;
      var curDay = curDate.getDate();
      var curHour = curDate.getHours();
      var curMinute = curDate.getMinutes();
      var curSec = curDate.getSeconds();
      return (
        curYear +
        "" +
        curMonth +
        "" +
        curDay +
        "" +
        curHour +
        "" +
        curMinute +
        "" +
        curSec
      );
    },
  },
  mounted() {
    this.addAdd();
  },
});
