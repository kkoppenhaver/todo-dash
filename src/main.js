import React from 'react';
window.React = React;//expose for react-devtools

var App = React.createClass({
    render: function(){
        return(
            <div>
                <h1>Hello Keanan</h1>
            </div>
        );
    }
});

React.render(<App/>, document.getElementById('app'))