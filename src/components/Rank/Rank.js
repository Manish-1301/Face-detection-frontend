import React from 'react';

function Rank ({name,rank}) {
	return (
		<div className='mt0'>
			<div className='f3'>
				{`${name} , your current entry count is...`}
			</div>
			<div className='f2'>
				{`${rank}`}
			</div>
		</div>	
	);
}

export default Rank;