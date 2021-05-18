const app = new Vue({
  el: '#app',
  data: {
    list: [
      {
        id : 1,
        name:'JQuery',
        url: 'https://jquery.cuishifeng.cn/index.html',
        icon:'https://jquery.cuishifeng.cn/favicon.ico'
      },
      {
        id : 2,
        name:'BootCDN',
        url: 'https://www.bootcdn.cn/',
        icon: 'https://www.bootcdn.cn/assets/ico/favicon.ico?1618753550044'
      },
      {
        id: 3,
        name:'Less',
        url: 'https://less.bootcss.com/',
        icon: 'https://less.bootcss.com/public/ico/favicon.ico'
      },
      {
        id: 4,
        name:'Bootatrap',
        url: 'http://docs.bootcss.com/bootstrap-2.3.2/docs/index.html',
        icon: 'http://docs.bootcss.com/bootstrap-2.3.2/docs/assets/ico/favicon.png'
      },
      {
        id: 5,
        name:'Axios',
        url: 'http://www.axios-js.com/zh-cn/docs/',
        icon: 'http://www.axios-js.com/icon/favicon-32x32.png'
      },
      {
        id: 6,
        name:'React',
        url: 'https://react.docschina.org/',
        icon: 'https://react.docschina.org/favicon.ico'
      },
      {
        id: 7,
        name:'NDM',
        url: 'https://developer.mozilla.org/zh-CN/docs/Web',
        icon: 'https://developer.mozilla.org/favicon-48x48.97046865.png'
      },
      {
        id: 8,
        name:'印记笔记',
        url: 'https://docschina.org/',
        icon: 'https://docschina.org/favicon.ico'
      },
      {
        id: 9,
        name:'TypeScript',
        url: 'https://www.tslang.cn/',
        icon: 'https://www.tslang.cn/assets/images/icons/favicon.ico'
      },
      {
        id: 10,
        name:'Sass',
        url: 'https://www.sass.hk/',
        icon: 'https://www.sass.hk/favicon.ico'
      },
      {
        id: 11,
        name:'npm',
        url: 'https://www.npmjs.com/',
        icon: 'https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png'
      },
      // {
      //   id: 12,
      //   name:'',
      //   url: '',
      //   icon: ''
      // },
    ]
  }
})
const nav = document.querySelector('.nav')
nav.addEventListener('click', e => {
  if (e.target.nodeName === 'IMG') {
    open(e.target.id)
  }
},true)
