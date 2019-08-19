import { SubmissionError } from "redux-form";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function submit(values) {
  await sleep(1000);
  if (!values.personalNumber) {
    throw new SubmissionError({
      personalNumber: "Personal Number is mandatory",
      _error: "Personal Number is mandatory"
    });
  }
  else if (values.personalNumber.length < 12 || values.personalNumber.length > 12) {
    throw new SubmissionError({
      personalNumber: "Personal Number is Wrong",
      _error: "Personal Number must be a 12 digits number"
    });
  }
  if (!values.phoneNumber) {
    throw new SubmissionError({
      personalNumber: "Phone Number is mandatory",
      _error: "Phone Number is mandatory"
    });
  }
  if (!values.email) {
    throw new SubmissionError({
      email: "Email Address is mandatory",
      _error: "Email Address is mandatory"
    });
  }
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (!(values.phoneNumber.match(phoneno))) {
    throw new SubmissionError({
      phoneNumber: "Phone Number is invalid",
      _error: "Phone Number is invalid"
    });
  }
  else {
    localStorage.clear();
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 3)}`);
  }
}

export default submit;
