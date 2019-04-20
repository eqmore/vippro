import React from 'react'

import jsonp from '../../api/jsonp';

const css = {
  box: {
    height: '400px',
    border: '1px solid pink',
    overflowY: 'scroll',
  },
  imageBox: {
    width: '500px',
    height: '500px',
    margin: '20px auto',
  },
}
let imgs;
jsonp({url:'http://www.wookmark.com/api/json/popular'})
        .then(data=>{
            if(data.length){
                imgs = data;
                console.log(imgs);
            }
        }); 

const images = [] // 要加载的 img 图片（jsx）
const refs = [] // 图片的 ref（操作dom时用）

for (let i=0; i<4; i++) { // 添加4张待加载的图片
  const ref = React.createRef() // 新建空 ref
  refs.push(ref) // 放入 ref 数组
  images.push( // 新建 img jsx 放入 images （图片地址不放入 src 而是放入 自定义属性 data-src）
      <div style={css.imageBox} key={i}>
        <img ref={ ref } src="" data-src={`https://pschina.github.io/src/assets/images/1.jpg`}  />
      </div>
  )
}

const threshold = [0.01] // 这是触发时机 0.01代表出现 1%的面积出现在可视区触发一次回掉函数 threshold = [0, 0.25, 0.5, 0.75]  表示分别在0% 25% 50% 75% 时触发回掉函数

// 利用 IntersectionObserver 监听元素是否出现在视口
const io = new IntersectionObserver((entries)=>{ // 观察者
    console.log('callback')
  entries.forEach((item)=>{ // entries 是被监听的元素集合它是一个数组
    if (item.intersectionRatio <= 0 ) return // intersectionRatio 是可见度 如果当前元素不可见就结束该函数。
    const {target} = item
    console.log('src',target.dataset.src);
    target.src = target.dataset.src // 将 h5 自定义属性赋值给 src (进入可见区则加载图片)
  })
}, {
  threshold, // 添加触发时机数组
});

// onload 函数
const onload = ()=>{
  refs.forEach( (item) => {
      console.log('observe',item);
    io.observe(item.current) // 添加需要被观察的元素。
  } )
}

// 定义懒加载纯函数组件
// 为了监听页面加载完毕 定义了一个img 利用 onerror 函数替代 onlaod {src需填写一个不存在图片的路径}
const LazyLoadPage = ()=>(
  <div style={css.box}>
    {images}
    <img onError={onload} src="" />
  </div>
)

export default LazyLoadPage

// 作者：PsJan
// 链接：https://www.jianshu.com/p/6e8a76e8fab9
// 来源：简书
// 简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。