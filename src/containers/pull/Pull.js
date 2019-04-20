import React, { Component } from 'react';

import {getPullsAPI} from '../../api/pull';
import jsonp from '../../api/jsonp';

import './pull.css';

import LazyLoadPage from './lazyload.js';

import {a} from './test.js';

a();
class Pull extends Component {
    constructor(){
        super();
        this.state ={
            data:[],
            winW:window.innerWidth,
            winPageYOff:window.pageYOffset
        }
    }

    componentDidMount(){
        jsonp({url:'http://www.wookmark.com/api/json/popular'})
        .then(data=>{
            if(data.length){
                console.log(this.state);
                this.setState({...this.state,data});
            }
        });    
        let that = this;
        window.addEventListener('resize',function(){
            console.log('resize');
            that.setState({...that.state,winW:window.innerWidth})
        })

        window.addEventListener('scroll',this.lazyLoad)
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
            <LazyLoadPage />
            <ul ref={this.ulref}>
               {/* {list} */}
               {/* <li><img src="http://www.wookmark.com/images/original/675681_wookmark.jpg" alt=""/></li> */}
               
            </ul>
            </div>
        );
    }
}

export default Pull;