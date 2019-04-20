import React from 'react';
const CompletedButton = (props) => {
	return (
		<div>
			<input type="button"
				   value={props.isCompeted?'Add to do':'Completed task'}
				   onClick={props.click}/>
		</div>
	)
};

export default (CompletedButton)