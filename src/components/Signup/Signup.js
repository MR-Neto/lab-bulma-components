import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import FormField from '../FormField/FormField';
import CoolButton from '../CoolButton/CoolButton';




class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>

        <form action="">
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" placeholder="your password" />
          <CoolButton isPrimary className="is-rounded">Submit</CoolButton>
        </form>
      </div>
    );
  }
}

export default Signup;