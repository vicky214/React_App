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
        super(props);
        this.state = {
            expanded: true,
            activeKey: '1',
            show: false,
            RoleType:'',
            user:[],
            role:[]
        };

        this.CNavBarHandler = this.CNavBarHandler.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);

    }

    componentWillMount(){
      axios.get('/admin/getalluser')
      .then(res=>{
              this.setState({
          user:res.data.data
          })
      })
      axios.get('/admin/getroles')
      .then(res=>{
          console.log('license',res.data.data)
          this.setState({
              role:res.data.data
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
        const len = this.state.user.length;
        var userRole = 0;
        var departmentHead = 0;
        var admin = 0;
        var organizationHead = 0;
        var manager = 0;
        var unrole=0;
        
        for (var i=0;i<len;i++){
          if((this.state.user[i].roles).toLowerCase().includes('admin')){
              admin = admin + 1
          }
          if((this.state.user[i].roles).toLowerCase().includes('user')){
            userRole = userRole+ 1
          }
          if((this.state.user[i].roles).toLowerCase().includes('department')){
            departmentHead = departmentHead + 1
          }
          if((this.state.user[i].roles).toLowerCase().includes('manager')){
            manager = manager+ 1
          }
          if((this.state.user[i].roles).toLowerCase().includes('organization')){
            organizationHead = organizationHead+ 1
          }
          else{
            unrole = unrole+1
          }
        }
        var Roles = [userRole,admin,manager,departmentHead,organizationHead]
        const { backdrop, show } = this.state;
        var Increament = -1;
        var count =0;
        console.log('Roles',Roles)
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
        <h2 style={{textAlign:'left',paddingLeft:'5px'}}>DASHBOARD</h2>
    </div>

    
    <div class="row clearfix">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="card">
          <div class="header">
            <h2 style={{textAlign:'left'}}>All Roles
              <small style={{textAlign:'left'}}>
                Here are employee list available by role based
              </small>
            </h2>
          </div>
            <div class="body table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Role</th>
                    <th>Count</th>
                    <th>Action</th>                                     
                  </tr>
                </thead>
                <tbody id="myTable">
                {
                  this.state.role.map(detail=>{
                   count = count + 1;
                    Increament=Increament+1;

                    return(
                      <tr>
                      <th scope="row">{count}</th>
                      <td>{detail.role_name}</td>
                      <td>{Roles[Increament]}</td>
                      <td>
                        <button type="button" class="btn btn-link view-btn" onClick={()=>{this.setState({RoleType:detail.role_name})}} data-toggle="modal" data-target="#viewModal" data-whatever="@mdo">
                          <i class="fa fa-eye"  aria-hidden="true"> </i>
                        </button>
                        <button type="button" class="btn btn-link update-btn" data-toggle="modal" data-target="#updateRoleModal" data-whatever="@mdo">
                          <i class="fa fa-pencil" style={{color:"rgb(77, 47, 185)"}} aria-hidden="true"></i>
                        </button>
                      </td>                                        
                    </tr>
                    )
                  })
                }
                   
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>



  <div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">List of Employees</h5>
        </div>
        <div class="modal-body">
          {/* <div id="pageLoading">
            <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw margin-bottom"></i>
            <span class="sr-only">Loading...</span>
          </div> */}
          {
            this.state.user.map(detail=>{

              if(detail.roles==this.state.RoleType){
                return(
                  <ul class="list-group" id="employeeList">
                      <li>{detail.name}</li>
                  </ul>
                )
              }
            })
          }
         
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>


  <div class="modal fade" id="updateRoleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <form action="update-roles" method="POST" name="updateRoleForm" id="updateRoleForm" enctype="multipart/form-data">
        @csrf
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Update Roles</h5>
        </div>
        <div class="modal-body">
          <div class="body">
            <div class="row clearfix">
              <div class="col-md-12 col-sm-12">
                <p>
                  <b>Select Role</b>
                </p>
                <input type="text" class="form-control" name="updateRoleName" id="updateRoleName" readonly />
              </div>
              <div id="updatePageLoading">
                <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw margin-bottom"></i>
                <span class="sr-only">Loading...</span>
              </div>
              <div class="col-md-12 col-sm-12 m-t-10" id="updateSection" >
                <p>
                  <b>Add Members in Role</b>
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

    </div>
                        </section>
                    </Col>
                </Row>


            </div >
        )
    }
}

export default User;