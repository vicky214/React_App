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
        };


        this.CNavBarHandler = this.CNavBarHandler.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);

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
        const { backdrop, show } = this.state;
        return (
            <div >
                <Row>
                    <Navbar fixed="top" style={{ backgroundColor: "#074d82", display:"flex", justifyContent:"flex-end" ,color: "white" }} expand="lg" >
                       
                        {/* <div style={{ fontSize: "1.3rem", justifyContent:"flex-start" }}>Admin</div> */}
                        <div style={{ paddingLeft: "10px" }} >
                            <Link to="/" style={{ color: "white" }}>
                                {/* <img style={{ height: "30px" }} src={OCTAVIALOGO}>

                                </img> */}
                            </Link></div>
                        <div style={{ paddingRight: "10px", display: 'flex'}} >
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
                        <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <div class="row">
                        <div class="col-sm-4">
                            <h2>
                                Team Shifts
                                <button id="previous">&#8249;</button>
                                <button id="next">&#8250;</button>
                            </h2>
                        </div>
                        <div class="col-sm-4">
                            <input type="date" class="form-control" name="shift_date" id="datepicker" />
                        </div>
                    </div>
                    <ul class="header-dropdown m-r--5">
                        <li><input class="form-control" id="myInput" type="text" placeholder="Search.." /></li>
                    </ul>
                </div>                        
                <div class="body table-responsive">
                    <table class="table table-bordered" id="shiftData">
                      <thead>
                        <tr>
                          <th scope="col"><center>#</center></th>
                          <th id="monday" scope="col" data-id="">Mon</th>
                          <th id="day-2" scope="col">Tue</th>
                          <th id="day-3" scope="col">Wed</th>
                          <th id="day-4" scope="col">Thu</th>
                          <th id="day-5" scope="col">Fri</th>
                          <th id="saturday" scope="col" data-id="">Sat</th>
                        </tr>
                      </thead>
                      <tbody id="myTable">
                            <tr>
                                <th scope="row"><center><b></b></center></th>
                              
                                    <td>
                                        <center>
                                            <div class="content shift-assigned" type="button" class="btn btn-link d-flex justify-content-center" 
                                                    onclick="updateShift('{{$data[$usr->user_name .$weekStartDate]['shift_assign_id']}}',
                                                                    '{{$data[$usr->user_name .$weekStartDate]['email']}}',
                                                                    '{{$usr->user_name}}',
                                                                    '{{$weekStartDate}}',
                                                                    '{{$data[$usr->user_name .$weekStartDate]['shift_name']}}',
                                                                    '{{$data[$usr->user_name .$weekStartDate]['shift_start_time']}}',
                                                                    '{{$data[$usr->user_name .$weekStartDate]['shift_end_time']}}')"
                                                    data-toggle="modal" data-target="#update-shift-modal" data-whatever="@mdo">
                                                <div class="text">
                                                    {/* {{$data[$usr->user_name .$weekStartDate]['shift_name']}} */}
                                                </div>
                                                <div class="text">
                                                   
                                                </div>
                                            </div>
                                        </center>
                                    </td>
                                
                                    <td>
                                        <center>
                                            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#shift-modal"  
                                                onclick="myFunction('{{$usr->email}}','{{$usr->user_name}}','{{$weekStartDate}}')">+
                                            </button>
                                        </center>
                                    </td>
                                
                          

                                <td>
                                    <center>
                                        <div class="content shift-assigned" type="button" class="btn btn-link d-flex justify-content-center" 
                                            onclick="updateShift('{{$data[$usr->user_name .$tuesday]['shift_assign_id']}}',
                                                                    '{{$data[$usr->user_name .$tuesday]['email']}}',
                                                                    '{{$usr->user_name}}',
                                                                    '{{$tuesday}}',
                                                                    '{{$data[$usr->user_name .$tuesday]['shift_name']}}',
                                                                    '{{$data[$usr->user_name .$tuesday]['shift_start_time']}}',
                                                                    '{{$data[$usr->user_name .$tuesday]['shift_end_time']}}')"
                                            data-toggle="modal" data-target="#update-shift-modal" data-whatever="@mdo">
                                            <div class="text">
                                                {/* {{$data[$usr->user_name .$tuesday]['shift_name']}} */}
                                            </div>
                                            <div class="text">
                                               
                                            </div>
                                        </div>
                                    </center>
                                </td>
                        
                                <td>
                                    <center>
                                        <button type="button" class="btn btn-link" data-toggle="modal" data-target="#shift-modal" onclick="myFunction('{{$usr->email}}','{{$usr->user_name}}','{{$tuesday}}')">+
                                        </button>
                                    </center>
                                </td>
                          
                                <td>
                                    <center>
                                        <div class="content shift-assigned" type="button" class="btn btn-link d-flex justify-content-center" 
                                            onclick="updateShift('{{$data[$usr->user_name .$wednesday]['shift_assign_id']}}',
                                                                    '{{$data[$usr->user_name .$wednesday]['email']}}',
                                                                    '{{$usr->user_name}}',
                                                                    '{{$wednesday}}',
                                                                    '{{$data[$usr->user_name .$wednesday]['shift_name']}}',
                                                                    '{{$data[$usr->user_name .$wednesday]['shift_start_time']}}',
                                                                    '{{$data[$usr->user_name .$wednesday]['shift_end_time']}}')"
                                            data-toggle="modal" data-target="#update-shift-modal" data-whatever="@mdo">
                                            <div class="text">
                                                {/* {{$data[$usr->user_name .$wednesday]['shift_name']}} */}
                                            </div>
                                            <div class="text">
                                                                                    
                                            </div>
                                        </div>
                                    </center>
                                </td>
                                
                                <td><center>
                                    <button type="button" class="btn btn-link" data-toggle="modal" data-target="#shift-modal" data-whatever="@mdo" 
                                    onclick="myFunction('{{$usr->email}}','{{$usr->user_name}}','{{$wednesday}}')">
                                    +</button></center></td>
                            
                                
                            

                            <td>
                                <center>
                                    <div class="content shift-assigned" type="button" class="btn btn-link d-flex justify-content-center" 
                                            onclick="updateShift('{{$data[$usr->user_name .$thursday]['shift_assign_id']}}',
                                                                    '{{$data[$usr->user_name .$thursday]['email']}}',
                                                                    '{{$usr->user_name}}',
                                                                    '{{$thursday}}',
                                                                    '{{$data[$usr->user_name .$thursday]['shift_name']}}',
                                                                    '{{$data[$usr->user_name .$thursday]['shift_start_time']}}',
                                                                    '{{$data[$usr->user_name .$thursday]['shift_end_time']}}')"
                                            data-toggle="modal" data-target="#update-shift-modal" data-whatever="@mdo">
                                        <div class="text">
                                            {/* {{$data[$usr->user_name .$thursday]['shift_name']}} */}
                                        </div>
                                        <div class="text">
                                                                                  
                                        </div>
                                    </div>
                                </center>
                            </td>
                            
                            <td><center>
                                <button type="button" class="btn btn-link" data-toggle="modal" data-target="#shift-modal" data-whatever="@mdo" 
                                        onclick="myFunction('{{$usr->email}}','{{$usr->user_name}}','{{$thursday}}')">
                                        +</button></center></td>
                        
                              
                        
                      
                           
                            <td>
                                <center>
                                    <div class="content shift-assigned" type="button" class="btn btn-link d-flex justify-content-center" 
                                            onclick="updateShift('{{$data[$usr->user_name .$friday]['shift_assign_id']}}',
                                                                    '{{$data[$usr->user_name .$friday]['email']}}',
                                                                    '{{$usr->user_name}}',
                                                                    '{{$friday}}',
                                                                    '{{$data[$usr->user_name .$friday]['shift_name']}}',
                                                                    '{{$data[$usr->user_name .$friday]['shift_start_time']}}',
                                                                    '{{$data[$usr->user_name .$friday]['shift_end_time']}}')"
                                            data-toggle="modal" data-target="#update-shift-modal" data-whatever="@mdo">
                                        <div class="text">
                                            {/* {{$data[$usr->user_name .$friday]['shift_name']}} */}
                                        </div>
                                        <div class="text">
                                                                                   </div>
                                    </div>
                                </center>
                            </td>
                        
                            <td><center>
                                <button type="button" class="btn btn-link" data-toggle="modal" data-target="#shift-modal" data-whatever="@mdo" 
                                        onclick="myFunction('{{$usr->email}}','{{$usr->user_name}}','{{$friday}}')">
                                        +</button></center></td>
                
                                <td>
                                    <center>
                                        <div class="content shift-assigned" type="button" class="btn btn-link d-flex justify-content-center" 
                                            onclick="updateShift('{{$data[$usr->user_name .$weekEndDate]['shift_assign_id']}}',
                                                                    '{{$data[$usr->user_name .$weekEndDate]['email']}}',
                                                                    '{{$usr->user_name}}',
                                                                    '{{$weekEndDate}}',
                                                                    '{{$data[$usr->user_name .$weekEndDate]['shift_name']}}',
                                                                    '{{$data[$usr->user_name .$weekEndDate]['shift_start_time']}}',
                                                                    '{{$data[$usr->user_name .$weekEndDate]['shift_end_time']}}')"
                                            data-toggle="modal" data-target="#update-shift-modal" data-whatever="@mdo">
                                            <div class="text">
                                                {/* {{$data[$usr->user_name .$weekEndDate]['shift_name']}} */}
                                            </div>
                                            <div class="text">
                                                                                      </div>
                                        </div>
                                    </center>
                                </td>
                                
                                <td>
                                    <center>
                                        <button type="button" class="btn btn-link" data-toggle="modal" data-target="#shift-modal"
                                            onclick="myFunction('{{$usr->email}}','{{$usr->user_name}}','{{$weekEndDate}}')">+
                                        </button>
                                    </center></td>
                
                            </tr>
                        
                      </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

