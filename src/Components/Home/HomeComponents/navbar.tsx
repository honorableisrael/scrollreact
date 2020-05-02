import * as React from 'react';
import demoLogo from '../../../assets/clarity.png';
import SideNav from 'react-simple-sidenav';
import { Link } from 'react-router-dom';
import '../Home/animate.css';
import { NavIsLoggedOut } from './isloggedout';
import { NavIsLoggedIn } from './isloggedIn';


const Navbar:React.FC =()=>{
    const [state,setShowNav] = React.useState({showNav:false});
    const {showNav} = state
    const domRef = React.useRef('')

    const onDivClicked =()=>{
        // domRef.current.style.color = 'red'
    }
    
    return(
        <div>
            {/* mobile ends */}
             <div className="Navsection " >
                <div className="top-layer">
                {/* mobile */}
            <div className="lakk">
                <SideNav
                    style={{background: showNav?'rgba(0, 0, 0, 0.7)':'inherit'}}
                    navStyle={{width:'70%', background:'#131313'}}
                    showNav        =  {showNav}
                    onHideNav      =  {()=>setShowNav({showNav:true})}
                    titleStyle     =  {{backgroundColor: '#9c1258',color:'#444444',paddingLeft:10,paddingBottom:0,paddingTop:0,fontSize:17,textAlign:'left'}}
                    itemStyle      =  {{backgroundColor:'#131313',paddingLeft:25 }}
                    itemHoverStyle =  {{backgroundColor:'inherit'}}
                    title          = {[<div style={{display:'flex',justifyContent:'space-between',background:"#9c1258",padding:'3px 8px 15px 17px'}}>
                    <div className="hamburgerwrap">
                        <div className="hamburger" onClick={()=>setShowNav({showNav:!showNav?true:false})}>
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line2"></div>
                        </div>
                    </div>
                    </div>]}  
                    items  = {[
                        <div className={showNav?"listwraper animated fadeInLeft":"listwraper"}>
                            <div className="listwraperMob">Home</div>
                            <div className="listwraperMob">About</div>
                            <div className="listwraperMob">Faq</div>
                            <div className="listwraperMob">Privacy Policy</div>
                            <div className="listwraperMob"><div className="navmobbtn">Login</div></div>
                            <div className="listwraperMob"><div className="navmobbtn">Test</div></div>
                        </div>
                    ]}
                    />
                    <div className="hamburgerwrap">
                        <div className="hamburger" onClick={()=>setShowNav({showNav:!showNav?true:false})}>
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line2"></div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="nav-wrapper">
                    <div className="nav_title">
                        <div className="logo_clarity"><Link to="/"><img src={demoLogo} alt="clarity_logo"/></Link></div>
                    </div>
                    <div className="nav_title">
                    <span className="title">
                           <Link to="/">HOME</Link>
                    </span>
                    <span className="title">
                        <Link to="/about">ABOUT</Link>
                    </span>
                    <span className="title">
                        <Link to="/faq">FAQ</Link>
                    </span>
                        <NavIsLoggedOut/>
                        {/* <NavIsLoggedIn/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar