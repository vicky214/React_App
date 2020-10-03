import React from 'react'
import {Link} from 'react-router-dom';
import { Sidenav,Dropdown,Icon,Nav,Toggle } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css' //'rsuite/lib/styles/index.less'; // or 'rsuite/dist/styles/rsuite-default.css'

import {connect} from 'react-redux'
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

class CNavBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        expanded: this.props.expanded,
        activeKey: this.props.activeKey,
        role:this.props.userType

      };
      this.handleToggle = this.handleToggle.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
    }
    handleToggle() {
      this.setState({
        expanded: !this.state.expanded
      }, function(){
        this.props.CNavBarHandler(this.state.expanded)
      });
      
    }
    handleSelect(eventKey) {
      this.setState({
        activeKey: eventKey
      });
    }

    renderdata(){
      switch(this.state.role){
        case 'admin':
          return(
            <React.Fragment>
                   <Nav.Item eventKey="2" icon={<Icon style={{color:"white"}} icon="home" />}>
                  <Link to="/home" style={{color:"white", textDecoration:"none" ,display:"flex"}}>User Dashboard</Link>
                  </Nav.Item>
                
                <Nav.Item eventKey="2" icon={<Icon style={{color:"white"}} icon="home" />}>
                <Link to="/admindashboard" style={{color:"white", textDecoration:"none" ,display:"flex"}}>Home</Link>
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<Icon style={{color:"white"}} icon="peoples" />}>
                <Link to="/adminteam" style={{color:"white", textDecoration:"none" ,display:"flex"}}>Teams</Link>
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<Icon style={{color:"white"}} icon="avatar" />}>
                <Link to="/alluser" style={{color:"white", textDecoration:"none" ,display:"flex"}}>All Users</Link>
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<Icon style={{color:"white"}} icon="avatar" />}>
                <Link to="/inactiveuser" style={{color:"white", textDecoration:"none" ,display:"flex"}}>Inactive Users</Link>
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<Icon style={{color:"white"}} icon="character-area" />}>
                <Link to="/role" style={{color:"white", textDecoration:"none" ,display:"flex"}}>Roles</Link>
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<Icon style={{color:"white"}} icon="table" />}>
                <Link to="/department" style={{color:"white", textDecoration:"none" ,display:"flex"}}>Department</Link>
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<Icon style={{color:"white"}} icon="th" />}>
                <Link to="/allshift" style={{color:"white", textDecoration:"none" ,display:"flex"}}>Add/View Shift</Link>
                </Nav.Item>

            </React.Fragment>
          )
          case 'guest':
            return(
              <React.Fragment>
                 <Nav.Item eventKey="2" icon={<Icon style={{color:"white"}} icon="home" />}>
                  <Link to="/home" style={{color:"white", textDecoration:"none" ,display:"flex"}}>User Dashboard</Link>
                  </Nav.Item>
              </React.Fragment>
            )
            default:
              return(
                <React.Fragment>
                <Nav.Item eventKey="3" icon={<Icon style={{color:"white"}}  />}>
                <Link to="/login" style={{color:"white",textDecoration:"none" ,display:"flex"}}>Login</Link>
                </Nav.Item>
                </React.Fragment>
              )
      }
    }
    render() {
      const { expanded } = this.state;
      return (
        <div style={{position:"fixed", width:"230px"}} >
          {/* <Toggle onChange={this.handleToggle} style={{backgroundColor:"lightblue" }} checked={expanded} /> */}
          <Sidenav
            expanded={expanded}
           // defaultOpenKeys={['3', '4']}
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
            style={{backgroundColor:"#074d82",height:"100vh" }}
          >
            <Sidenav.Body>
            <div style={{
                          display: 'flex',
                          flexDirection: 'row-reverse',
                          padding: '10px 15px 0px',
                          transition: "all .8s ease 0s "
                        }}>
                          {expanded ? <MenuOpenRoundedIcon onClick={this.handleToggle} style={{ fontSize: "1.6rem", color: "white",cursor:"pointer" }} /> : <MenuRoundedIcon onClick={this.handleToggle} style={{ fontSize: "1.6rem", color: "white",cursor:"pointer" }} />}


                        </div>
              <Nav>
                {/* <Nav.Item eventKey="3" icon={<Icon style={{color:"white"}}  />}>
                <Link to="/login" style={{color:"white",textDecoration:"none" ,display:"flex"}}>Login</Link>
                </Nav.Item> */}
                 {this.renderdata()}
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </div>
      );
    }
  }

  
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    userType:state.auth.userType
  }
};


const mapDispatchToProps=(dispatch)=>{
  return{
    Logout:()=>{dispatch({type:"LOGOUT"})},
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CNavBar);







// {this.state.expanded ?
//   <Col xs={2} md={2} style={{ transition: "all .6s ease 0s ",height: "100vh", padding: '0px', backgroundColor: "#074d82" }}

//   >

//   </Col> :
//   <Col xs={2} md={2} style={{ transition: "all .6s ease 0s ", maxWidth: "56px", height: "100vh", padding: '0px', backgroundColor: "#074d82" }}

//   >

//   </Col>
// }