import React, { PureComponent } from 'react';
// import UserForm from './UserForm';
import Home from './Home';
import { Container, Row, Col, Card, CardDeck } from 'react-bootstrap';
import { Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Navbar, Nav } from 'react-bootstrap';
import CNavBar from './Navbar';
import OCTAVIALOGO from '../users/images/user-img-background.jpg'
import { Modal,ButtonToolbar,Button,Paragraph } from 'rsuite';
import './style.css';
import axios from 'axios'
import {connect} from 'react-redux';

// import Userplan from '../../plans/Userplan';
// import PlanModal from '../../Modals/PlanModal';
// import OCTAVIALOGO from '../image/Octavia_logo52.jpeg'
class User extends PureComponent {
    constructor(props) {
        // let login=false;
        super(props);


        this.state = {
            expanded: true,
            activeKey: '1',
            show:false,
            value:[],
            category:[],
            total_idle:[],
            active_time:[],
            
        };

        this.CNavBarHandler = this.CNavBarHandler.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);

    }

    componentWillMount(){
        console.log('component')
        axios.get('/user/idletime')
        .then(res=>{
            console.log('data',res.data.data)
                this.setState({
            value:res.data.data
            })
        })
        axios.get('/user/category')
        .then(res=>{
            this.setState({
                category:res.data.data
                }) 
       })
    }

    componentWillReceiveProps() {
        this.setState({
        toShow: this.props.toShowLoader
        })
        }

    CNavBarHandler(val) {
        this.setState({
            expanded: val
        })
    }

    close() {
        this.setState({ show: false });
    }
    open() {
        this.setState({ show: true });
    }

    // logout(){
    //     this.props.Logout()
    // }

    render() {
        const lengthIdle = this.state.value.length;
        var TotalIdle = 0
        var TotalActive = 0
        for(var i=0;i<lengthIdle;i++){
            TotalIdle = TotalIdle + parseInt(this.state.value[i].total_idle);
            TotalActive = TotalActive + parseInt(this.state.value[i].active_time)
        }
        const { backdrop, show } = this.state;
        return (
            <div >
                <Row>
                    <Navbar fixed="top" style={{ backgroundColor: "#074d82", justifyContent: "flex-end", color: "white" }} expand="lg" >
                        <div style={{ paddingLeft: "10px" }} >
                            <Link to="/" style={{ color: "white" }}>
                                {/* <img style={{ height: "30px" }} src={OCTAVIALOGO}>

                                </img> */}
                            </Link></div>
                            {/* <div style={{fontSize:"1.3rem"}}>Admin</div> */}
                        <div style={{ paddingRight: "10px", display: 'flex' }} >
                            <div style={{ padding: "6px 10px", }} onClick={()=>{this.props.Logout();localStorage.clear();this.props.history.push('/login')}} >
                                Logout
                </div>
                            <AccountCircleIcon fontSize="large"></AccountCircleIcon>
                        </div>
                    </Navbar>
                </Row>
                <Row style={{ marginTop: '55px' }} >
                    {this.state.expanded ?
                        <Col xs={2} md={2} style={{ transition: "all .6s ease 0s ", height: "100vh", padding: '0px', backgroundColor: "white" }}>
                            <CNavBar expanded={this.state.expanded} activeKey={this.state.activeKey} CNavBarHandler={this.CNavBarHandler} />
                        </Col> :
                        <Col xs={2} md={2} style={{ transition: "all .6s ease 0s ", maxWidth: "56px", height: "100vh", padding: '0px', backgroundColor: "white" }}>
                            <CNavBar expanded={this.state.expanded} activeKey={this.state.activeKey} CNavBarHandler={this.CNavBarHandler} />
                        </Col>

                    }
                    <Col>
                    <section class="content" style={{textAlign:"left",paddingLeft:'8px'}} id="content">
            <Home data={{idle:TotalIdle,active:TotalActive,Category:this.state.category}}/>
        
    </section>
                    </Col>
                </Row>


            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
      Logout:()=>{dispatch({type:"LOGOUT"})},
    }
  }
  
export default connect(null,mapDispatchToProps)(User);
