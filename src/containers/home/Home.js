import React from 'react';
import './home.css';
import '../../common/css/common.css';
import Carousel from '../../components/Swiper';
import Sectwo from './Sectwo';
import FullVideo from '../../components/Fullvideo';
import Botm from '../../components/Botm';

import {connect} from 'react-redux';
import actions from '../../store/action/home.js';



/* const lists=[
    {photoUrl:"https://s.vipkidstatic.com/fe-static/parent/panda/web/plugs/homebanner/img/banner/banner1_81ac8067.png"},
    {photoUrl:"https://s.vipkidstatic.com/fe-static/parent/panda/web/plugs/homebanner/img/banner/banner3_7c3ecb3c.png"}
] */
class Home extends React.Component{

    componentDidMount(){
        this.props.getSliders();
        console.log(this.props.lists.length);
    }
    render(){
        console.log(this.props);
        return (
            <div style={{marginTop:"90px"}}>
                {
                    this.props.lists.length===0?null: <Carousel lists={this.props.lists} i={0}/>
                }
             
              <Sectwo />
              <FullVideo />
              {/* <Botm /> */}
            </div>
        )
    }

}

export default connect(state=>state.home,actions)(Home);
