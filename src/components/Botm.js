import React, { Component } from 'react';
import './botm.less';
import Buton from './Buton';
class Botm extends Component {
    render() {
        return (
            <div className="btom">
                {/*<img src="//s.vipkidstatic.com/fe-static/parent/panda/web/plugs/rightFixed/img/liutao_775e3f05.png" />*/}
                <span>免费领取价值288元试听课</span>
                <input type="text" placeholder="" />
                <Buton>立即领取</Buton>
                <button>X</button>
            </div>
        );
    }
}

export default Botm;