// import React, { Component } from 'react';
// import Home from './Home';
// import './style.css';
// import './home.css';
// import './Formatting.css';
// import Userimage from '../users/images/user.png' 
// class Nav extends Component{
//     constructor(props){
//         super(props)
//         this.state={

//         }
//     }
//     render(){
//         return(
//             <div className="theme-red">
//                 <nav class="navbar"  >
//         <div class="container-fluid" style={{backgroundColor: "white",display:"flex",justifyContent:"end"}}>
//             <div class="navbar-header" style={{backgroundColor:""}}>
//                 <a href="javascript:void(0);" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"></a>
//                 <a href="javascript:void(0);" class="bars"></a>
//                 <button class="openbtn" onclick="openNav()">☰</button>
//                 <a class="navbar-brand" style={{color: "#17a2b8"}} href="">SpyBot</a>
//             </div>
        
//             <div class="collapse navbar-collapse" id="navbar-collapse"  style={{backgroundColor: "",display:"flex",justifyContent:"end"}}>
//                 <ul class="nav navbar-nav navbar-right" style={{backgroundColor:"green"}}>
//                     <li class="dropdown">
//                             <li>
//                                 <div class="image">
//                                     <img src={Userimage} width="48" height="48" alt="User" />
//                                 </div>
//                             </li>
//                             {/* <li class="nav-item dropdown">
//                                 <a id="navbarDropdown"  style={{color:"#17a2b8!important", fontSize: "inherit"}} class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
//                                 <span class="caret"></span>
//                                 </a> */}
 
//                                 {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown" style={{padding:"0px"}}>
//                                     <ul class="list-group m-0" style={{margin: "0px"}}>
//                                         <li class="list-group-item dropdown">                                    
//                                             <a class="dropdown-item" href=""
//                                                 onclick="event.preventDefault();
//                                                             document.getElementById('logout-form').submit();">
//                                                             <i class="fa fa-sign-out" aria-hidden="true"></i><span>
//                                                 Logout</span>
//                                             </a>
//                                             <form id="logout-form" action="" method="POST" style={{display: "none"}}>
//                                             </form> 
//                                         </li>
//                                         <li class="list-group-item dropdown" >
//                                             <a class="dropdown-item" href="#">
//                                                 <i class="fa fa-cog" aria-hidden="true"></i><span> Action</span>
//                                             </a>
//                                         </li>
//                                     </ul>
//                                 </div> */}
//                             {/* </li> */}
//                         {/* @endguest */}
//                     </li>
//                 </ul>   
//             </div>
//         </div>
//     </nav>
//     <section>
//         <aside id="mySidepanel" class="sidebar" >
//             <div class="menu">
//                 <ul class="list">
//                     <li class="active close-btn">
//                         <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
//                     </li>
//                     <li>
//                         <a href="/home">
//                             <i class="material-icons">home</i>
//                             <span>Home</span>
//                         </a>
//                     </li>
//                     <li class="">
//                         <a href="javascript:void(0);" class="menu-toggle">
//                             <i class="material-icons">watch_later</i>
//                             <span>Shift</span>
//                         </a>
//                         <ul class="ml-menu">
//                             <li>
//                                 <a href="/localuserShift">User Shift</a>
//                             </li>
//                             <li class="">
//                                 <a href="/uteamShift">Team Shift</a>
//                             </li>
//                         </ul>
//                     </li>
//                 </ul>
//             </div>
//             <div class="legal">
//                 <div class="copyright">
//                     &copy; 2020 <a href="javascript:void(0);">Boticx LLP- Spy Bot</a>.
//                 </div>
//                 <div class="version">
//                     <b>Version: </b> 1.0.1
//                 </div>
//             </div>
//         </aside>
//     </section>
//     <section class="content" style={{textAlign:"left"}} id="content">
//         <main class="py-4">
//             {/* <Home /> */}
//         </main>
//     </section>
    

//             </div>

//         )
//     }
// }

// export default Nav;