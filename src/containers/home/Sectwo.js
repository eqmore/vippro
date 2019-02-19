import React, { Component } from 'react';
import './sectwo.css';
// import '../../common/css/bootstrap.css';

import actions from '../../store/action/sectwo';

import {connect} from 'react-redux';

class Sectwo extends Component {
    play= () =>{
        // console.log(this.props)
        // var screenHeight=window.innerHeight;//document.documentElement.clientHeight;
        // var screenWidth=window.innerWidth;//document.documentElement.clientWidth;
        // // var body=document.getElementsByTagName("body")[0];
        // var body=document.getElementsByClassName('fullvideo')[0];
        // // var body=document.getElementById("root");
		// body.style.width=screenWidth+"px";
        // body.style.height=screenHeight+"px";
        // console.log(body);
        this.props.playaudio("block");
        
    }
    render() {
        console.log(this.props);
        return (
            <div className="sectwo center">
            {/* <div className="box1"></div> */}
            <ul className="box">
                <li className="col-6">
                    <div className="box1">
                        <img className="card" src="https://s.vipkidstatic.com/fe-static/parent/panda/web/home/img/section02/section2_79ed7d51.png" alt=""/>
                    </div>
                    <div className="mask f">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAAV1BMVEVMaXH5VRX6Vxf5VRb5VRX5VRb/aCP5VRX5VRX5Vhj9VRr7VRb4VRX5VBX7Vhf/XBz6VRX4Vhf4Vhb4VBX////8uqH92Mr6imD5dUH4ZS37n3v+9/T+7OWDZsHpAAAAE3RSTlMA7CydxIUH/LL5IEXj1jcSXk10bzb2/wAAA2tJREFUeNrlXNmS4yAMBHPaxkkcEc+1//+d+zBHzU4yiS2E6artL+iCRheSlCqAH+azidFOSfe9TpON0ZznwasG8KOLU6CbCFN0o9+XjP2FyzdWdidS/hR7Wok+nmpzGs1qNh+czFiPzeASMZDcUIVOZwIxEUwnTyey6RARhShL6RCpGPEgRudoAgkgmKMMn5MmIeiThHgsCcIWS8kFEkVwZZbHkjhsgVUaNVWA5tpu76gSHMvDHS1Vg2UYgGGiipg2C6lLVBVp4/s/aKoMvcmTzD1VRz9v4BNoB4TVjA497YJ+5a11mnaCXqXsIdFuSCte/3GiHTE9tJDe0q6wj7yIo53xIBwZaXfc9f2D3p+QvidsSw1ggQT0QEZdaEModEgXdufSTtQMN/O1o25HSN8y2IYawtyIOUJLQuE6EonUFPHqyVNjdFgHdHVEXWhN6Id1NNQc/zy0IbQnFIb2XvV3H5sQCKWmceL92JEn6efXy1OoImvPylQvOef850kyk/UlccdTfsflRT4KYVnp5YNQfnuVtta8G3vLX1ieZe+M98byd1x6yXfmyglJidsVxPb5B0TEbZVSygcRQiLiDp5vpvM1BMQ98h1rvoVicTt+rHiTULG4o1JqkiRUKu6JrelfCZWJO3g1kDChMnEPapYnVCLuWZ1rEOKL+8zON/IDMMVt2BniI0JMccd6hHjijuyyWV6D7eK2XLu4jlBeXjZbxlSVUL5sNIxJ6bqE8sYj0qqvTGijsPvqhF62EtJQGiJdWdTL1gtIdZ/9djs01TSMHEtt/x9ftvC8fawUfrDjIVMnQONHjOcaIWxJTD3LB/llKfUgngYtRXlZ8MKJYmnmOgmn0sW5fRQtNghUP5xgOUak+DnKFawWiQpa8FIlPaEao5UqekpVYV1BWbhGnfqjLMwrnNeo5H9+drAs0aukmL9ZIX7Th/xv0NfnC+/O5P/Lvr6nEP6k34Mz2C9OuE9gvG9yuEYCuFYLvGYUuHYdvIYmuJYvvKY4uLZBvMZKuNZTvOZcvPZluAZvvBZ4vCEBuDEKvEETvFEcuGElvHEuvIE3vJFAvKFJvLFSvMFbvNFkvOFtvPF2vAUAeCsSAJdI4K3ZAFxEgreqBXCZDd66H8CFSIArowCXagGuHUNczAa4ug5xuV/V9Yd/ATI3t6mq9tm3AAAAAElFTkSuQmCC"
                        data-video="https://image.vipkid.com.cn/market/file/1539597232057-video-liutao.mp4"
                        onClick={this.play }
                        />
                    </div>
                    <div className="mask">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAAWlBMVEVMaXH7+/v7+/v9/f37+/v7+/v////7+/v7+/v////////6+vr7+/v7+/v8/Pz7+/v8/Pz8/Pz6+vr7+/v6+vr4VBX5pob4YSf5xK/5dkP62s766eL5iFz68/CriXpqAAAAFHRSTlMApkUyxIUH+eokFdq4mE2yYF3SdJ9z9zMAAANWSURBVHjazVzZkuIwDMxhxw65IMgMzAz//5v7AMNSXIllKel+T1WX3ZFkXVmWgKru913emrHxzvlmNG3e7fu6ylZAVdihcfQSrhlsUS1LxrzhcsfKLESq2rWTZG6k2p02pyKfzebKKS/02NTWEwPe1jp0Yg/n/pjkKZU5JSEvZekMlIxBjtKmIxF0Gxk+W09C8FuJ2zIkCJN8b9aRKJxNU48hcZgEJRWeFOC5truypARboVxXyrXVDSmiifYlpSdV+BKLTyyj3pE6XI/FJ4ZRuQgfIlei6CdOR/VifIj8jL9/09CCaCYtZGVoUZgpL2JpYUyEIwUtjo++f+OXJ+Q/ycjQCjBAApqQ0VIWerbFNrQS3lzallbDFuUP+/indbQiuheKplXxrOthXUID2AE9H1G+NqH8ISqj1VFjHdDDEdVufUKuXt+rvvexHoGQXzVO/Bw78iT9fTgczyqyrliSPoQQwtdRUtZ/L5Ad5+tjuOD3R47R7kqo5Xx8uhIKXwcxQm3KjYX/OH3L3hnvHwv3OJwl/zObTkhK3DYhtg8PEBG34UvoiZCIuF3FN9PhGQLiLviONbxCsrgtP5h+SShZ3EOWZY0koVRxN2xNvyWUJm5XsaPp8B4p4q6zXp5Qirj7bK9BiC/uPftJHybAFHfHfgBNEWKKO+cFQ3MI8cTdstNmYQ7ixW2yUZNQOMUqaeQa6pmEwm+0qfa6hELkEfnMKROKFLZTJ/QTS8hjacgri/p0jhb1iGWHRk3DyLHURs918HxZq+Zcmd4+Vwo/2PFQpxOg8SPGvUYImxJT9/JBftqTuhZ/BqW9y1wl/FBMfbk2wk/p5Lf9IJpsEMh+WMF0jEjys5BLWIlk0C5ZT4mUnlCO0UglPaWysFYmLSyWp76mhXki0sjk/xU7WCGRRq2jTSm+KFSDbsUX5o8vXi+7lacQatKXaBG2xAlXBMYrk8M1EsC1WuA1o8C16+A1NMG1fOE1xcG1DeI1VsK1nuI15+K1L8M1eOO1wOMNCcCNUeANmuCN4sANK+GNc+ENvOGNBOINTeKNleIN3uKNJuMNb+ONt+MtAMBbkQC4RAJvzQbgIhK8VS2Ay2zw1v0ALkQCXBkFuFQLcO0Y4mI2wNV1iMv9VNcf/gNxM/adlUVHuwAAAABJRU5ErkJggg=="/>    
                    </div>     
                    
                </li>
                <li className="col-6">
                    <img className="colon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABgCAMAAADYWPdNAAAAOVBMVEVMaXH/xxb/yBf/zBv/yBf/xxb/2Sj/xxf/yBj/xxb/xxb/xxb/yBj/xxb/yBj/yBf/xxf/xxb/xhbTG17wAAAAEnRSTlMA3VQWh/UHpCC7zOoyfUNmc68ZUEmRAAACG0lEQVRo3u2Y23aEMAhFE3M1GUfl/z+2Y6ftqhXiCa8Nz7A2gROCGtM253ejtak8MEfnA9GkhRAVxDEuLwiRjQrIoxyhtALpWHrb0g1x6Su0uhvPPNO3hdxJWcNPrIc9ifpU8CvBl7VU4E6eRE/dUQ6bG/2zZ0qHCmL6EyoL9U8+h21owcoltAopXvI5VOAwGVcm1mOn/rSEUJ6BjWWEGmfiDVDBxFMYFYgUKrcqmKTQiwriLrreqkCoGCfUJFPuVPAIjdjzuFoanmSbU93VVoYnsT1bkPZzEEsjNp2kluWE7HojgIRCjJET8lEtskupxcbU2ysjNyZFVCnz/ZyRrkG4NrRAWuwqmc2wK0CJVqA42BVZAzaYIvUfoQj9t9xcrvrpz2dYM3xu6GkWMpzgJgZoNV3xOkyqyf82i7bfmBl789hXBn9qHeuKbfPszNxx4WOHiQHPsChXDKmrfIZOfxi+Zk9ckuDWXPEMuTFuwY8l9Ga+LKALKThoHJ4RWLMdrxnXmhD1rdlwsSSMksHFXLo14Dc6d2ukb/SAZ4QoIOEHD0Z/OTd8xBYQU3CNrnoF9NTbKzeNYzx31DvphZY76r2rXzR2fqSONmb9tUkdKwP2E4BVj+8YS1GPWXAMeju3jq2L0X41+lkj/Q7UP50sZsIxYb7aAt7swsQ6HoMuxR6MzQMzMAMzMAMzMAMzMAMzMAMzMAMzMAPznzEf0dmBZdeyRzwAAAAASUVORK5CYII=" alt=""/>
                    <h4>刘涛倾力推荐</h4>
                    <p>VIPKID严选北美好外教，让孩子口音更纯正，用孩子喜欢的方式，激发更多自信表达，每时每刻关注成长，学会更多拥有更多，让世界没有边界</p>
                </li>
            </ul>
            <ul className="clearfix box">
                <li className="col-6">
                    <img className="colon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABgCAMAAADYWPdNAAAAOVBMVEVMaXH/xxb/yBf/zBv/yBf/xxb/2Sj/xxf/yBj/xxb/xxb/xxb/yBj/xxb/yBj/yBf/xxf/xxb/xhbTG17wAAAAEnRSTlMA3VQWh/UHpCC7zOoyfUNmc68ZUEmRAAACG0lEQVRo3u2Y23aEMAhFE3M1GUfl/z+2Y6ftqhXiCa8Nz7A2gROCGtM253ejtak8MEfnA9GkhRAVxDEuLwiRjQrIoxyhtALpWHrb0g1x6Su0uhvPPNO3hdxJWcNPrIc9ifpU8CvBl7VU4E6eRE/dUQ6bG/2zZ0qHCmL6EyoL9U8+h21owcoltAopXvI5VOAwGVcm1mOn/rSEUJ6BjWWEGmfiDVDBxFMYFYgUKrcqmKTQiwriLrreqkCoGCfUJFPuVPAIjdjzuFoanmSbU93VVoYnsT1bkPZzEEsjNp2kluWE7HojgIRCjJET8lEtskupxcbU2ysjNyZFVCnz/ZyRrkG4NrRAWuwqmc2wK0CJVqA42BVZAzaYIvUfoQj9t9xcrvrpz2dYM3xu6GkWMpzgJgZoNV3xOkyqyf82i7bfmBl789hXBn9qHeuKbfPszNxx4WOHiQHPsChXDKmrfIZOfxi+Zk9ckuDWXPEMuTFuwY8l9Ga+LKALKThoHJ4RWLMdrxnXmhD1rdlwsSSMksHFXLo14Dc6d2ukb/SAZ4QoIOEHD0Z/OTd8xBYQU3CNrnoF9NTbKzeNYzx31DvphZY76r2rXzR2fqSONmb9tUkdKwP2E4BVj+8YS1GPWXAMeju3jq2L0X41+lkj/Q7UP50sZsIxYb7aAt7swsQ6HoMuxR6MzQMzMAMzMAMzMAMzMAMzMAMzMAMzMAPznzEf0dmBZdeyRzwAAAAASUVORK5CYII=" alt=""/>
                    <h4>纯北美优质外教</h4>
                    <p>爱孩子、懂教育，让孩子拥有更多选择，激发孩子的探索欲，打造个性化学习，让孩子爱上英语</p>
                </li>
                <li className="col-6">
                    <div className="box1">
                    <img className="card" src="https://s.vipkidstatic.com/fe-static/parent/panda/web/home/img/section02/section1_2cdacbd7.png"/>
                    </div>
                    <div className="mask">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAAWlBMVEVMaXH7+/v7+/v9/f37+/v7+/v////7+/v7+/v////////6+vr7+/v7+/v8/Pz7+/v8/Pz8/Pz6+vr7+/v6+vr4VBX5pob4YSf5xK/5dkP62s766eL5iFz68/CriXpqAAAAFHRSTlMApkUyxIUH+eokFdq4mE2yYF3SdJ9z9zMAAANWSURBVHjazVzZkuIwDMxhxw65IMgMzAz//5v7AMNSXIllKel+T1WX3ZFkXVmWgKru913emrHxzvlmNG3e7fu6ylZAVdihcfQSrhlsUS1LxrzhcsfKLESq2rWTZG6k2p02pyKfzebKKS/02NTWEwPe1jp0Yg/n/pjkKZU5JSEvZekMlIxBjtKmIxF0Gxk+W09C8FuJ2zIkCJN8b9aRKJxNU48hcZgEJRWeFOC5truypARboVxXyrXVDSmiifYlpSdV+BKLTyyj3pE6XI/FJ4ZRuQgfIlei6CdOR/VifIj8jL9/09CCaCYtZGVoUZgpL2JpYUyEIwUtjo++f+OXJ+Q/ycjQCjBAApqQ0VIWerbFNrQS3lzallbDFuUP+/indbQiuheKplXxrOthXUID2AE9H1G+NqH8ISqj1VFjHdDDEdVufUKuXt+rvvexHoGQXzVO/Bw78iT9fTgczyqyrliSPoQQwtdRUtZ/L5Ad5+tjuOD3R47R7kqo5Xx8uhIKXwcxQm3KjYX/OH3L3hnvHwv3OJwl/zObTkhK3DYhtg8PEBG34UvoiZCIuF3FN9PhGQLiLviONbxCsrgtP5h+SShZ3EOWZY0koVRxN2xNvyWUJm5XsaPp8B4p4q6zXp5Qirj7bK9BiC/uPftJHybAFHfHfgBNEWKKO+cFQ3MI8cTdstNmYQ7ixW2yUZNQOMUqaeQa6pmEwm+0qfa6hELkEfnMKROKFLZTJ/QTS8hjacgri/p0jhb1iGWHRk3DyLHURs918HxZq+Zcmd4+Vwo/2PFQpxOg8SPGvUYImxJT9/JBftqTuhZ/BqW9y1wl/FBMfbk2wk/p5Lf9IJpsEMh+WMF0jEjys5BLWIlk0C5ZT4mUnlCO0UglPaWysFYmLSyWp76mhXki0sjk/xU7WCGRRq2jTSm+KFSDbsUX5o8vXi+7lacQatKXaBG2xAlXBMYrk8M1EsC1WuA1o8C16+A1NMG1fOE1xcG1DeI1VsK1nuI15+K1L8M1eOO1wOMNCcCNUeANmuCN4sANK+GNc+ENvOGNBOINTeKNleIN3uKNJuMNb+ONt+MtAMBbkQC4RAJvzQbgIhK8VS2Ay2zw1v0ALkQCXBkFuFQLcO0Y4mI2wNV1iMv9VNcf/gNxM/adlUVHuwAAAABJRU5ErkJggg=="/>    
                    </div>
                    <div className="mask">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAAV1BMVEVMaXH5VRX6Vxf5VRb5VRX5VRb/aCP5VRX5VRX5Vhj9VRr7VRb4VRX5VBX7Vhf/XBz6VRX4Vhf4Vhb4VBX////8uqH92Mr6imD5dUH4ZS37n3v+9/T+7OWDZsHpAAAAE3RSTlMA7CydxIUH/LL5IEXj1jcSXk10bzb2/wAAA2tJREFUeNrlXNmS4yAMBHPaxkkcEc+1//+d+zBHzU4yiS2E6artL+iCRheSlCqAH+azidFOSfe9TpON0ZznwasG8KOLU6CbCFN0o9+XjP2FyzdWdidS/hR7Wok+nmpzGs1qNh+czFiPzeASMZDcUIVOZwIxEUwnTyey6RARhShL6RCpGPEgRudoAgkgmKMMn5MmIeiThHgsCcIWS8kFEkVwZZbHkjhsgVUaNVWA5tpu76gSHMvDHS1Vg2UYgGGiipg2C6lLVBVp4/s/aKoMvcmTzD1VRz9v4BNoB4TVjA497YJ+5a11mnaCXqXsIdFuSCte/3GiHTE9tJDe0q6wj7yIo53xIBwZaXfc9f2D3p+QvidsSw1ggQT0QEZdaEModEgXdufSTtQMN/O1o25HSN8y2IYawtyIOUJLQuE6EonUFPHqyVNjdFgHdHVEXWhN6Id1NNQc/zy0IbQnFIb2XvV3H5sQCKWmceL92JEn6efXy1OoImvPylQvOef850kyk/UlccdTfsflRT4KYVnp5YNQfnuVtta8G3vLX1ieZe+M98byd1x6yXfmyglJidsVxPb5B0TEbZVSygcRQiLiDp5vpvM1BMQ98h1rvoVicTt+rHiTULG4o1JqkiRUKu6JrelfCZWJO3g1kDChMnEPapYnVCLuWZ1rEOKL+8zON/IDMMVt2BniI0JMccd6hHjijuyyWV6D7eK2XLu4jlBeXjZbxlSVUL5sNIxJ6bqE8sYj0qqvTGijsPvqhF62EtJQGiJdWdTL1gtIdZ/9djs01TSMHEtt/x9ftvC8fawUfrDjIVMnQONHjOcaIWxJTD3LB/llKfUgngYtRXlZ8MKJYmnmOgmn0sW5fRQtNghUP5xgOUak+DnKFawWiQpa8FIlPaEao5UqekpVYV1BWbhGnfqjLMwrnNeo5H9+drAs0aukmL9ZIX7Th/xv0NfnC+/O5P/Lvr6nEP6k34Mz2C9OuE9gvG9yuEYCuFYLvGYUuHYdvIYmuJYvvKY4uLZBvMZKuNZTvOZcvPZluAZvvBZ4vCEBuDEKvEETvFEcuGElvHEuvIE3vJFAvKFJvLFSvMFbvNFkvOFtvPF2vAUAeCsSAJdI4K3ZAFxEgreqBXCZDd66H8CFSIArowCXagGuHUNczAa4ug5xuV/V9Yd/ATI3t6mq9tm3AAAAAElFTkSuQmCC"
                        data-video="https://image.vipkid.com.cn/market/file/1539597232057-video-liutao.mp4"
                        />
                    </div>
                </li>
            </ul>

        </div>
        );
    }
}

export default connect((state)=>({...state.sectwo}),actions)(Sectwo);