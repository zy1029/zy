import React,{Component} from 'react'
import {Link,NavLink} from 'react-router-dom';
class Home extends Component {
    render(){
        return(
            <ul id="footerItem" >
                        <li >
                            <div className="glyphicon glyphicon-home footerItemPage"></div><NavLink to="/">主页</NavLink></li>
                        <li ><div className="glyphicon glyphicon-shopping-cart footerItemPage"></div><NavLink to="/Goods">商城</NavLink></li>
                        <li ><div className="glyphicon glyphicon-heart footerItemPage"></div><NavLink to="/Contact">收藏</NavLink></li>
                        <li ><div className="glyphicon glyphicon-user footerItemPage"></div><NavLink to="/About">关于</NavLink></li>
                    </ul>
        )
    }
    
}

export default Home