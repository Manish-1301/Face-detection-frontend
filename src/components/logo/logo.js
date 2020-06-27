import React from 'react';
import finger from'./logo.png'

function Logo () {
	return(
		<div className='mh3 mt0'>
			<div  className=" br4 shadow-2 bg-blue" style={{ max : 55 ,height: 150, width: 150 }} >
	 			<div> 
	 				<img alt='Logo' src={finger}/>
	 			</div>
			</div>
		</div> 
	);
}

export default Logo;