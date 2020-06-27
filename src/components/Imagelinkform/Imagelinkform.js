import React from 'react';
import './Imagelinkform.css'

function Imagelinkform ({onInputChange,onSubmit,onkeypress}) {
	return (
		<div className='mt0'>
			<p className=' mt0 f3 center'> This is a magic brain that will detect faces</p>
			<div className='mt0 center'>
				<div className='center  pa4 br4 shadow-1 back w-40' >
					<input type='text' placeholder="Enter a Image Url" className='center pa2 w-70  ' onChange={onInputChange} onKeyPress={onkeypress} />
					<button className='center grow pointer  br-pill w-20' onClick={onSubmit}>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default Imagelinkform;