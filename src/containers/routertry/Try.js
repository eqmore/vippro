import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';


class TrySon extends Component {
    render() {
        console.log('render')
        return (
            <div>
                <div>topics</div>
                <Link to="/topics/a">a</Link>
                <Link to="/topics/b">b</Link>
                <Link to="/topics/c">c</Link>
                <Route path="/topics/:id" render={({match})=>{
                console.log(match.params.id)
                return (<div>{match.params.id}</div>)}}></Route>
            </div>
        );
    }
}


class Try extends Component {
    render() {
        return (
            <div style={{marginTop:'100px'}}>
                <Router>
                    <div>
                    <Link to="/try">try</Link>
                    <Link to="/list">list</Link>
                    <Link to="/topics">topics</Link>
                    <Switch>
                        <Route exact path='/try' render={()=>(<div>home</div>)}></Route>
                        <Route path='/list' render={()=>(<div>list</div>)}></Route>
                        <Route path='/topics' component={TrySon}>></Route>
                    </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Try;