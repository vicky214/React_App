import React, { PureComponent } from 'react';
// import UserForm from './UserForm';
// import Home from './Home';
import { Container, Row, Col, Card, CardDeck } from 'react-bootstrap';
import { Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Navbar, Nav } from 'react-bootstrap';
import CNavBar from '../../layout/Navbar';
// import OCTAVIALOGO from '../users/images/user-img-background.jpg'
import { Modal,ButtonToolbar,Button,Paragraph } from 'rsuite';
import '../../layout/style.css';
import axios from 'axios';
import Chart from './LicenseChart'
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
            user:[],
            license:[],

        };


        this.CNavBarHandler = this.CNavBarHandler.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);

    }

    componentWillMount(){
        axios.get('/admin/getalluser')
        .then(res=>{
            console.log('data',res.data.data)
                this.setState({
            user:res.data.data
            })
        })
        axios.get('/admin/getlicense')
        .then(res=>{
            console.log('license',res.data.data)
            this.setState({
                license:res.data.data
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

    render() {
        var len = this.state.user.length;
        var Activeuser=0
        for (var i=0;i<len;i++){
            if((this.state.user[i].status).toLowerCase()=='active'){
                Activeuser = Activeuser + 1
            }
        }

        var licenseLength= this.state.license.length
         var total_licenses = 0
        for (var j=0;j<licenseLength;j++){
                total_licenses = this.state.license[j].total_license
        }


        const { backdrop, show } = this.state;
        return (
            <div >
                <Row>
                    <Navbar fixed="top" style={{ backgroundColor: "#074d82", justifyContent: "flex-end", color: "white" }} expand="lg" >
                        <div style={{ paddingLeft: "10px" }} >
                            <Link to="/" style={{ color: "white" }}>
                                {/* <img style={{ height: "30px" }} src={OCTAVIALOGO}> */}

                                {/* </img> */}
                            </Link></div>
                            {/* <div style={{fontSize:"1.3rem"}}>Admin</div> */}
                        <div style={{ paddingRight: "10px", display: 'flex' }} >
                            <div style={{ padding: "6px 10px", }} >
                                Logout
                </div>
                            <AccountCircleIcon fontSize="large"></AccountCircleIcon>
                        </div>
                    </Navbar>
                </Row>
                <Row style={{ marginTop: '56px' }} >
                    {this.state.expanded ?
                        <Col xs={2} md={2} style={{ transition: "all .6s ease 0s ", height: "100vh", padding: '0px', backgroundColor: "white" }}>
                            <CNavBar expanded={this.state.expanded} activeKey={this.state.activeKey} CNavBarHandler={this.CNavBarHandler} />
                        </Col> :
                        <Col xs={2} md={2} style={{ transition: "all .6s ease 0s ", maxWidth: "56px", height: "100vh", padding: '0px', backgroundColor: "white" }}>
                            <CNavBar expanded={this.state.expanded} activeKey={this.state.activeKey} CNavBarHandler={this.CNavBarHandler} />
                        </Col>

                    }
                    <Col>
                    <section class="content">

                    <div class="container-fluid">
    <div class="block-header">
        <h2 style={{textAlign:"left"}}>DASHBOARD</h2>
    </div>


    <div class="row clearfix">
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="info-box">
                <div class="icon bg-red">
                    <i class="material-icons">people</i>
                </div>
                <div class="content">
                    <div class="text">TOTAL USERS</div>
                <div class="number count-to" data-from="0" data-to="17" data-speed="15" data-fresh-interval="20"><small>{len}</small></div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="info-box">
                <div class="icon bg-cyan">
                    <i class="material-icons">notifications_active</i>
                </div>
                <div class="content">
                    <div class="text">ACTIVE USERS</div>
                    <div class="number count-to" data-from="0" data-to="{{$active_user}}" data-speed="1000" data-fresh-interval="20"><small>{Activeuser}</small></div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="info-box">
                <div class="icon bg-light-green">
                    <i class="material-icons">playlist_add_check</i>
                </div>
                <div class="content">
                    <div class="text">Total License</div>
                    <div class="number count-to" data-from="0" data-to="{{$no_of_licenses}}" data-speed="1000" data-fresh-interval="20"><small>{total_licenses}</small></div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="info-box">
                <div class="icon bg-orange">
                    <i class="material-icons">vpn_key</i>
                </div>
                <div class="content">
                    <div class="text">Used License</div>
                    <div class="number count-to" data-from="0" data-to="{{$active_user}}" data-speed="1000" data-fresh-interval="20"><small>{Activeuser}</small></div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="row clearfix">
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="card">
                {
                    this.state.license.map(detail=>{
                        return(
                            <div class="body bg-teal">
                            <div class="font-bold m-b--35">License Information </div>
                            <ul class="dashboard-stat-list">
                                <li></li>
                                <li style={{display:"flex", justifyContent:"space-between",padding:"8px"}}>
                                    <b>Current Plan</b>
                        <span class="pull-right">{detail.current_plan}</span>
                                </li>
                                <li style={{display:"flex", justifyContent:"space-between", padding:"8px"}}>
                                    <b>Organisation</b>
                        <span class="pull-right">{detail.organisation}</span>
                                </li>
                                <li style={{display:"flex", justifyContent:"space-between" ,padding:"8px"}}>
                                    <b>Activation Date</b>
                        <span class="pull-right">{(detail.activation_date).slice(0, 10)}</span>
                                </li>
                                <li style={{display:"flex", justifyContent:"space-between", padding:"8px"}}>
                                    <b>Renewal Date</b>
                                    <span class="pull-right">{(detail.renewal_date).slice(0, 10)}</span>
                                    
                                </li>
                            </ul>
                        </div>
                        )
                    })
                }
               
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header" style={{padding:"0px"}}>
                    <h2>LICENSE PERCENTAGE</h2>
                </div>
                <div class="body">
                    {/* <canvas id="pie_chart" height="150"></canvas> */}
                    <Chart data={{Total:total_licenses,Used:Activeuser}}/>
                </div>
            </div>
        </div>
    </div>
 
   

</div>
</section>

{/* {{-- <Script> --}}
    {{-- var pieChartPer={{$jsonPieChart}}; --}}
{{-- </Script> --}}

<script>
    
var pieChartPer={{$jsonPieChart}};
$(function () {
   
//    new Chart(document.getElementById("bar_chart").getContext("2d"), getChartJs('bar'));
   new Chart(document.getElementById("pie_chart").getContext("2d"), getChartJs('pie'));
});

function getChartJs(type) {
   var config = null;

//    if (type === 'bar') {
//        config = {
//            type: 'bar',
//            data: {
//                labels: ["January", "February", "March", "April", "May", "June", "July"],
//                datasets: [{
//                    label: "My First dataset",
//                    data: [65, 59, 80, 81, 56, 55, 40],
//                    backgroundColor: 'rgba(0, 188, 212, 0.8)'
//                }, {
//                        label: "My Second dataset",
//                        data: [28, 48, 40, 19, 86, 27, 90],
//                        backgroundColor: 'rgba(233, 30, 99, 0.8)'
//                    }]
//            },
//            options: {
//                responsive: true,
//                legend: false
//            }
//        }
//    }
   if(type === 'pie') {
       config = {
           type: 'pie',
           data: {
               datasets: [{
                   data: pieChartPer,//[225, 50, 100, 40],
                   backgroundColor: [
                    //    "rgb(233, 30, 99)",
                    //    "rgb(255, 193, 7)",
                    //    "rgb(0, 188, 212)",
                    //    "rgb(139, 195, 74)"
                    "green",
                    "grey"
                   ],
               }],
               labels: [
                   "USED LICENSE % ",
                   "UNUSED LICENSE % ",
                //    "Cyan",
                //    "Light Green"
               ]
           },
           options: {
               responsive: true,
               legend: false
           }
       }
   }
   return config;
}
</script>

@stop */}
                   
                    </Col>
                </Row>


            </div>
        )
    }
}

export default User;