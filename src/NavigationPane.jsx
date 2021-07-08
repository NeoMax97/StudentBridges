import React from "react";

class NavigationPane extends React.Component {
	constructor(props) {
		super(props);

		this.renderChildren = this.renderChildren.bind(this);
	}
	renderChildren() {
		return React.Children.map(this.props.children, child => {
			return React.cloneElement(child, {
				className: "nav-link",
				role: "tab"
			})
		});
	}
	render() {
		return <div className="nav flex-column nav-pills" role="tablist" id="navigationpane">
			{this.renderChildren()}
		</div>;
	}
}

export default NavigationPane;