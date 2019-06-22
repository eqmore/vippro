import React, { Component } from 'react';

import {getPullsAPI} from '../../api/pull';
import jsonp from '../../api/jsonp';

import './pull.css';

import LazyLoadPage from './lazyload.js';

import {a} from './test.js';

import InfinateScroll from '../../components/InfinateScroll';

a();
class Pull extends Component {
    constructor(){
        super();
        this.state ={
            data:[],
            winW:window.innerWidth,
            winPageYOff:window.pageYOffset,
            onloadfn:()=>{console.log('onerror')},
            images:[]
        }
    }

    componentDidMount(){
        // jsonp({url:'http://www.wookmark.com/api/json/popular'})
        // .then(data=>{
        //     if(data.length){
        //         console.log(this.state);
        //         this.setState({...this.state,data});
        //     }
        // }); 
        
        const images = [] // 要加载的 img 图片（jsx）
        const refs = [] // 图片的 ref（操作dom时用）
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
        let onloadfn;
        // jsonp({url:'http://www.wookmark.com/api/json/popular'})
        // jsonp({url:'./data.json'})
        fetch('/data.json')
        .then(function(response) {
            return response.json();
          })
        .then(data=>{
            console.log(data);

            for (let i=0; i<data.length; i++) { // 添加4张待加载的图片
                const ref = React.createRef() // 新建空 ref
                refs.push(ref) // 放入 ref 数组
                images.push( // 新建 img jsx 放入 images （图片地址不放入 src 而是放入 自定义属性 data-src）
                    <div style={css.imageBox} key={i}>
                    <img ref={ ref } src="" data-src={data[i].image}  width={'500px'} height={'500px'}/>
                    </div>
                )
            }
            console.log(refs,images);
            this.setState({...this.state,images});

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
            onloadfn = ()=>{
                console.log('onload');
            refs.forEach( (item) => {
                // console.log('observe',item);
            io.observe(item.current) // 添加需要被观察的元素。
            // console.log(io);
            } )
            
            }

            this.setState({...this.state,onloadfn},()=>{
                console.log(this.state.onloadfn)
            })

            
            
        
        })

        let that = this;
        window.addEventListener('resize',function(){
            console.log('resize');
            that.setState({...that.state,winW:window.innerWidth})
        })

        //window.addEventListener('scroll',this.lazyLoad)
    }

    lazyLoad=()=>{
        let ul = this.ulref.current;
        let lis = ul.getElementsByTagName("li");
        if(lis.length === 0) return;
        console.log(ul,lis);
        lis.forEach(li=>{
            console.log(li)
            if(li.getBoundingRect().top< this.state.winW){
                console.log(li.getAttribute("data-origin"));
                li.setAttribute("src",li.getAttribute("data-origin")) ;
            }
        })
    }


    render() {
        console.log('render');
        let iH = window.innerHeight;
        let imageW = 178;
        let marginLeft = 10;
        let actualW = imageW + marginLeft;
        let count = Math.floor((window.innerWidth +marginLeft) /actualW);
        let arrL=[];
        let arrT=[];
        for(let i =0;i<count;i++){
            arrT[i] = 90;
            arrL[i]=i*actualW;
        }
        let list =this.state.data.map((d)=>{
            if(d.width==0) return;
            let h = Math.round(178/d.width*d.height);
            let minT = Math.min(...arrT);
            let pos = arrT.indexOf(minT);
            let t =arrT[pos];
            arrT[pos] += h+15;
            // console.log(d.width,d.height,h,arrL[pos],t);
            return (<li key={d.id} style={{top:`${t}px`,left:`${arrL[pos]}px`}}>
                <img key={d.id} alt={d.title} src="" _src={d.image} data-origin={d.image} width={`${imageW}px`} height={`${h}px`} />
            </li>)

        })
        return (
            <div>
            {/* <LazyLoadPage images={this.state.images} onloadfn={this.state.onloadfn}/> */}
            {/* <ul ref={this.ulref}> */}
               {/* {list} */}
               {/* <li><img src="http://www.wookmark.com/images/original/675681_wookmark.jpg" alt=""/></li> */}
               
            {/* </ul> */}
            <InfinateScroll />
            </div>
        );
    }
}

export default Pull;