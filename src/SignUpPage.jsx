import React from "react";

class SignUpPage extends React.Component {
	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.submit = this.submit.bind(this);

		this.state = {
			"firstName": "",
			"lastName": "",
			"email": "",
			"password": "",
			"phone": "",
			"dateOfBirth": "",
			"pronouns": "",
			"pronounsOther": "",
			"ethnicity": "",
			"ethnicityOther": "",
			"firstGen": false,
			"personType": "",
			"schoolName": "",
			"parentEmail": "",
			"graduationMonth": "",
			"topCollegeChoiceOne": "",
			"topCollegeChoiceTwo": "",
			"topCollegeChoiceThree": "",
			"major": "",
			"workStudy": false
		};
	}
	submit(e) {
		e.preventDefault();
		this.props.signupSubmit(this.state);
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
		return <div className="container" id="signuppage">
			<div>
				<img src="src/img/SB.jpg" width="250" height="250" className="mx-auto d-block" />
			</div>
			<form onSubmit={this.submit}>
				<div className="form-row">
					<div className="form-group col-sm-6">
						<label htmlFor="firstName">First name</label>
						<input
							type="input"
							className="form-control"
							name="firstName"
							id="firstName"
							placeholder="Joe"
							required
							value={this.state.firstName}
							onChange={this.handleInputChange} />
					</div>
					<div className="form-group col-sm-6">
						<label htmlFor="lastName">Last name</label>
						<input
							type="input"
							className="form-control"
							name="lastName"
							id="lastName"
							placeholder="Smith"
							required
							value={this.state.lastName}
							onChange={this.handleInputChange} />
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email Address</label>
					<input
						type="email"
						className="form-control"
						name="email"
						id="email"
						placeholder="name@example.com"
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
						placeholder="my_secure_password"
						required
						value={this.state.password}
						onChange={this.handleInputChange} />
				</div>
				<div className="form-group">
					<label htmlFor="phone">Phone Number</label>
					<input
						type="tel"
						className="form-control"
						name="phone"
						id="phone"
						placeholder="202-555-0146"
						required
						value={this.state.phone}
						onChange={this.handleInputChange} />
				</div>
				<div className="form-group">
					<label htmlFor="dateOfBirth">Date of birth</label>
					<input
						type="date"
						className="form-control"
						name="dateOfBirth"
						id="dateOfBirth"
						required
						value={this.state.dateOfBirth}
						onChange={this.handleInputChange} />
				</div>
				<div className="form-group">
					<label className="form-check-label">Pronouns</label>
					<div className="form-check">
						<input
							type="radio"
							className="form-check-input"
							name="pronouns"
							id="pronounsHe"
							value="He/him/his"
							required
							onChange={this.handleInputChange} />
						<label className="form-check-label" htmlFor="pronounsHe">He/him/his</label>
					</div>
					<div className="form-check">
						<input
							type="radio"
							className="form-check-input"
							name="pronouns"
							id="pronounsShe"
							value="She/her/hers"
							required
							onChange={this.handleInputChange} />
						<label className="form-check-label" htmlFor="pronounsShe">She/her/hers</label>
					</div>
					<div className="form-check">
						<input
							type="radio"
							className="form-check-input"
							name="pronouns"
							id="pronounsThey"
							value="They/them/theirs"
							required
							onChange={this.handleInputChange} />
						<label className="form-check-label" htmlFor="pronounsThey">They/them/theirs</label>
					</div>
					<div className="form-check">
						<input
							type="radio"
							className="form-check-input"
							name="pronouns"
							id="pronounsOther"
							value="other"
							required
							onChange={this.handleInputChange} />
						<label className="form-check-label" htmlFor="pronounsOther">Other (please specify)</label>
					</div>
					{this.state.pronouns === "other" &&
						<div className="form-group">
							<input
								type="input"
								className="form-control"
								name="pronounsOther"
								id="pronounsOtherSpecify"
								placeholder="Ze/hir/hir"
								required
								value={this.state.pronounsOther}
								onChange={this.handleInputChange} />
						</div>
					}
				</div>
				<div className="form-group">
					<label htmlFor="ethnicity">Ethnicity</label>
					<select
						type="ethnicity"
						className="form-control"
						name="ethnicity"
						id="ethnicity"
						required
						onChange={this.handleInputChange}>
						<option value="">Choose...</option>
						<option>White / Caucasian</option>
						<option>Black / African American</option>
						<option>Asian</option>
						<option>Hispanic / Latinx</option>
						<option>Native American or Alaskan Native</option>
						<option>Pacific Islander</option>
						<option>Mixed</option>
						<option value="other">Other (please specify)</option>
					</select>
				</div>
				{this.state.ethnicity === "other" &&
					<div className="form-group">
						<input
							type="input"
							className="form-control"
							name="ethnicityOther"
							id="ethnicityOtherSpecify"
							placeholder="Cuban"
							required
							value={this.state.ethnicityOther}
							onChange={this.handleInputChange} />
					</div>
				}
				<div className="form-group">
					<div className="form-check">
						<input
							type="checkbox"
							className="form-check-input"
							name="firstGen"
							id="firstGen"
							checked={this.state.firstGen}
							onChange={this.handleInputChange} />
						<label className="form-check-label" htmlFor="firstGen">First generation college student</label>
					</div>
				</div>
				<div className="form-group">
					<label className="form-check-label">Are you in high school or are you a student at UMass Amherst?</label>
					<div className="form-check">
						<input
							type="radio"
							className="form-check-input"
							name="personType"
							id="personTypeHighSchool"
							value="highschool"
							required
							onChange={this.handleInputChange} />
						<label className="form-check-label" htmlFor="personTypeHighSchool">High School</label>
					</div>
					<div className="form-check">
						<input
							type="radio"
							className="form-check-input"
							name="personType"
							id="personTypeUmassStudent"
							value="umassStudent"
							required
							onChange={this.handleInputChange} />
						<label className="form-check-label" htmlFor="personTypeUmassStudent">UMass</label>
					</div>
				</div>
				{this.state.personType === "highschool" &&
				<div>
					<div className="form-group">
						<label htmlFor="schoolName">Name of your school</label>
						<input
							type="input"
							className="form-control"
							name="schoolName"
							id="schoolName"
							placeholder="Amherst-Pelham Regional High School"
							required
							value={this.state.schoolName}
							onChange={this.handleInputChange} />
					</div>
					<div className="form-group">
						<label htmlFor="parentEmail">Parent/Guardian's email address</label>
						<input
							type="email"
							className="form-control"
							name="parentEmail"
							id="parentEmail"
							placeholder="parent@example.com"
							required
							value={this.state.parentEmail}
							onChange={this.handleInputChange} />
					</div>
					<div className="form-group">
						<label htmlFor="graduationMonth">High school graduation date</label>
						<input
							type="month"
							className="form-control"
							name="graduationMonth"
							id="graduationMonth"
							required
							value={this.state.graduationMonth}
							onChange={this.handleInputChange} />
					</div>
					<div className="form-row">
						<div className="form-group col-sm-4">
							<label htmlFor="topCollegeChoiceOne">Top college choice #1</label>
							<input
								type="input"
								className="form-control"
								name="topCollegeChoiceOne"
								id="topCollegeChoiceOne"
								placeholder="UMass Amherst"
								required
								value={this.state.topCollegeChoiceOne}
								onChange={this.handleInputChange} />
						</div>
						<div className="form-group col-sm-4">
							<label htmlFor="topCollegeChoiceTwo">Top college choice #2</label>
							<input
								type="input"
								className="form-control"
								name="topCollegeChoiceTwo"
								id="topCollegeChoiceTwo"
								value={this.state.topCollegeChoiceTwo}
								onChange={this.handleInputChange} />
						</div>
						<div className="form-group col-sm-4">
							<label htmlFor="topCollegeChoiceThree">Top college choice #3</label>
							<input
								type="input"
								className="form-control"
								name="topCollegeChoiceThree"
								id="topCollegeChoiceThree"
								value={this.state.topCollegeChoiceThree}
								onChange={this.handleInputChange} />
						</div>
					</div>
				</div>
				}
				{this.state.personType === "umassStudent" &&
				<div>
					<div className="form-group">
						<label htmlFor="major">Major</label>
						<select
							type="major"
							className="form-control"
							name="major"
							id="major"
							required
							onChange={this.handleInputChange}>
							<option value="">Choose...</option>
							<option>Undecided</option>
							<option>Accounting</option>
							<option>Afro-American Studies</option>
							<option>Animal Science</option>
							<option>Anthropology</option>
							<option>Arboriculture & Community Forest Management</option>
							<option>Architecture</option>
							<option>Art</option>
							<option>Art Education</option>
							<option>Art History</option>
							<option>Astronomy</option>
							<option>Bachelor's Degree with Individual Concentration</option>
							<option>Biochemistry and Molecular Biology</option>
							<option>Biology</option>
							<option>Building & Construction Technology</option>
							<option>Chemical Engineering</option>
							<option>Chemistry</option>
							<option>Chinese Language & Literature</option>
							<option>Civil Engineering</option>
							<option>Classics</option>
							<option>Classics and Philosophy</option>
							<option>Communication</option>
							<option>Communication Disorders</option>
							<option>Comparative Literature</option>
							<option>Computer Science</option>
							<option>Computer Systems Engineering</option>
							<option>Dance</option>
							<option>Earth Systems</option>
							<option>Economics</option>
							<option>Education</option>
							<option>Electrical Engineering</option>
							<option>English</option>
							<option>Environmental Science</option>
							<option>Equine Management</option>
							<option>Finance</option>
							<option>Food Science</option>
							<option>French & Francophone Studies</option>
							<option>Geography</option>
							<option>Geology</option>
							<option>German and Scandinavian Studies</option>
							<option>History</option>
							<option>Horticulture Science</option>
							<option>Hospitality & Tourism Management</option>
							<option>Industrial Engineering</option>
							<option>Italian Studies</option>
							<option>Japanese Language & Literature</option>
							<option>Journalism</option>
							<option>Judaic Studies</option>
							<option>Kinesiology</option>
							<option>Landscape Architecture</option>
							<option>Landscape Contracting</option>
							<option>Legal Studies</option>
							<option>Linguistics</option>
							<option>Linguistics and Anthropology</option>
							<option>Linguistics and Chinese</option>
							<option>Linguistics and German</option>
							<option>Linguistics and Japanese</option>
							<option>Linguistics and Philosophy</option>
							<option>Linguistics and Portuguese</option>
							<option>Linguistics and Psychology</option>
							<option>Linguistics and Russian</option>
							<option>Linguistics and Spanish</option>
							<option>Management</option>
							<option>Marketing</option>
							<option>Mathematics</option>
							<option>Mechanical Engineering</option>
							<option>Microbiology</option>
							<option>Middle Eastern Studies</option>
							<option>Music</option>
							<option>Natural Resources Conservation</option>
							<option>Nursing</option>
							<option>Nutrition</option>
							<option>Operations and Information Management</option>
							<option>Philosophy</option>
							<option>Physics</option>
							<option>Plant & Soil Science</option>
							<option>Political Science</option>
							<option>Portuguese</option>
							<option>Pre-Medical/Pre-Health</option>
							<option>Pre-Veterinary</option>
							<option>Psychology</option>
							<option>Public Health Sciences</option>
							<option>Resource Economics</option>
							<option>Russian and East European Studies</option>
							<option>Science</option>
							<option>Social Thought and Political Economy</option>
							<option>Sociology</option>
							<option>Spanish</option>
							<option>Sport Management</option>
							<option>Sustainable Community Development</option>
							<option>Sustainable Food and Farming</option>
							<option>Theater</option>
							<option>Turfgrass Management</option>
							<option>Turfgrass Science and Management</option>
							<option>University Without Walls</option>
							<option>Women, Gender, Sexuality Studies</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="graduationMonth">Graduation date</label>
						<input
							type="month"
							className="form-control"
							name="graduationMonth"
							id="graduationMonth"
							required
							value={this.state.graduationMonth}
							onChange={this.handleInputChange} />
					</div>
					<div className="form-group">
						<div className="form-check">
							<input
								type="checkbox"
								className="form-check-input"
								name="workStudy"
								id="workStudy"
								checked={this.state.workStudy}
								onChange={this.handleInputChange} />
							<label className="form-check-label" htmlFor="workStudy">Eligible for work-study program</label>
						</div>
					</div>
				</div>
				}
				<button type="submit" className="btn btn-primary">Sign Up</button>
			</form>
		</div>;
	}
}

export default SignUpPage;