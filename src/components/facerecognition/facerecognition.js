import React from 'react';
import './facerecognition.css'

function Facerecognition({ imageUrl,box }) {
	return(
		<div className='center'>
			<div className='absolute mt2'>
				<img alt='' id='face' src={imageUrl} width='500' height='Auto'/>
				<div className='bounding-box' style={{top:box.toprow, right:box.rightcol,bottom:box.bottomrow,left:box.leftcol}}></div>
			</div>
		</div>
	)
}

export default Facerecognition;