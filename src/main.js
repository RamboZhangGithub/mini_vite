import { sayVite } from './try.js'// 发起一个http请求获取模块
import {createApp} from 'vue' // 转化成浏览器支持的，并且去node_modules拉取内容
import App from './App.vue'
import './index.css'
/**
 * 
 * vite
 * 开发的时候不需要打包
 * webpack需要打包放到内存里之后才能启动dev-server（这也是为什么很多项目dev启动需要很长时间）
 * vite是开发体验（代表未来），打包依然走的是rollup
 * 
 *  增加了
 * .vue 单文件组件的支持（浏览器办不到）
 * 热更新hmr
 * 预打包
 */

console.log('====================================');
console.log(createApp);
console.log('====================================');
sayVite();

// const vm = createApp({
//     data(){
//         num:1
//     }
// })

// console.log('====================================');
// console.log(vm);
// console.log('====================================');

createApp(App).mount('#app')