<form action="/addNewShift" method="post" id="AddShiftForm" name="AddShiftForm">
  <div class="modal fade" id="shift-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Assign Shift</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div class="container-fluid">
                <div class="body">
                        <div class="row clearfix">
                            <div class="col-sm-12">
                                <b>Shift Name</b>
                                 {/* <input type="hidden" name="user-email" value="" id="user-email-input">
                                 <input type="hidden" name="user-name" value="" id="user-name-input">
                                 <input type="hidden" name="user-date" value="" id="user-date-input"> */}
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <i class="material-icons">email</i>
                                    </span>
                                    <div class="form-line">
                                        <input id="shift-name" value="" type="text" class="form-control" placeholder="Ex: abc" name="shift_name" />
                                    </div>
                                </div>                                       
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <b>Start Time (24 hour)</b>
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <i class="material-icons">access_time</i>
                                    </span>
                                    <div class="form-line">
                                        <input id="start-time" value="" type="time" class="form-control time12" name="shift_start_time" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <b>End Time (24 hour)</b>
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <i class="material-icons">access_time</i>
                                    </span>
                                    <div class="form-line">
                                        <input id="end-time" value="" type="time" class="form-control time12"  name="shift_end_time" />
                                    </div>
                                </div>
                            </div>
                        </div>                                
                 </div>                
            </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary m-t-15 waves-effect" name="TeamShift-Add-Form" id="TeamShift-Add-Form">Submit</button>
        </div>
      </div>
    </div>
  </div>
