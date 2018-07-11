import React, { Component } from 'react';
import './App.css';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Form from './components/Form.jsx';


class App extends Component {

	constructor(){
		super();

		this.state = {
			mounted: true

		};

		this.handleSubmit = this.handleSubmit.bind(this); 
	}

	handleSubmit(event) {

			event.preventDefault();
			this.setState({mounted: false}, () => console.log(this.state));
			;
	};


    render() {
        return (
        	<div className="app">
        		<ReactCSSTransitionGroup
        		transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeaveTimeout={300}>
        		
        			 {this.state.mounted && <Form onSubmit={this.handleSubmit} />}
        		</ReactCSSTransitionGroup>
        	</div>
           
        );
    }
}

export default App;