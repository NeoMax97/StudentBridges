import React from "react";
import { Route, NavLink } from "react-router-dom";
import NavigationPane from "./NavigationPane.jsx";
import Profile from "./pages/Profile.jsx";
import Surveys from "./pages/Surveys.jsx";
import EventRegistry from "./pages/EventRegistry.jsx";

class Portal extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div className="container-fluid">
			<div className="row">
				<div className="col-md-3 p-3" id="nav-container">
					<NavigationPane>
						<NavLink exact to="/">Profile</NavLink>
						<NavLink to="/surveys">Surveys</NavLink>
						<NavLink to="/eventregistry">Event Registry</NavLink>
					</NavigationPane>
				</div>
				<div className="col-md-9 p-3" id="content-container">
					<Route exact path="/" render={(props) => <Profile {...props} user={this.props.user} />} />
					<Route path="/surveys" render={(props) => <Surveys {...props} user={this.props.user} />} />
					<Route path="/eventregistry" render={(props) => <EventRegistry {...props} user={this.props.user} />} />
				</div>
			</div>
		</div>;
	}
}

export default Portal;