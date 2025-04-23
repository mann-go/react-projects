export default function Form() {
  return (
    <div className="form-container">
      <h1>CV Application</h1>
      <form>
        <h2 className="form-heading">General Information</h2>
        <section className="active">
          <FormInput fieldName="First Name" inputType="text" />
          <FormInput fieldName="Last Name" inputType="text" />
          <FormInput fieldName="E-Mail Address" inputType="email" />
          <FormInput fieldName="Phone Number" inputType="tel" />
        </section>
        <h2 className="form-heading">Education</h2>
        <section className="inactive">
          <FormInput fieldName="School Name" inputType="text" />
          <FormInput fieldName="Course Studied" inputType="text" />
          <FormInput fieldName="Date Started" inputType="date" />
          <FormInput fieldName="Date Completed" inputType="date" />
        </section>
        <h2 className="form-heading">Previous Experience</h2>
        <section>
          <FormInput fieldName="Company Name" inputType="text" />
          <FormInput fieldName="Position Title" inputType="text" />
          <FormInput fieldName="Date Joined" inputType="date" />
          <FormInput fieldName="Date Left" inputType="date" />
        </section>

        <button onSubmit={""} value="Submit CV">
          Submit CV
        </button>
      </form>
    </div>
  );
}

function FormInput({ fieldName, inputType }) {
  return (
    <>
      <label htmlFor={FormatFieldName(fieldName)} className="form-item">
        <h3>{fieldName}: </h3>
        <input
          id={FormatFieldName(fieldName)}
          name={fieldName}
          type={inputType}
          placeholder={fieldName}
          autoComplete="yes"
        ></input>
      </label>
    </>
  );
}

/* Formats a given fieldName to match xxx-xxx, e.g. First Name => first-name */
function FormatFieldName(fieldName) {
  return fieldName.replace(/\s+/g, "-").toLowerCase();
}
