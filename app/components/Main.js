var React = require('react');

var Home = React.createClass({
	render: function(){
		return (

			<div> Hello from Main! {this.props.children} </div>
		)
	}
});

module.exports = Main;