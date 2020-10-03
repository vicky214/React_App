import React,{Component} from 'react';
// import '../layout/style.css'
import './login.css';
import axios from 'axios';
import {connect} from 'react-redux'

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
        this.handleChange=this.handleChange.bind(this)    
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
          [name]: value
        })
    }

    Login=()=>{
        const PostData={
            email:this.state.email,
            password:this.state.password
        }
        axios.post('/user/userLogin',PostData)
        .then(res=>{
            console.log('data',res)
            let role= (res.data.data.roles).toLowerCase()
            var type = role.includes('admin');
            if (type){
                var roleType='admin'
            }
            else{
                var roleType='guest'
            }
            
            // haroon.rasheed@boticx.com rahman123 

            const LoginData = {
                name:(res.data.data.name).toLowerCase(),
                email:(res.data.data.email).toLowerCase(),
                organization:(res.data.data.organization).toLowerCase(),
                roles:roleType,
                department:(res.data.data.department).toLowerCase(),
                status:(res.data.data.status).toLowerCase()
            }
            this.props.Login(LoginData)
            this.props.history.push('/home')
        })

    }

    render(){
        return(
             <div className="bo"style={{paddingBottom:"110px"}}>
            <div class="sub-main-w3" style={{marginTop:"0px",height:"70vh",paddingTop:"90px",paddingBottom:"80px",maxWidth:'500px',marginLeft:'auto',marginRight:'auto'}}>
        {/* <form class="login" method="POST" id="login-form" style={{}}> */}
			<p class="legend">Login Here<span class="fa fa-hand-o-down"></span></p>
			<div className="input form-group" >
                <input style={{paddingTop:"12px"}} type="email" value={this.state.email} onChange={(e)=>{this.handleChange(e)}} placeholder="Email" id="email" name="email"  class="form-control" />
				<span className="fa fa-envelope"></span>
			</div>
			<div class="input form-group">
                <input  style={{paddingTop:"12px"}} type="password" value={this.state.password} onChange={(e)=>{this.handleChange(e)}}placeholder="Password" id="password" name="password"  class="form-control" />
				<span class="fa fa-unlock"></span>
				{/* @error('password') */}
                    <span class="invalid-feedback" role="alert">
                    	{/* <strong>{{ $message }}</strong> */}
                    </span>
                {/* @enderror */}
			</div>
			<button type="submit" class="submit" name="loginSubmit" id="loginSubmit" onClick={()=>{this.Login()}}>
				<span class="fa fa-sign-in"></span>
			</button>
		{/* </form> */}
	</div>

     </div> 
        )
    }
} 

const mapDispatchToProps=(dispatch)=>{
    return{
      Login:(LoginData)=>{dispatch({type:"LOGIN",payload:LoginData})},
    }
  }

export default connect(null,mapDispatchToProps)(Login);
