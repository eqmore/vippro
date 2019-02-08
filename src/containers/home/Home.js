import React from 'react';
import './home.css';
import '../../common/css/common.css';
import Carousel from '../../components/Swiper';
import Sectwo from './Sectwo';

const lists=[
    {photoUrl:"https://s.vipkidstatic.com/fe-static/parent/panda/web/plugs/homebanner/img/banner/banner1_81ac8067.png"},
    {photoUrl:"https://s.vipkidstatic.com/fe-static/parent/panda/web/plugs/homebanner/img/banner/banner3_7c3ecb3c.png"}
]
class Home extends React.Component{
    render(){
        return (
            <div style={{marginTop:"90px"}}>
              {/* <Carousel lists={lists} i={0}/> */}
              <Sectwo />
            </div>
        )
    }

}

export default Home;
