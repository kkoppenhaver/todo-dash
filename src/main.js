import React from 'react';
window.React = React;//expose for react-devtools

class CardBox extends React.Component {
	
	render() {
		let projects = [
			{ id: 1, projectTitle: 'IBD', topTask: 'Continue to work on tickets' },
			{ id: 2, projectTitle: 'BTC', topTask: 'Continue working on migration' },
			{ id: 3, projectTitle: 'Level Up WP', topTask: 'Write welcome blog post' },
			{ id: 4, projectTitle: 'Photo Assistant', topTask: 'Convert ThickBox to modal' },
		]
		
		return(
	    <div className="card-box">
	    	<h1>To-Do Dashboard</h1> 
	    	{projects.map(function(project){
	    		return(
	    			<Card title={project.projectTitle} topTask={project.topTask} key={project.id} />
	    		);
	    	})}
	    </div>
	  );
	}
}

class Card extends React.Component {
	render() {
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
}

React.render(<CardBox/>, document.getElementById('card-container'))