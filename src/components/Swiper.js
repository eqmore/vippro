import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import './swiper.css';
const Carousel = (props) => {
  console.log(props);
  let reactSwipeEl;
//   lists=[
//     {photoUrl:"https://s.vipkidstatic.com/fe-static/parent/panda/web/plugs/homebanner/img/banner/banner1_81ac8067.png"},
//     {photoUrl:"https://s.vipkidstatic.com/fe-static/parent/panda/web/plugs/homebanner/img/banner/banner3_7c3ecb3c.png"}
// ]
  return (
    <div className="home-swiper">
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true,auto:3000 }}
        ref={el => (reactSwipeEl = el)}
      >
        <div><img style={{width:"100%"}} src="https://s.vipkidstatic.com/fe-static/parent/panda/web/plugs/homebanner/img/banner/banner1_81ac8067.png"></img></div>
        <div><img  style={{width:"100%"}} src="https://s.vipkidstatic.com/fe-static/parent/panda/web/plugs/homebanner/img/banner/banner3_7c3ecb3c.png"></img></div>
      </ReactSwipe>
      <div className="dots">
      {
        props.lists.map((item,index)=>(
          <span onClick={()=>{reactSwipeEl.slide(index)}} key={index}
          className={index===props.i?"active":""}
          ></span>
      ))}
      </div>
      {/* <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button> */}
    </div>
  );
};

export default Carousel;

// class Carousel extends Component {
//     constructor(props) {
//         super(props);
//         this.state={index:0}
//     }
    
//     render() {
//         let opt={ continuous: true,auto:3000,
//         callback:(index)=>{this.setState({index});} }
//         return (
//             <div >
//                 <ReactSwipe className="carousel" swipeOptions={opt}>
//                 {
//                     this.props.lists.map((item,index)=>(
//                     <div key={index}><img style={{width:"100%"}}  src={item.photoUrl} /></div>
//                     ))
//                 } 
//                 </ReactSwipe>
//                 <div className="dots">
//                 {
//                     this.props.lists.map((item,index)=>(
//                     <span key={index} className={this.state.index===index?'active':''}>{index}</span>
//                     ))
//                 }
//                 </div>
//             </div>
            
//         );
//     }
// }

// export default Carousel;