</form>

<form action="/updateNewShift" method="post" id="UpdateShiftForm" name="UpdateShiftForm">
    
  <div class="modal fade" id="update-shift-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Update Shift</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div class="container-fluid">
                <div class="body">
                        <div class="row clearfix">
                            <div class="col-sm-12">
                                <b>Shift Name</b>
                                {/* <input type="hidden" name="user-id" value="" id="user-id-update">
                                <input type="hidden" name="user-email" value="" id="user-email-update">
                                <input type="hidden" name="user-name" value="" id="user-name-update">
                                <input type="hidden" name="user-date" value="" id="user-date-update"> */}
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <i class="material-icons">email</i>
                                    </span>
                                    <div class="form-line">
                                        <input id="shift-name-update" value="" type="text" class="form-control email" placeholder="Ex: abc" name="Update_shift_name" />
                                    </div>
                                </div>                                       
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <b>Start Time (24 hour)</b>
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <i class="material-icons">access_time</i>
                                    </span>
                                    <div class="form-line">
                                        <input id="start-time-update" value="" type="time" class="form-control time12" placeholder="Ex: 11:59 pm" name="Update_shift_start_time" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <b>End Time (24 hour)</b>
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <i class="material-icons">access_time</i>
                                    </span>
                                    <div class="form-line">
                                        <input id="end-time-update" value="" type="time" class="form-control time12" placeholder="Ex: 11:59 pm" name="Update_shift_end_time" />
                                 </div>
                                </div>
                            </div>
                        </div>                                
                 </div>                
            </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary m-t-15 waves-effect" name="TeamShift-Update-Form">Submit</button>
        </div>
      </div>
    </div>
  </div>
</form>

                        </section>
                    </Col>
                </Row>


            </div >
        )
    }
}

export default User;