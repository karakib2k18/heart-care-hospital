// import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from './components/Services/Services';
import Appointment from './components/Shared/HooksForm/Appointment/Appointment';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';
import Home from './components/Home/Home/Home';
import SignUp from './components/Shared/HooksForm/LoginSignUp/SignUp';
import Login from './components/Shared/HooksForm/LoginSignUp/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/Shared/HooksForm/PrivateRoute/PrivateRoute';
import Doctors from './components/Doctors/Doctors/Doctors';
import SingleDoctor from './components/Doctors/SingleDoctor/SingleDoctor';
import BlogDetails from './components/Blogs/BlogDetails/BlogDetails';
import ServicesDetails from './components/Services/ServicesDetails';

function App() {

  return (

    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/doctors">
              <Doctors />
            </Route>
            <PrivateRoute path="/doctors/:doctorId">
              <SingleDoctor />
            </PrivateRoute>
            <Route exact path="/blogs">
              <Blogs />
            </Route>
            <PrivateRoute path="/blogs/:blogsId">
              <BlogDetails />
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute>
            <Route exact path="/services">
              <Services />
            </Route>
            <PrivateRoute exact path="/services/:serviceId">
              <ServicesDetails />
            </PrivateRoute>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
