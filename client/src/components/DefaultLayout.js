import React from "react";
import { Menu, Dropdown, Button, Space, Row, Col } from "antd";
import { Link } from "react-router-dom";

function DefaultLayout(props) {
	const user = JSON.parse(localStorage.getItem("user"));
	const menu = (
		<Menu>
			<Menu.Item>
				<a href="/">Home</a>
			</Menu.Item>
			<Menu.Item>
				<a href="/userbookings">Bookings</a>
			</Menu.Item>
			<Menu.Item>
				<a href="/admin">Admin</a>
			</Menu.Item>
			<Menu.Item
				onClick={() => {
					localStorage.removeItem("user");
					window.location.href = "/login";
				}}
			>
				<li style={{ color: "orangered" }}>Logout</li>
			</Menu.Item>
		</Menu>
	);

	return (
		<div>
			<div className="header bs1">
				<div className="d-flex justify-content-between">
					<div class="heading-text">
						<h1>
							CarWISE Dev<span>Course project</span>
						</h1>
					</div>
				</div>
			</div>
			<div className="content">{props.children}</div>
		</div>
	);
}

export default DefaultLayout;
