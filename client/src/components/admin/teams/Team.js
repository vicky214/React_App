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
                                <div class="row clearfix">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div class="card">
                                            <div class="header">
                                                <h2 style={{textAlign:"left"}}>
                                                    Teams Detail
            <small style={{textAlign:"left"}}>Here are teams details available with employee list</small>
                                                </h2>
                                                <ul class="header-dropdown m-r--5">
                                                    <button type="button" class="btn btn-link" data-toggle="modal" data-target="#addTeamModal" data-whatever="@mdo">
                                                        <i class="fa fa-plus" style={{color:"rgb(77, 47, 185)"}} aria-hidden="true"> Add New Team</i>
                                                    </button>
                                                </ul>
                                            </div>
                                            <div class="body table-responsive">
                                                <table class="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Team Head</th>
                                                            <th>Employee Count</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    {/* @php
              $counter=0;
            @endphp */}
                                                    <tbody id="myTable">
                                                        {/* @foreach ($teamList as $item) */}
                                                        <tr>
                                                            <th scope="row"></th>
                                                            <td></td>
                                                            <td></td>
                                                            <td>
                                                                <button type="button" class="btn btn-link view-team-btn" data-toggle="modal" data-target="#viewTeamModal" data-whatever="@mdo">
                                                                    <i class="fa fa-eye" aria-hidden="true"> </i>
                                                                </button>
                                                                <button type="button" class="btn btn-link update-team-btn" data-toggle="modal" data-target="#updateTeamModal" data-whatever="@mdo">
                                                                    <i class="fa fa-edit" style={{color:"rgb(77, 47, 185)"}} aria-hidden="true"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        {/* @endforeach */}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div class="modal fade" id="viewTeamModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">List of Employees</h5>
                                        </div>
                                        <div class="modal-body">
                                            <div id="pageLoading">
                                                <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw margin-bottom"></i>
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                            <ul class="list-group" id="employeeList">
                                            </ul>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div class="modal fade" id="updateTeamModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <form action="update-teams" method="post" id="updateTeamForm" name="updateTeamForm" autocomplete="off" enctype="multipart/form-data">
                                        {/* @csrf */}
      <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
                                            </div>
                                            <div class="modal-body">
                                                <div class="container-fluid">
                                                    <div class="row clearfix">
                                                        <div class="col-sm-12">
                                                            <b>Team Name</b>
                                                            <div class="input-group">
                                                                <span class="input-group-addon">
                                                                    <i class="material-icons">group_work</i>
                                                                </span>
                                                                <div class="form-line">
                                                                    <input type="text" class="form-control" placeholder="Ex: abc" name="updateTeamName" id="updateTeamName" readonly />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="updatePageLoading">
                                                            <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw margin-bottom"></i>
                                                            <span class="sr-only">Loading...</span>
                                                        </div>
                                                        <div class="col-md-12 col-sm-12" id="teamMember">
                                                            <p>
                                                                <b>Team Members</b>
                                                            </p>
                                                            <select id="updateEmpList" class="ms" multiple="multiple" name="updateEmpList[]">

                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="submit" class="btn btn-primary">Save Changes</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class="modal fade" id="addTeamModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <form action="add-team" method="post" id="AddTeamsForm" name="AddTeamsForm" enctype="multipart/form-data" autocomplete="off">
                                        {/* @csrf */}
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Add New Team</h5>
                                            </div>
                                            <div class="modal-body">
                                                <div class="container-fluid">
                                                    <div class="row clearfix">
                                                        <div class="col-md-12 col-sm-12">
                                                            <div class="form-group">
                                                                <b>Department Name</b>
                                                                <div class="input-group">
                                                                    <span class="input-group-addon">
                                                                        <i class="material-icons">person</i>
                                                                    </span>
                                                                    <div class="form-line">
                                                                        <select name="addTeamName" id="addTeamName">
                                                                            <option value="" selected hidden></option>
                                                                            <option value=""></option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row clearfix">
                                                            <div class="col-md-12 col-sm-12">
                                                                <p>
                                                                    <b>Select Team Members</b>
                                                                </p>
                                                                <select id="addTeamList" class="ms" multiple="multiple" name="addTeamList[]">
                                                                    {/* @foreach ($allemp as $item) */}
                                                                    <option value="{{$item->name}}"></option>
                                                                    {/* @endforeach */}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="submit" class="btn btn-primary waves-effect" name="team-Form-Submit" id="team-Form-Submit">Submit</button>
                                                </div>
                                            </div>
                                        </div>
    </form>
    </div>
                                
                            </div>
                        </section>
                    </Col>
                </Row>


            </div>
        )
    }
}

export default User;