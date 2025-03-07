import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Product from "./Product";
import Products from "./Products";
import UserInformation from "./UserInformation";
import EditUser from "./EditUser";
import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";
import ScrollToTop from "../components/ScrollToTop";

const Pages = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Switch>
				<PublicRoute onlyPublic exact path="/" component={Home} />
				<PublicRoute onlyPublic path="/products" component={Products} />
				<PublicRoute onlyPublic path="/product/:id" component={Product} />

				<PublicRoute path="/login" component={Login} />
				<PublicRoute path="/register" component={Register} />

				<PrivateRoute component={UserInformation} exact path="/user-information" />
				<PrivateRoute component={EditUser} path="/user-information/edit" />
			</Switch>
		</BrowserRouter>
	);
};

export default Pages;
