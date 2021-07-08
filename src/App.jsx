import React from "react";
import { Route, Switch, Redirect } from "react-router";
import swal from "sweetalert2";
import Portal from "./Portal.jsx";
import LoginPage from "./LoginPage.jsx";
import SignUpPage from "./SignUpPage.jsx";
import "./style.scss";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tryLogin = this.tryLogin.bind(this);
		this.signup = this.signup.bind(this);

		this.state = {
			// users: [],
			users: [{
				dateOfBirth: "1997-09-08",
				email: "gukovskye@gmail.com",
				ethnicity: "White / Caucasian",
				ethnicityOther: "",
				firstGen: false,
				firstName: "Eli",
				graduationMonth: "2019-12",
				lastName: "Gukovsky",
				major: "Computer Science",
				parentEmail: "",
				password: "1234",
				personType: "umassStudent",
				phone: "1-800-867-5309",
				pronouns: "He/him/his",
				pronounsOther: "",
				schoolName: "",
				topCollegeChoiceOne: "",
				topCollegeChoiceThree: "",
				topCollegeChoiceTwo: "",
				workStudy: false
			}],
			activeUser: null
		}
	}
	tryLogin(attemptedUser) {
		let matchedUsers = this.state.users.filter(user => user["email"] === attemptedUser["email"] && user["password"] === attemptedUser["password"]);
		if (matchedUsers.length == 1) {
			this.setState({
				activeUser: matchedUsers[0]
			});
		}
		else {
			swal({
				title: "Incorrect email or password.",
				type: "error"
			});
		}
	}
	signup(newUser) {
		if (this.state.users.some(user => user["email"] === newUser["email"])) {
			swal({
				title: "User with this email already exists",
				type: "error"
			});
			return;
		}
		this.setState(prevState => ({
			users: [...prevState.users, newUser]
		}));
		swal({
			title: "Successful sign up!",
			type: "success"
		});
	}
	render() {
		return <Switch> 
			{ this.state.activeUser !== null && 
				<Route render={(props) => <Portal {...props} user={this.state.activeUser} />} />
			}
			<Route path="/login" render={(props) => <LoginPage {...props} loginSubmit={this.tryLogin} />} />
			<Route path="/signup" render={(props) => <SignUpPage {...props} signupSubmit={this.signup} />} />
			<Route render={() => <Redirect to="/login" />} />
		</Switch>;
	}
}

export default App;