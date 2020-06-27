import React from 'react';

class Register extends React.Component{
	constructor(props)
	{
		super(props);
		this.state={
			Email:'',
			Password:'',
			name:'',
			condition:false
		}
	}
	onEmail=(event)=>{
		this.setState({Email:event.target.value});
	}
	onPassword=(event)=>{
		this.setState({Password:event.target.value});
	}
	onname=(event)=>{
		this.setState({name:event.target.value})
	}
	onSubmit=(event)=>{
		if(this.state.name==='' || this.state.email==='' || this.state.password==='')
			this.setState({condition:true});
		else{
			fetch('https://fierce-shelf-73821.herokuapp.com/register',{
				method:'post',
				headers:{'Content-Type':'Application/json'},
				body:JSON.stringify({
					name:this.state.name,
					email:this.state.Email,
					password:this.state.Password,
				})
			})
			.then(response=>response.json())
			.then(user=>{
				if(user==='Error!!')
					{console.log("register not working")}
				else
				{
					this.props.loadUser(user)
					this.props.onroutechange('home')
				}
			})
		}
	}
	render(){
		return(
			<article className="br2 ba  b--black-10 mv5 w-100 w-50-m w-25-l  center shadow-4">
				<main className="pa4 black-80">
				  <div className="measure center">
				  	<div>
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="f3 fw6 ph0 mh0">Register</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label>
					        <input 
						        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90" 
						        type="name" 
						        name="name"  
						        id="name"
						        onChange={this.onname}
					        />
					      </div>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        <input 
						        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
						        type="email" 
						        name="email-address"  
						        id="email-address"
						        onChange={this.onEmail}
					        />
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        <input 
						        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
						        type="password" 
						        name="password"  
						        id="password"
						        onChange={this.onPassword}
					        />
					      </div>
					    </fieldset>
					    <div className="">
					      <input 
					      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
					      	type="submit" 
					      	value="Register"
					      	onClick={this.onSubmit}
					      />
					    </div>
					    {
					      	this.state.condition===true
					      	?
					      	 <div>
					      		<p onClick={()=>this.props.onroutechange('signin')} className="f6 link dim black db pointer">Sign in</p>
					      	 	<p  className="f6  db black">Enter all the credentials</p>
					      	 </div>
					      	:<p onClick={()=>this.props.onroutechange('signin')} className="f6 link dim black db pointer">Sign in</p>
					      }
				    </div>
				  </div>
				</main>
			</article>
		)

	}
}
	

export default Register;