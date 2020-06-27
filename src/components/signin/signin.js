import React from 'react';

class Signin extends React.Component {

	constructor(props)
	{
		super(props);
		this.state={
			Email:'',
			Password:'',
			condition:'',
		}
	}
	onEmail=(event)=>{
		this.setState({Email:event.target.value});
	}
	onPassword=(event)=>{
		this.setState({Password:event.target.value});
	}
	onSignin=()=>{
		fetch('https://fierce-shelf-73821.herokuapp.com/signin',{
			method:'post',
			headers:{'Content-Type':'Application/json'},
			body:JSON.stringify({
				email:this.state.Email,
				password:this.state.Password,
			})
		})
		.then(response=>response.json())
		.then(user=>{
			if(user==='Error!!')
				this.setState({condition:'failed'})
			else
			{
				this.props.loadUser(user)
				this.props.onroutechange('home')
			}
		})
		
	}
	render(){
		return(
			<article className="br2 ba b--black-10 mv6 w-100 w-50-m w-25-l mw5 center shadow-4">
				<main className="pa4 black-80">
				  <div className="measure center">
				  	<div>
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0 ">
					      <div className='center'>
					      <legend className="f3 fw6 ph0 mh0 ">Sign In</legend>
					      </div>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        <input 
					        	onChange={this.onEmail}
						        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
						        type="email" 
						        name="email-address"  
						        id="email-address"
					        />
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        <input 
					        	onChange={this.onPassword}
						        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
						        type="password" 
						        name="password"  
						        id="password"
					        />
					      </div>
					    </fieldset>
					    <div className="">
					      <input 
					      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
					      	type="submit" 
					      	value="Sign in"
					      	onClick={this.onSignin}
					      />
					    </div>
					    <div className="lh-copy mt3">
					      {
					      	this.state.condition==='failed'
					      	?
					      	 <div>
					      		<p onClick={()=>this.props.onroutechange('register')} className="f6 link dim black db pointer">Register</p>
					      	 	<p  className="f6  black db ">Email and Password does not match</p>
					      	 </div>
					      	:<p onClick={()=>this.props.onroutechange('register')} className="f6 link dim black db pointer">Register</p>
					      }
					    </div>
				    </div>
				  </div>
				</main>
			</article>
		)
	}
}
	

export default Signin;