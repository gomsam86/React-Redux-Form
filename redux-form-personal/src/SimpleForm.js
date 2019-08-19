import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validation from './validation'

class PersonalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  componentDidMount() {
    let tempCountries = [];
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => {
        return response.json();
      })
      .then(data => {
        tempCountries = data.map(country => {
          return country;
        });
        this.setState({
          countries: tempCountries
        });
      });
  }

  render() {
    const { countries } = this.state;
    const {error, handleSubmit, pristine, reset, submitting } = this.props;

    let countriesList =
      countries.length > 0 &&
      countries.map((item, i) => {
        return (
          <option key={i} value={item.name}>
            {item.name}
          </option>
        );
      }, this);

    return (
      <form onSubmit={handleSubmit(validation)}>
      {error && <strong>{error}</strong>}
        <div>
          <label>Personal Number</label>
          <div>
            <Field
              name="personalNumber"
              component="input"
              type="number"
              placeholder="Personal Number"
            />
          </div>
        </div>
        <div>
          <label>Phone Number</label>
          <div>
            <Field
              name="phoneNumber"
              component="input"
              type="number"
              placeholder="Phone Number"
            />
          </div>
        </div>

        <div>
          <label>Email</label>
          <div>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div>
          <label>Country</label>
          <div>
          <Field name="country" component="select">
            {countriesList}
            </Field>
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

PersonalForm = reduxForm({
  form: "SimpleForm"
})(PersonalForm);

export default PersonalForm;
