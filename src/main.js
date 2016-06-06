import React from 'react';
window.React = React;//expose for react-devtools

var CardBox = React.createClass({
    render: function(){
        return(
            <div className="card-box">
            	<h1>To-Do Dashboard</h1> 
            	<Card /> 
            	<Card /> 
            	<Card /> 
            	<Card /> 
            </div>
        );
    }
});

var Card = React.createClass({
	render: function(){
		return(
			<div className="card">
				<div className="card-header">
          <h3 className="grid-item-name">Title</h3>
        </div>
        <div className="card-body">
          <p className="grid-item-top-task">Card Content</p>
        </div>
			</div>
		);
	}
})

React.render(<CardBox/>, document.getElementById('card-container'))