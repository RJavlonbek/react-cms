import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';

const App=(props)=>{
	console.log('App',props);
	const routes=props.routes.map((route,index) => {
		if(route.routes && route.routes.length){
			return(
				<Route path={route.path} key={index} render={(props)=>{
					return(	
						<route.component {...props} title={route.title} routes={route.routes} />
					);
				}} />
			);
		}else{
			return(
	        	<Route path={route.path} key={index} component={route.component} />
	        );
		}
		
    });

	return(
		<div>
			<h1>App - {props.title}</h1>
			{routes}
		</div>
	);
}

App.propTypes={
	title:PropTypes.string.isRequired
}

export default App;