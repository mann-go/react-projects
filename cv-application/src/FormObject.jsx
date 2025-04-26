const FormObject = {
    basic_info: {
      first_name: {
        name: "first-name",
        fieldName: "First Name",
        inputType: "text",
        placeholder: "John",
      },
      last_name: {
        name: "last-name",
        fieldName: "Last Name",
        inputType: "text",
        placeholder: "Doe",
      },
      email: {
        name: "e-mail-address",
        fieldName: "E-Mail Address",
        inputType: "email",
        placeholder: "example@email.com",
      },
      phone_number: {
        name: "phone number",
        fieldName: "Phone Number",
        inputType: "tel",
        placeholder: "+xx xxxx xxxx",
      },
    },
    education: {
      school_name: {
        name: "school-name",
        fieldName: "School Name",
        inputType: "text",
        placeholder: "University of the Highlands and Islands",
      },
      course: {
        name: "course-studied",
        fieldName: "Course Studied",
        inputType: "text",
        placeholder: "Mathematics",
      },
      date_started: {
        name: "date-started",
        fieldName: "Date Started",
        inputType: "date",
      },
      date_completed: {
        name: "date-completed",
        fieldName: "Date Completed",
        inputType: "date",
      },
    },
    work_experience: {
      company_name: {
        name: "company-name",
        fieldName: "Company Name",
        inputType: "text",
        placeholder: "Tesco",
      },
      position_title: {
        name: "position-title",
        fieldName: "Position Title",
        inputType: "text",
        placeholder: "Shop Assistant",
      },
      responsibilities: {
        name: "responsibilities",
        fieldName: "Responsibilities",
        inputType: "textarea",
        placeholder: "Deliveries, management, front of store, etc.",
      },
      date_joined: {
        name: "date-joined",
        fieldName: "Date Joined",
        inputType: "date",
      },
      date_left: {
        name: "date-left",
        fieldName: "Date Left",
        inputType: "date",
      },
    },
  };

  export default FormObject;