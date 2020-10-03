import React, { PureComponent } from 'react';
// import UserForm from './UserForm';
// import Home from './Home';
import { Container, Row, Col, Card, CardDeck } from 'react-bootstrap';
import { Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Navbar, Nav } from 'react-bootstrap';
import CNavBar from '../../layout/Navbar';
// import OCTAVIALOGO from '../users/images/user-img-background.jpg'
import { Modal, ButtonToolbar, Button, Paragraph } from 'rsuite';
import '../../layout/style.css';
import axios from 'axios'
// import {history} from 'react-router-dom'
class User extends PureComponent {
    constructor(props) {
        super(props);


        this.state = {
            expanded: true,
            activeKey: '1',
            show: false,
            email:'',
            user_id:0,
            password:'',
            confirmpassword:'',
            name:'',
            last_name:'',
            organization:'',
            address:'',
            city:'',
            designation:'',
            mobile:'',
            joining_date:'',
            date_of_birth:'',
            marital_status:'',
            department:'',
            gender:'',
            roles:'',
            user:[],
            Viewuser:[],
            Updateuser:[],
            inactiveid:0,
            newemail:'',
            newpassword:'',
            newconfirmpassword:'',
            newname:'',
            newlast_name:'',
            neworganization:'',
            newaddress:'',
            newcity:'',
            newdesignation:'',
            newmobile:'',
            newjoining_date:'',
            newdate_of_birth:'',
            newmarital_status:'',
            newdepartment:'',
            newgender:'',
            newroles:'',
        }

        this.handleChange=this.handleChange.bind(this)    
        this.CNavBarHandler = this.CNavBarHandler.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);

    }

    componentWillMount(){
        console.log('datahukjhk')
        axios.get('/admin/getalluser')
        .then(res=>{
            console.log('dataalluser',res.data.data)
                this.setState({
            user:res.data.data
            })
        })
    //     axios.get('/user/category')
    //     .then(res=>{
    //         this.setState({
    //             category:res.data.data
    //             }) 
    //    })
    }

    componentWillReceiveProps() {
        this.setState({
            toShow: this.props.toShowLoader
        })
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
          [name]: value
        })
    }

    handleClick = () => {
        // const data={
        //     email:this.state.email
        // }
        // axios.post('/api/emailregister',data,{
        //     headers:{
        //         'data':data
        //     }
        // })
        // .then(res=>{
        //     console.log('login',res)
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
    }

    CNavBarHandler(val) {
        this.setState({
            expanded: val
        })
    }

    Inactive(id){
        console.log('inactive',id)
        const Postdata={
            Id:id
        }
        axios.post('/admin/changeStatus',Postdata)
        .then(res=>{
            console.log('statuschange',res)
            this.props.history.push('/alluser')
             
        })
    }

    View(id){
        const Postdata={
            Id:id
        }
        axios.post('/admin/getuserById',Postdata)
        .then(res=>{
            console.log('data',res.data.data)
                this.setState({
            Viewuser:res.data.data
            })
        })
    }
    Update(id){
        const Postdata={
            Id:id
        }
        axios.post('/admin/updateuserById',Postdata)
        .then(res=>{
            console.log('data',res.data.data)
                this.setState({
            email:res.data.data.email
            })
            this.setState({
                user_id:res.data.data.id
            })
            this.setState({
                name:res.data.data.name
                })
            this.setState({
                    password:res.data.data.password
                    })
            this.setState({
                        last_name:res.data.data.last_name
                        })
            this.setState({
                organization:res.data.data.organization
            })
            this.setState({
                address:res.data.data.address
            })
            this.setState({
                city:res.data.data.city
            })
            this.setState({
                designation:res.data.data.designation
            })
            this.setState({
                mobile:res.data.data.mobile
            })
            this.setState({
                joining_date:res.data.data.joining_date
            })
            this.setState({
                date_of_birth:res.data.data.date_of_birth
            })
            this.setState({
                gender:res.data.data.gender
            })
            this.setState({
                marital_status:res.data.data.marital_status
            })
            this.setState({
                roles:res.data.data.roles
            })
            this.setState({
                department:res.data.data.department
            })
        })
    }

    UpdateToDatabase(){
        const PostData={
           email: this.state.email,
            user_id:this.state.user_id,
            password:this.state.password,
            name:this.state.name,
            organization:this.state.organization,
            address:this.state.address,
            city:this.state.city,
            designation:this.state.designation,
            mobile:this.state.mobile,
            joining_date:this.state.joining_date,
            date_of_birth:this.state.date_of_birth,
            marital_status:this.state.marital_status,
            department:this.state.department,
            gender:this.state.gender,
            roles:this.state.roles
        }
        axios.post('/admin/updateuser',PostData)
        .then(res=>{
            console.log('success',res)
        })
    }

    New(){
        const PostData={
            email: this.state.newemail,
            password:this.state.newpassword,
            name:this.state.newname,
            organization:this.state.neworganization,
            address:this.state.newaddress,
            city:this.state.newcity,
            designation:this.state.newdesignation,
            mobile:this.state.newmobile,
            joining_date:this.state.newjoining_date,
            date_of_birth:this.state.newdate_of_birth,
            marital_status:this.state.newmarital_status,
            department:this.state.newdepartment,
            gender:this.state.newgender,
            roles:this.state.newroles
        }
        axios.post('/admin/createuser',PostData)
        .then(res=>{
            console.log('success',res)
        })
    }



    close() {
        this.setState({ show: false });
    }
    open() {
        this.setState({ show: true });
    }

    render() {
        const { backdrop, show } = this.state;
        var increament = 0;
        const { newemail,newpassword, newconfirmpassword,newname,newlast_name, neworganization, newaddress, newcity, newdesignation, newmobile, newjoining_date ,newdate_of_birth,newroles,newgender,newdepartment,newmarital_status} = this.state;
        const { email,password, confirmpassword,name,last_name, organization, address, city, designation, mobile, joining_date ,date_of_birth,roles,gender,department,marital_status} = this.state;
        return (
            <div>
                <Row>
                    <Navbar fixed="top" style={{ backgroundColor: "#074d82", justifyContent: "flex-end", color: "white" }} expand="lg" >
                        <div style={{ paddingLeft: "10px" }} >
                            <Link to="/" style={{ color: "white" }}>
                                {/* <img style={{ height: "30px" }} src={OCTAVIALOGO}> */}

                                {/* </img> */}
                            </Link></div>
                        {/* <div style={{ fontSize: "1.3rem" }}>Admin</div> */}
                        <div style={{ paddingRight: "10px", display: 'flex' }} >
                            <div style={{ padding: "6px 10px", }} >
                                Logout
                </div>
                            <AccountCircleIcon fontSize="large"></AccountCircleIcon>
                        </div>
                    </Navbar>
                </Row>
                <Row style={{ marginTop: '57px' }} >
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
                        {/* <div class="container-fluid"> */}
    <div class="block-header">
        <h2 style={{textAlign:"left",paddingLeft:'10px',marginBottom:'0px'}}>DASHBOARD</h2>
    </div>

    <div class="row clearfix" style={{marginTop:'0px',paddingTop:'0px'}}>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2 style={{textAlign:"left"}}>
                        ALL USERS
                        <small></small>
                    </h2>
                    <ul class="header-dropdown m-r--5">
                       <button type="button" class="btn btn-link" data-toggle="modal" data-target="#add-new-user" ><i class="fa fa-plus" style={{color:"rgb(77, 47, 185)"}} aria-hidden="true"> Add New User</i></button>
                    </ul>
                    
                </div>
                <div class="body table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Designation</th>
                                <th>Role</th>
                                <th>Department</th>
                                <th>Reporting Manager</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="myTable">
                            {/* @php
                                $counter=0;
                            @endphp
                            @foreach ($userdata as $item) */}
                               {
                                   this.state.user.map(detail=>{
                                    increament = increament+1
                                       return(
                                        <tr>
                                        <th scope="row">{increament}</th>
                                       <td>{detail.name}</td>
                                        <td>{detail.email}</td>
                                        <td>{detail.designation}</td>
                                        <td>{detail.roles}</td>
                                        <td>{detail.department}</td>
                                        <td>{detail.reporting_manager}</td>
                                        <td>
                                            <ul style={{listStyle: "none"}} class="header-dropdown m-r--5">
                                                <li class="dropdown">
                                                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <i class="material-icons">more_vert</i>
                                                    </a>
                                                    <ul class="dropdown-menu pull-right">
                                                        <li>
                                                            <button type="button" class="btn btn-link view-my-user" onClick={() => this.View(detail.id)} data-vieworganization='{{$item->organization}}'  data-viewDOB='{{$item->date_of_birth}}'
                                                                    data-viewjoining='{{$item->joining_date}}' data-viewgender='{{$item->gender}}' data-viewmarriage='{{$item->marital_status}}' 
                                                                    data-viewrole='{{$item->roles}}' data-viewmobile='{{$item->mobile}}' data-viewcity='{{$item->city}}' data-viewaddress='{{$item->address}}' 
                                                                    data-toggle="modal" data-target="#view-user-model"><i class="fa fa-eye"  aria-hidden="true"></i>
                                                                    view user
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button type="button" class="btn btn-link update-btn" onClick={() => this.Update(detail.id)} data-id='{{$item->id}}' data-organization='{{$item->organization}}' 
                                                                    data-password='{{$item->password}}' data-DOB='{{$item->date_of_birth}}' data-joining='{{$item->joining_date}}' 
                                                                    data-role='{{$item->roles}}' data-mobile='{{$item->mobile}}' data-city='{{$item->city}}' data-address='{{$item->address}}'
                                                                    data-toggle="modal" data-target="#usersupdate" ><i class="fa fa-edit" style={{color:"rgb(77, 47, 185)"}} aria-hidden="true"></i>
                                                                    update
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button type="submit" class="btn btn-link inactive-user" onClick={()=>{this.setState({inactiveid:detail.id})}}
                                                                    data-toggle="modal" data-target="#inactiveUserModal"><i class="fa fa-ban" style={{color:"#F44336"}} aria-hidden="true"></i>
                                                                    inactive
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </td>                                        
                                    </tr>
                                       )
                                   })
                               } 
                               
                            {/* @endforeach                                    */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

<div class="modal fade bd-example-modal-lg2" id="add-new-user" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        {/* <form name="AddUserForm" id="AddUserForm" method="POST" action="/add-new-user" enctype="multipart/form-data"> */}
        {/* @csrf */}
        <div class="modal-content" style={{paddingLeft:"1px",paddingRight:"50px",paddingTop:"1px"}}>
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel2">User Registration</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">            
            <div class="row clearfix">

            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="card">
                        <div class="body">
                            <h2 class="card-inside-title">Login Detail</h2>
                            <div class="row clearfix">
                                <div class="col-sm-12">
                                    <b>Email Address</b>
                                    <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">email</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="text" class="form-control email" placeholder="Ex: example@example.com" name="newemail" value={newemail} onChange={this.handleChange} id="Email" />
                                        </div>
                                    </div>
                                    <b>Password</b>
                                    <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">vpn_key</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="password" class="form-control" value={newpassword} onChange={this.handleChange} placeholder="Enter the password" name="newpassword" id="add-Password" aria-required="true" />
                                        </div>
                                        <span class="input-group-addon show-password" style={{cursor: "pointer"}}>
                                            <i class="material-icons">visibility</i>
                                        </span>
                                    </div>
                                    <b>Confirm Password</b>
                                    <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">vpn_key</i>
                                        </span>
                                        <div class="form-line">
                                            <input type="password" class="form-control" value={newconfirmpassword} onChange={this.handleChange} placeholder="Re-Enter the password" name="newconfirmpassword" id="con-add-Password" aria-required="true" />
                                        </div>
                                        <span class="input-group-addon con-show-password" style={{cursor: "pointer"}}>
                                            <i class="material-icons">visibility</i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h2 class="card-inside-title">Personal Details</h2>
                            <div class="row clearfix">
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <div class="form-group">
                                        <b>Full Name</b>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">person</i>
                                            </span>
                                            <div class="form-line">
                                                <input type="text" class="form-control"  name="newname" value={newname} onChange={this.handleChange} placeholder="Name" id="Name" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <div class="form-group">
                                        <b>Organization</b>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">location_city</i>
                                            </span>
                                            <div class="form-line">
                                                <input type="text" class="form-control" placeholder="Organization" value={neworganization} onChange={this.handleChange} name="neworganization" id="Organization" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <div class="form-group">
                                        <b>Address</b>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">home</i>
                                            </span>
                                            <div class="form-line">
                                                <input type="text" class="form-control" placeholder="Address" value={newaddress} onChange={this.handleChange} name="newaddress" id="Address" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <div class="form-group">
                                        <b>City</b>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">place</i>
                                            </span>
                                            <div class="form-line">
                                                <input type="text" class="form-control" placeholder="City" value={newcity} onChange={this.handleChange} name="newcity" id="City" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <div class="form-group">
                                        <b>Designation</b>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">work</i>
                                            </span>
                                            <div class="form-line">
                                                <input type="text" class="form-control" placeholder="Designation" value={newdesignation} onChange={this.handleChange} name="newdesignation" id="Designation" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <div class="form-group">
                                        <b>Mobile Phone Number</b>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">phone_iphone</i>
                                            </span>
                                            <div class="form-line">
                                                <input type="tel" class="form-control mobile-phone-number" value={newmobile} onChange={this.handleChange}  placeholder="Ex: +00 (000) 000-00-00" name="newmobile" id="Mobile" pattern="[0-9]{10}" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <div class="form-group">
                                        <b>Joining Date</b>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">date_range</i>
                                            </span>
                                            <div class="form-line">
                                                <input type="date" class="form-control date" placeholder="Ex: 30/07/2016" value={newjoining_date} onChange={this.handleChange} name="newjoining_date" id="Joining_Date" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <div class="form-group">
                                        <b>Date of Birth</b>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">date_range</i>
                                            </span>
                                            <div class="form-line">
                                                <input type="date" class="form-control date" placeholder="Ex: 30/07/2016" value={newdate_of_birth} onChange={this.handleChange} name="newdate_of_birth" id="DOB" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <div class="form-group">
                                        <b>Gender</b>
                                        <div class="input-group">
                                        <select class="form-control show-tick" value={newgender} onChange={this.handleChange} name="newgender" id="Update-Department"> 
                                                <option value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="Female">Female</option>
                                               
                                                </select> 
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <div class="form-group">
                                        <b>Marital Status</b>
                                        <div class="input-group">
                                        <select class="form-control show-tick" value={newmarital_status} onChange={this.handleChange} name="newmarital_status" id="Update-Department"> 
                                                <option value="">Select Marital Status</option>
                                                <option value="single">Single</option>
                                                <option value="married">Married</option>
                                               
                                                </select>
                                        </div>
                                    </div>
                                </div>                                    
                                
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <div class="form-group">
                                        <b>Roles</b>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">toys</i>
                                            </span>
                                            <select class="form-control show-tick" value={newroles} onChange={this.handleChange} name="newroles" id="Update-Department"> 
                                                <option value="">Select Roles</option>
                                                <option value="User">User</option>
                                                <option value="Admin">Admin</option>
                                                <option value="Manager">Manager</option>
                                                <option value="Department Head">Department Head</option>
                                                <option value="Organization Head">Organization Head</option>
                                               
                                                </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <div class="form-group">
                                        <b>Department</b>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">dashboard</i>
                                            </span>
                                            <select class="form-control show-tick" value={newdepartment} onChange={this.handleChange} name="newdepartment" id="Update-Department"> 
                                                <option value="">Select Department</option>
                                                <option value="HR">HR</option>
                                                <option value="IT">IT</option>
                                                <option value="Finance">Finance</option>
                                                <option value="Director">Director</option>
                                                <option value="RPA">RPA</option>
                                               
                                                </select>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </div>
        <div class="modal-footer" style={{display:"flex"}}>
            <button type="button" class="btn btn-secondary" style={{marginTop:"13px"}} data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary waves-effect" data-dismiss="modal" style={{marginRight:"30px"}} onClick={()=>{this.New()}} name="Dept-Form-Submit">Submit</button>
        </div>
      </div>
    {/* </form> */}
    </div>
  </div>


    <div class="modal fade bd-example-modal-lg" id="view-user-model" tabindex="-1" data-keyboard="false" data-backdrop="static" role="dialog" aria-labelledby="view-user-model" aria-hidden="true">
        <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel1">View User</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
                <div class="row clearfix">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="card">
                            <div class="body bg-white">
                                <div class="font-bold m-b--35">USER PROFILE</div>
                                {
                                    this.state.Viewuser.map(detail=>{
                                        return(
                                            <ul class="dashboard-stat-list">
                                            <li>
                                                EMAIL
                                                <span class="pull-right" id="view-email"><b>{detail.email}</b></span>
                                            </li>
                                            <li>
                                                FULL NAME
                                                <span class="pull-right" id="view-name">{detail.name}<b></b></span>
                                            </li>
                                            <li>
                                                ORGANIZATION
                                                <span class="pull-right" id="view-organization">{detail.organization}<b></b></span>
                                            </li>
                                            <li>
                                                ADDRESS
                                                <span class="pull-right" id="view-address"><b>{detail.address}</b></span>
                                            </li>
                                            <li>
                                                CITY
                                                <span class="pull-right" id="view-city"><b>{detail.city}</b></span>
                                            </li>
                                            <li>
                                                DESIGNATION
                                                <span class="pull-right" id="view-designation"><b>{detail.designation}</b></span>
                                            </li>
                                            <li>
                                                PHONE NUMBER
                                                <span class="pull-right" id="view-mobile"><b>{detail.mobile}</b></span>
                                            </li>
                                            <li>
                                                JOINING DATE
                                                <span class="pull-right" id="view-joining"><b>{detail.joining_date}</b></span>
                                            </li>
                                            <li>
                                                DATE OF BIRTH
                                                <span class="pull-right" id="view-DOB"><b>{detail.date_of_birth}</b></span>
                                            </li>
                                            <li>
                                                GENDER
                                                <span class="pull-right" id="view-gender"><b>{detail.gender}</b></span>
                                            </li>
                                            <li>
                                                MARITAL STATUS
                                                <span class="pull-right" id="view-marriage"><b>{detail.marital_status}</b></span>
                                            </li>
                                            <li>
                                                ROLES
                                                <span class="pull-right" id="view-role"><b>{detail.roles}</b></span>
                                            </li>                                
                                            <li>
                                                DEPARTMENT
                                        <span class="pull-right" id="view-department"><b>{detail.department}</b></span>
                                            </li>
                                        </ul>
                                        )
                                    })
                                }
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary waves-effect" name="Dept-Form-Submit">Submit</button>
            </div>
        </div>
        </div>
    </div>




<div class="modal fade bd-example-modal-lg" id="usersupdate" tabindex="-1" role="dialog" aria-labelledby="usersupdate" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
    {/* <form name="UpdateUserForm" id="UpdateUserForm" method="POST" action="/usersupdate" enctype="multipart/form-data"> */}
    {/* @csrf */}
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel2">Update User Details</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">   
        {/* {
            this.state.Updateuser.map(detail=>{
                return( */}
                    <div class="row clearfix">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="card">
                            <div class="body">
                                <h2 class="card-inside-title">Login Detail</h2>
                                <div class="row clearfix">
                                    <div class="col-sm-12">
                                        <b>Email Address</b>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">email</i>
                                            </span>
                                            <div class="form-line">
                                                <input type="text"value={email} onChange={this.handleChange} class="form-control email" placeholder="Ex: example@example.com" name="email" id="show-Update-Email" aria-required="true" />
                                                <input value="" type="hidden" class="form-control email" placeholder="Ex: example@example.com" name="Update-id" id="Update-id" />
                                            </div>
                                        </div>
                                        <b>Password</b>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">vpn_key</i>
                                            </span>
                                            <div class="form-line">
                                                <input type="password" class="form-control" value={password} onChange={this.handleChange} placeholder="enter your password" name="password" id="Update-Password" aria-required="true" />
                                            </div>
                                        </div>
                                        <b>Confirm Password</b>
                                        <div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">vpn_key</i>
                                            </span>
                                            <div class="form-line">
                                                <input type="password" class="form-control" value={confirmpassword} onChange={this.handleChange} placeholder="Re-Enter your password" name="Confirmpassword" id="Con-Update-Password" aria-required="true" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Personal Details</h2>
                                <div class="row clearfix">
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <b>Full Name</b>
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="material-icons">person</i>
                                                </span>
                                                <div class="form-line">
                                                    <input value={name} onChange={this.handleChange} type="text" class="form-control date" name="name" placeholder="Name" id="Update-Name" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <b>Organization</b>
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="material-icons">location_city</i>
                                                </span>
                                                <div class="form-line">
                                                    <input type="text" class="form-control" value={organization} onChange={this.handleChange} placeholder="Organization" name="organization" id="Update-Organization" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <b>Address</b>
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="material-icons">home</i>
                                                </span>
                                                <div class="form-line">
                                                    <input type="text" value={address} onChange={this.handleChange} class="form-control" placeholder="Address" name="address" id="Update-Address" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <b>City</b>
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="material-icons">place</i>
                                                </span>
                                                <div class="form-line">
                                                    <input type="text" value={city} onChange={this.handleChange} class="form-control" placeholder="City" name="city" id="Update-City" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <b>Designation</b>
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="material-icons">work</i>
                                                </span>
                                                <div class="form-line">
                                                    <input type="text" value={designation} onChange={this.handleChange} class="form-control" placeholder="Designation" name="designation" id="Update-Designation" />
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <b>Mobile Phone Number</b>
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="material-icons">phone_iphone</i>
                                                </span>
                                                <div class="form-line">
                                                    <input type="text"value={mobile} onChange={this.handleChange} class="form-control mobile-phone-number" placeholder="Ex: +00 (000) 000-00-00" name="mobile" id="Update-Mobile" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <b>Joining Date</b>
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="material-icons">date_range</i>
                                                </span>
                                                <div class="form-line">
                                                    <input type="date" value={(joining_date).slice(0,10)} onChange={this.handleChange} class="form-control date" placeholder="Ex: 30/07/2016" name="joining_date" id="Update-Joining_Date" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <b>Date of Birth</b>
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="material-icons">date_range</i>
                                                </span>
                                                <div class="form-line">
                                                    <input type="date" value={(date_of_birth).slice(0,10)} onChange={this.handleChange} class="form-control date" placeholder="Ex: 30/07/2016" name="date_of_birth" id="Update-DOB" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <b>Gender</b>
                                            <div class="input-group">
                                            <select class="form-control show-tick" value={gender} onChange={this.handleChange} name="gender" id="Update-Department"> 
                                                <option value="">{gender}</option>
                                                <option value="male">Male</option>
                                                <option value="Female">Female</option>
                                               
                                                </select>                                               
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <b>Marital Status</b>
                                            <div class="input-group">
                                            <select class="form-control show-tick" value={marital_status} onChange={this.handleChange} name="department" id="Update-Department"> 
                                                <option value="">{marital_status}</option>
                                                <option value="single">Single</option>
                                                <option value="married">Married</option>

                                                </select>                                                
                                            </div>
                                        </div>
                                    </div>                                    
                                    
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <b>Roles</b>
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="material-icons">toys</i>
                                                </span>
                                                <select class="form-control show-tick" value={roles} onChange={this.handleChange} name="roles" id="Update-Roles">
                                                <option value="">{roles}</option>
                                                <option value="User">User</option>
                                                <option value="Admin">Admin</option>
                                                <option value="Manager">Manager</option>
                                                <option value="Department Head">Department Head</option>
                                                <option value="Organization Head">Organization Head</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <b>Department</b>
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="material-icons">dashboard</i>
                                                </span>
                                                <select class="form-control show-tick" value={department} onChange={this.handleChange} name="department" id="Update-Department"> 
                                                <option value="">{department}</option>
                                                <option value="HR">HR</option>
                                                <option value="IT">IT</option>
                                                <option value="Finance">Finance</option>
                                                <option value="Director">Director</option>
                                                <option value="RPA">RPA</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                </div>
                {/* )
            })
        }          */}
           

        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary waves-effect" data-dismiss="modal" onClick={()=>{this.UpdateToDatabase()}} name="Dept-Form-Submit">Submit</button>
        </div>
      </div>
    {/* </form> */}
    </div>
</div>


<div class="modal fade" id="inactiveUserModal" tabindex="-1" role="dialog" data-keyboard="false" data-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Inactive User</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {/* <form action="/updatestatus" method="post" enctype="multipart/form-data"> */}
        <div class="modal-body">
            <h5>Are you sure you want to inactive the user: 
                <span id="inactiveUser" class="text-bold"></span>
            </h5>
            {/* <input type="hidden" value="" name="address" id="inactive-address" />
            <input type="hidden" value="" name="city"  id="inactive-city" />
            <input type="hidden" value="" name="designation" id="inactive-designation" /> */}
            {/* <input type="hidden" value="" name="user-id" id="inactive-user-id" /> */}
            {/* <input type="hidden" value="" name="name" id="inactive-name" />
            <input type="hidden" value="" name="email" id="inactive-email" />
            <input type="hidden" value="" name="password" id="inactive-password" /> 
            <input type="hidden" value="" name="age" id="inactive-age" />
            <input type="hidden" value="" name="organization" id="inactive-organization" />
            <input type="hidden" value="" name="address" id="inactive-address" />
            <input type="hidden" value="" name="city"  id="inactive-city" />
            <input type="hidden" value="" name="designation" id="inactive-designation" />
            <input type="hidden" value="" name="mobile" id="inactive-mobile">
            <input type="hidden" value="" name="Join_Date"  id="inactive-Join_Date" />
            <input type="hidden" value="" name="DOB" id="inactive-DOB" />
            <input type="hidden" value="" name="gender" id="inactive-gender" />
            <input type="hidden" value="" name="marital_status" id="inactive-marital_status" />
            <input type="hidden" value="" name="role" id="inactive-role" />
            <input type="hidden" value="" name="department" id="inactive-department" />
            <input type="hidden" value="" name="reporting_manager" id="inactive-reporting_manager" />
            <input type="hidden" value="" name="department_head" id="inactive-department_head" />
            <input type="hidden" value="" name="license_key" id="inactive-license_key" />
            <input type="hidden" value="" name="macaddress" id="inactive-macaddress" />
            <input type="hidden" value="" name="salary" id="inactive-salary" />
            <input type="hidden" value="" name="email_verified_at" id="inactive-email_verified_at" />
            <input type="hidden" value="" name="remember_token" id="inactive-remember_token" /> */}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">NO</button>
         <Link to="/alluser"><button type="submit" onClick={()=>this.Inactive(this.state.inactiveid)} class="btn btn-danger"  data-dismiss="modal">YES</button></Link>
        </div>
      {/* </form> */}
      </div>
    </div>
</div>
{/* </div> */}
                        </section>
                    </Col>
                </Row>


            </div>
        )
    }
}

export default User;