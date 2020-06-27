import React from 'react';

function Navigation ({onroutechange,issignedin}) {
	if(issignedin)
	{
		return (
			<nav style={{display:'flex',justifyContent:'flex-end'}}>
				<p 
					className='f4 br3 link hover-bg-green black underline pa3 pointer shadow-4'
					onClick={()=>onroutechange('signout')} >
					Sign Out</p>
			</nav>
	);
	}
	else
	{
		return (
			<nav  className='pa1' style={{display:'flex',justifyContent:'flex-end'}}>
				<p 
					className='f4 br3 dim black underline pa3 pointer '
					onClick={()=>onroutechange('signin')} >
					Sign in
				</p>
				<p 
					className='f4 br3 dim black underline pa3 pointer '
					onClick={()=>onroutechange('register')} >
					Register
				</p>
			</nav>
	);	
	}
}

export default Navigation;