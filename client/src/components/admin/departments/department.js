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
            department:[],
            view:[],
            department_name:'',
            updateId:0,
            deleteId:0,
            department_head:'',
            newDepart:'',
            newDepartHead:''

        };

        this.handleChange=this.handleChange.bind(this)    
        this.CNavBarHandler = this.CNavBarHandler.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);

    }

    handleChange = e => {
      let { name, value } = e.target
      this.setState({
        [name]: value
      })
  }

  handleClick = (id) => {
    const PostData={
      Id:id,
      department_name:this.state.department_name,
      department_head:this.state.department_head
    }
    axios.post('/admin/updateDepart',PostData)
    .then(res=>{
      console.log('success',res.data.data)
    })
  }

    componentWillReceiveProps() {
        this.setState({
            toShow: this.props.toShowLoader
        })
    }

    Delete(id){
      const PostData={
        Id:id
      }
      axios.post('/admin/deleteDepartment',PostData)
      .then(res=>{
        console.log('delete',res.data.data)
      })
    }

    CreateDepartment(){
        const PostData={
          department_name:this.state.newDepart,
          department_head:this.state.newDepartHead
        }
        axios.post('/admin/createDepart',PostData)
        .then(res=>{
          console.log('res',res)
        })
    }

    View(id){
      const PostData={
        dep_name:this.state.viewId
      }
      axios.post('/admin/viewDepartment',PostData)
      .then(res=>{
        console.log('view',res.data.data)
        this.setState({
          view:res.data.data
        })
      })
    }

    Update(id){
      const PostData={
        Id:id
      }
      

      axios.get('/admin/updateDepartment')
      .then(res=>{
        console.log('update',res.data.data)
      })
    }
    getDepart(id){
      this.setState({
        updateId:id
      })
      const PostData={
        Id:id
      }
      axios.post('/admin/getdepartmentById',PostData)
      .then(res=>{
        console.log('resbyid',res.data.data)
        this.setState({
          department_name:res.data.data.department_name
        })
        this.setState({
          department_head:res.data.data.department_head
        })
      })
    }

    componentWillMount(){
      axios.get('/admin/getdepartment')
      .then(res=>{
        console.log('resdepartment',res.data.data)
        this.setState({
          department:res.data.data
        })
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
    <h2  style={{textAlign:'left'}}>DASHBOARD</h2>
  </div>
    <div class="row clearfix">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="card">
          <div class="header">
            <h2 style={{textAlign:'left'}}>
              ALL Department
              <small  style={{textAlign:'left'}}>Here user list available by department based</small>
            </h2>
            <ul class="header-dropdown m-r--5">
              <button type="button" class="btn btn-link" data-toggle="modal" data-target="#addDepartmentModal" data-whatever="@mdo">
                <i class="fa fa-plus" style={{color:"rgb(77, 47, 185)"}} aria-hidden="true">Add Department</i>
              </button>
            </ul>
          </div>
          <div class="body table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>DEPARTMENT NAME</th>
                  <th>DEPARTMENT HEAD</th>
                  <th>NO. OF EMPLOYEE</th>
                  <th>Action</th>
                </tr>
              </thead>
            <tbody id="myTable">
             {
               this.state.department.map(detail=>{
                increament = increament+1
                 return(
                  <tr>
                  <th scope="row">{increament}</th>
                  <td>{detail.department_name}</td>
                  <td>{detail.department_head}</td>
                  <td></td>
                  <td>
                    <button type="button" class="btn btn-link team-list" onClick={()=>{this.View(detail.department_name)}} data-toggle="modal" data-target="#exampleModal1" >
                      <i class="fa fa-eye"  aria-hidden="true"> </i>
                    </button>
                    <button type="button" class="btn btn-link update-btn" onClick={()=>{this.getDepart(detail.department_id)}} data-toggle="modal" data-target="#updateDepartmentModal" >
                      <i class="fa fa-edit" style={{color:"rgb(77, 47, 185)"}} aria-hidden="true"></i>
                    </button> 
                    <button class="btn btn-link deleteRecord" onClick={()=>{this.setState({deleteId:detail.department_id})}} data-id="{{ $item->department_name }}" data-toggle="modal" data-target="#deleteDeprtmentModal" >
                      <i class="fa fa-trash" style={{color:"#F44336"}} aria-hidden="true"></i>
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




<div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">View</h5>
        </div>
        <div class="modal-body">
          <div id="pageLoading">
              <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw margin-bottom"></i>
              <span class="sr-only">Loading...</span>
          </div>
          {
            this.state.view.map(detail=>{
              return(
                <ul class="list-group" id="employeeList">
                    <li>{detail.name}</li>
                </ul>
              )
            })
          }
          
      </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

<div class="modal fade" id="updateDepartmentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update Department</h5>
      </div>
      <div class="modal-body">
          <div class="container-fluid">
            {/* {
              this.state.departmentById.map(detail=>{
                return( */}
                  <div class="row clearfix">
                  <div class="col-sm-12">
                      <b>Department Name</b>
                      <div class="input-group">
                          <span class="input-group-addon">
                              <i class="material-icons">dashboard</i>
                          </span>
                          <div class="form-line">
                              <input type="text" class="form-control" placeholder="Ex: abc" name="department_name" value={this.state.department_name} onChange={this.handleChange} id="updateDeptName" readonly />
                          </div>
                      </div>                                       
                  </div>
                  <div class="col-md-12 col-sm-12">
                      <b>Department Head</b>
                      <div class="input-group">
                        <span class="input-group-addon">
                            <i class="material-icons">person</i>
                        </span>
                        <div class="form-line">
                        <input type="text" class="form-control" placeholder="Head" name="department_head" value={this.state.department_head} onChange={this.handleChange} id="updateDeptName" readonly />

                        </div>
                      </div>
                  </div>
                  {/* <div id="updatePageLoading">
                    <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw margin-bottom"></i>
                    <span class="sr-only">Loading...</span>
                  </div> */}
                  {/* <div class="col-md-12 col-sm-12" id="teamMember">
                      <p>
                          <b>Team Members</b>
                      </p>
                      <div id="divUpdateEmpList"> 
                        <select id="updateEmpList" class="ms" multiple="multiple" name="updateEmpList[]">
                        </select>
                      </div>  
                  </div> */}
              </div>  
{/*   
                )
              })
            } */}
              </div>   
      </div>
      <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-secondary" onClick={()=>{this.handleClick(this.state.updateId)}} data-dismiss="modal">Save Changes</button>

      </div>
    </div>
  </div>
</div>



  <div class="modal fade" id="deleteDeprtmentModal" tabindex="-1" role="dialog" data-keyboard="false" data-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Delete Department</h5>
        </div>
        <div class="modal-body">
          <h5>Do you want delete department: 
            <span id="deleteDept" class="text-bold"></span>
          </h5>
          <input type="hidden" name="deleteDeptName" id="deleteDeptName" /> 
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">NO</button>
          <button type="submit" id="deleteDeptSubmit" onClick={()=>{this.Delete(this.state.deleteId)}} class="btn btn-danger" data-dismiss="modal">YES</button>
        </div>
      </div>
    </div>
  </div>


    
  <div class="modal fade" id="addDepartmentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add New Depatment</h5>
        </div>
        <div class="modal-body">
            <div class="container-fluid">
                    <div class="body">
                        <h2 class="card-inside-title"></h2>
                        <div class="row clearfix">
                            <div class="col-sm-12">
                              <div class="form-group">
                                <b>Department Name</b>
                                <div class="input-group">
                                    <span class="input-group-addon">
                                      <i class="material-icons">dashboard</i>
                                    </span>
                                    <div class="form-line">
                                      <input type="text" class="form-control" value={this.state.newDepart} onChange={(e)=>{this.handleChange(e)}} placeholder="Ex: abc" name="newDepart" id="Department-Name" autocomplete="off" />
                                  </div>
                                </div>
                            </div>
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <i class="material-icons">dashboard</i>
                                    </span>
                                    <div class="form-line">
                                        <input type="text" class="form-control" value={this.state.newDepartHead} onChange={(e)=>{this.handleChange(e)}} placeholder="Department Head" name="newDepartHead" autocomplete="off" />
                                    </div>
                                </div>                                        
                            </div>
                        </div>                                
                    </div>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary reset-btn"  data-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary  waves-effect" data-dismiss="modal" onClick={()=>{this.CreateDepartment()}} name="Dept-Form-Submit">Submit</button>
        </div>
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