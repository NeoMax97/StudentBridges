import React from "react";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.submit = this.submit.bind(this);

		this.state = {
			"email": "",
			"password": "",
			"rememberme": false
		};
	}
	submit(e) {
		e.preventDefault();
		this.props.loginSubmit(this.state);
		this.props.history.push("/");
	}
	handleInputChange(event) {
		let target = event.target;
		let value = target.type === "checkbox" ? target.checked : target.value;
		let name = target.name;

		this.setState({
			[name]: value
		});
	}
	render() {
		return <div className="container" id="loginpage">
			<div>
				<img src="src/img/SB.jpg" width="250" height="250" className="mx-auto d-block" />
			</div>
			<form onSubmit={this.submit}>
				<div className="form-group">
					<label htmlFor="email">Email Address</label>
					<input
						type="email"
						className="form-control"
						name="email"
						id="email"
						placeholder="Email"
						required
						value={this.state.email}
						onChange={this.handleInputChange} />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						className="form-control"
						name="password"
						id="password"
						placeholder="Password"
						required
						value={this.state.password}
						onChange={this.handleInputChange} />
				</div>
				<div className="form-group">
					<div className="form-check">
						<input 
							type="checkbox"
							className="form-check-input"
							name="rememberme"
							id="rememberme"
							value={this.state.rememberme}
							onChange={this.handleInputChange} />
						<label className="form-check-label" htmlFor="rememberme">Remember Me</label>
					</div>
				</div>
				<div className="btn-toolbar" role="toolbar">
					<button type="submit" className="btn btn-primary">Login</button>&nbsp;
					<Link to="/signup" className="btn btn-secondary">Sign Up</Link>
				</div>
			</form>
		</div>;
	}
}

export default LoginPage;