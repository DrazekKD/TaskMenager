import React from 'react';
const DeleteButton = (props) => {
	return (
		<div>
			<input type="button" value={props.id} onClick={props.click}/>
		</div>
	)
};

export default (DeleteButton)
