import React from "react";

class Profile extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let name = this.props.user.firstName + " " + this.props.user.lastName;
		let role = "Student";
		let school = (this.props.user.personType === "umassStudent" ? "UMass Amherst" : this.props.user.schoolName);
		let major = (this.props.user.personType === "umassStudent" ? this.props.user.major : "");
		return <div className="p-3">
			<h1>Profile</h1>
			<h2>{name}</h2>
			<div>Role: {role}</div>
			<div>School: {school}</div>
			{major &&
				<div>Major: {major}</div>
			}
		</div>;
	}
}

export default Profile;