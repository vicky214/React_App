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
import axios from 'axios';
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
            show: false,
            user:[],
            userId:0,
            deleteuserId:0,
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
    //     axios.get('/user/category')
    //     .then(res=>{
    //         this.setState({
    //             category:res.data.data
    //             }) 
    //    })
    }

    Active(id){
        const PostData={
            Id:id
        }
        axios.post('/admin/activeUser',PostData)
        .then(res=>{
            console.log('data',res.data.data)
        })
    }

    Delete(id){
        const PostData={
            Id:id
        }
        axios.post('/admin/deleteUser',PostData)
        .then(res=>{
            console.log('data',res.data.data)
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
        // for(var i=0;i<len;i++){
        //     if(this.state.user.status==''){

        //     }
        // }
        var increament = 0;
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
                            <div class="container-fluid">
                                <div class="block-header">
                                    <h2 style={{textAlign:"left",paddingLeft:'10px',marginBottom:'0px'}}>DASHBOARD</h2>
                                </div>

                                <div class="row clearfix">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div class="card">
                                            <div class="header">
                                                <h2 style={{textAlign:'left',textDecoration:'none'}}>
                                                   
                                                    Inactive Users
                                                </h2>
                                                {/* <ul class="header-dropdown m-r--5">
                                                    <li><input class="form-control" id="myInput" type="text" placeholder="Search.." /></li>
                                                </ul> */}
                                            </div>
                                            <div class="body table-responsive">
                                                <table class="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Name</th>
                                                            <th>email</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="myTable">
                                                        {   
                                                            this.state.user.map(detail=>{
                                                                if((detail.status).toLowerCase() != 'active'){
                                                                    increament = increament+1
                                                                return(
                                                                    <tr>
                                                                    <th scope="row">{increament}</th>
                                                                    <td>{detail.name}</td>
                                                                    <td>{detail.email}</td>
                                                                    <td>
                                                                        <button type="submit" class="btn btn-link active-user"  onClick={()=>{this.setState({userId:detail.id})}} data-id='{{$item->id}}' data-designation='{{$item->designation}}' data-role='{{$item->roles}}'
                                                                            data-age='{{$item->age}}' data-organization='{{$item->organization}}' data-password='{{$item->password}}' data-manager='{{$item->reporting_manager}}'
                                                                            data-address='{{$item->address}}' data-city='{{$item->city}}' data-mobile='{{$item->mobile}}' data-joining='{{$item->joining_date}}'
                                                                            data-DOB='{{$item->date_of_birth}}' data-gender='{{$item->gender}}' data-marriage='{{$item->marital_status}}' data-department='{{$item->department}}'
                                                                            data-departmentHead='{{$item->department_head}}' data-license='{{$item->license_key}}' data-macaddress='{{$item->macaddress}}'
                                                                            data-salary='{{$item->salary}}' data-emailVerification='{{$item->email_verified_at}}' data-remember_token='{{$item->remember_token}}'
                                                                            data-toggle="modal" data-target="#activeUserModal">
                                                                            Active
                                            </button>
                                                                        <button type="submit" class="btn btn-link delete-user" onClick={()=>{this.setState({deleteuserId:detail.id})}} data-id='{{$item->id}}' data-designation='{{$item->designation}}' data-role='{{$item->roles}}'
                                                                            data-age='{{$item->age}}' data-organization='{{$item->organization}}' data-password='{{$item->password}}' data-manager='{{$item->reporting_manager}}'
                                                                            data-address='{{$item->address}}' data-city='{{$item->city}}' data-mobile='{{$item->mobile}}' data-joining='{{$item->joining_date}}'
                                                                            data-DOB='{{$item->date_of_birth}}' data-gender='{{$item->gender}}' data-marriage='{{$item->marital_status}}' data-department='{{$item->department}}'
                                                                            data-departmentHead='{{$item->department_head}}' data-license='{{$item->license_key}}' data-macaddress='{{$item->macaddress}}'
                                                                            data-salary='{{$item->salary}}' data-emailVerification='{{$item->email_verified_at}}' data-remember_token='{{$item->remember_token}}'
                                                                            data-toggle="modal" data-target="#deleteUserModal">
                                                                            Delete
                                            </button>
                                                                    </td>
                                                                </tr>
                                                                )
                                                                }
                                                            })
                                                        }
                                                       
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="modal fade" id="activeUserModal" tabindex="-1" role="dialog" data-keyboard="false" data-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Inactive User</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        
        <div class="modal-body">
                                                <h5>Are you sure you want to Active the user:
                <span id="inactiveUser" class="text-bold"></span>
                                                </h5>
                                                {/* <input type="hidden" value="" name="user-id" id="inactive-user-id">
            <input type="hidden" value="" name="name" id="inactive-name">
            <input type="hidden" value="" name="email" id="inactive-email">
            <input type="hidden" value="" name="password" id="inactive-password"> 
            <input type="hidden" value="" name="age" id="inactive-age">
            <input type="hidden" value="" name="organization" id="inactive-organization">
            <input type="hidden" value="" name="address" id="inactive-address">
            <input type="hidden" value="" name="city"  id="inactive-city">
            <input type="hidden" value="" name="designation" id="inactive-designation">
            <input type="hidden" value="" name="mobile" id="inactive-mobile">
            <input type="hidden" value="" name="Join_Date"  id="inactive-Join_Date">
            <input type="hidden" value="" name="DOB" id="inactive-DOB">
            <input type="hidden" value="" name="gender" id="inactive-gender">
            <input type="hidden" value="" name="marital_status" id="inactive-marital_status">
            <input type="hidden" value="" name="role" id="inactive-role">
            <input type="hidden" value="" name="department" id="inactive-department">
            <input type="hidden" value="" name="reporting_manager" id="inactive-reporting_manager">
            <input type="hidden" value="" name="department_head" id="inactive-department_head">
            <input type="hidden" value="" name="license_key" id="inactive-license_key">
            <input type="hidden" value="" name="macaddress" id="inactive-macaddress">
            <input type="hidden" value="" name="salary" id="inactive-salary">
            <input type="hidden" value="" name="email_verified_at" id="inactive-email_verified_at">
            <input type="hidden" value="" name="remember_token" id="inactive-remember_token"> */}
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-primary" data-dismiss="modal">NO</button>
                                                <button type="submit" data-dismiss="modal" onClick={()=>{this.Active(this.state.userId)}} class="btn btn-danger">YES</button>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div class="modal fade" id="deleteUserModal" tabindex="-1" role="dialog" data-keyboard="false" data-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Delete User</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
        <div class="modal-body">
                                                <h5>Are you sure you want to delete the user:
                <span id="deleteUser" class="text-bold"></span>
                                                </h5>
                                                {/* <input type="hidden" value="" name="user-id" id="delete-user-id">
            <input type="hidden" value="" name="email" id="delete-email"> */}
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-primary" data-dismiss="modal">NO</button>
                                                <button type="submit" id="deleteUserSubmit" onClick={()=>{this.Delete(this.state.deleteuserId)}}class="btn btn-danger" data-dismiss="modal">YES</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        
                        </section>
                    </Col>
                </Row>


            </div >
        )
    }
}

export default User;