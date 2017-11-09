import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Link
} from 'react-router-dom';


import {config} from '../config/app.config.jsx';
import  Auth from '../service/auth.service.jsx';


import Home from './home/home.component.jsx';
import About from './about/about.component.jsx';
import Contact from './contact/contact.component.jsx';
import  Footer from './footer/footer.component.jsx';
import Navigation from './navigation/navigation.component.jsx';
import Goods from './goods/goods.component.jsx';



const auth = new Auth();
class Routing extends Component {

    render() {
        return(
            <HashRouter>
            <div>
                <nav>
                    <Route exact path="/" component={Home} />
                    <Route path="/about"  component={About}/>
                    <Route path="/goods" component={Goods} />
                    <Route path="/contact" component={Contact} />
                </nav>
                <main>

                 </main>
                <Footer auth={auth}/>
            </div>
            
          </HashRouter>
        )
    }
}
export default Routing