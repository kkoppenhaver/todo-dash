import React from 'react';
window.React = React;//expose for react-devtools

var CardBox = React.createClass({
    render: function(){
        return(
            <div className="card-box">
            	<h1>To-Do Dashboard</h1> 
            	<Card title="Card1" topTask="Do something on card 1" /> 
            	<Card title="Card2" topTask="Do something on card 2" /> 
            	<Card title="Card3" topTask="Do something on card 3" /> 
            	<Card title="Card4" topTask="Do something on card 4" /> 
            </div>
        );
    }
});

var Card = React.createClass({
	render: function(){
		return(
			<div className="card">
				<div className="card-header">
          <h3 className="grid-item-name">{this.props.title}</h3>
        </div>
        <div className="card-body">
          <p className="grid-item-top-task">{this.props.topTask}</p>
        </div>
			</div>
		);
	}
})

React.render(<CardBox/>, document.getElementById('card-container'))