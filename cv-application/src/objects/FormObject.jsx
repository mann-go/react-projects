export default class FormObject {
  constructor() {
    this.basic_info = {
      first_name: {
        name: "first-name",
        inputLabel: "First Name",
        inputType: "text",
        value: "",
      },
      last_name: {
        name: "last-name",
        inputLabel: "Last Name",
        inputType: "text",
        value: "",
      },
      email: {
        name: "e-mail-address",
        inputLabel: "E-Mail Address",
        inputType: "email",
        value: "",
      },
      phone_number: {
        name: "phone number",
        inputLabel: "Phone Number",
        inputType: "tel",
        value: "",
      },
    };
    this.education = {
      school_name: {
        name: "school-name",
        inputLabel: "School Name",
        inputType: "text",
        value: "",
      },
      course: {
        name: "course-studied",
        inputLabel: "Course Studied",
        inputType: "text",
        value: "",
      },
      date_started: {
        name: "date-started",
        inputLabel: "Date Started",
        inputType: "date",
        value: "",
      },
      date_completed: {
        name: "date-completed",
        inputLabel: "Date Completed",
        inputType: "date",
        value: "",
      },
    };
  }
}
