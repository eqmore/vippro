import React, { Component } from 'react';

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





class lazyload extends Component {
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }
    componentWillUpdate(){
        console.log('componentWillUpdate');//this.props还是未更新前的
    }

    componentDidUpdate(){
        console.log('');
        this.props.onloadfn();
        console.log('********************');
        console.log(this.props.onloadfn,this.props.images)
    }
    render() {
        return (
            <div style={css.box} id="root">
                {this.props.images}
                <img onError={this.props.onloadfn} src="" />
                <div>{this.props.onloadfn.toString()}</div>
            </div>
        );
    }
}

export default lazyload;





// 定义懒加载纯函数组件
// 为了监听页面加载完毕 定义了一个img 利用 onerror 函数替代 onlaod {src需填写一个不存在图片的路径}
/* const LazyLoadPage = ()=>(
  <div style={css.box}>
    {images}
    <img onError={onload} src="" />
  </div>
) */

// export default LazyLoadPage

// 作者：PsJan
// 链接：https://www.jianshu.com/p/6e8a76e8fab9
// 来源：简书
// 简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。