import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import FormObject from "./FormObject";

export default function Form({ handleFormSubmit, formData }) {
  const [isLoading, setIsLoading] = useState("");
  const [workExperienceIdCounter, setWorkExperienceIdCounter] = useState(0);
  const [workExperienceIdList, setWorkExperienceIdList] = useState([]);

  const sections = FormObject;

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const form = e.target;
      const formData = new FormData(form);

      const data = {
        basic_info: {
          first_name: formData.get("first-name"),
          last_name: formData.get("last-name"),
          email: formData.get("e-mail-address"),
          phone_number: formData.get("phone-number"),
        },
        education: {
          school_name: formData.get("school-name"),
          course: formData.get("course-studied"),
          date_started: formData.get("date-started"),
          date_completed: formData.get("date-completed"),
        },
        // Object most likely malformed, basic_info and education fields
        // correctly use xxx-xxx format while work_experience uses
        // xxx_xxx for some reason.
        work_experience: workExperienceIdList.map((entry) => ({
          company_name: formData.get(`company_name-${entry.id}`),
          position_title: formData.get(`position_title-${entry.id}`),
          responsibilities: formData.get(`responsibilities-${entry.id}`),
          date_joined: formData.get(`date_joined-${entry.id}`),
          date_left: formData.get(`date_left-${entry.id}`),
        })),
      };

      console.log("In Form: ", data);
      setIsLoading(false);
      handleFormSubmit(data);
    }, 2000);
  }

  function onAddWorkExperience() {
    setWorkExperienceIdList((prev) => [
      ...prev,
      {
        id: workExperienceIdCounter,
      },
    ]);

    setWorkExperienceIdCounter((prev) => prev + 1);
  }

  function onRemoveWorkExperience(id) {
    setWorkExperienceIdList((prev) => prev.filter((entry) => entry.id !== id));
  }

  if (Object.keys(formData)) {
    Object.entries(formData).map(([key, item]) => (
      console.log("Back In Form - Key: ", key, " Item: ", item)
     
    ))

  }

  if (isLoading) {
    return <LoadingSpinner />;
  } else {
    return (
      <div className="form-container">
        <h1>CV Application</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className="section-header">
            <h2>Basic Details</h2>
          </div>
          <section className="active">
            {Object.entries(sections.basic_info).map(([key, item]) => (
              <FormInput
                key={key}
                name={item.name}
                fieldName={item.fieldName}
                inputType={item.inputType}
                placeholder={item.placeholder}
              />
            ))}
          </section>
          <div className="section-header">
            <h2>Education</h2>
          </div>
          <section className="inactive">
            {Object.entries(sections.education).map(([key, item]) => (
              <FormInput
                key={key}
                name={item.name}
                fieldName={item.fieldName}
                inputType={item.inputType}
                placeholder={item.placeholder}
              />
            ))}
          </section>
          <div className="section-header">
            <h2>Previous Experience</h2>
            <button className="add" type="button" onClick={onAddWorkExperience}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
              </svg>
            </button>
          </div>
          {workExperienceIdList.map((entry) => (
            <section key={`work-experience-${entry.id}`}>
              <div className="action-header">
                <button
                  className="remove"
                  onClick={() => onRemoveWorkExperience(entry.id)}
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {Object.entries(sections.work_experience).map(([key, item]) => (
                <FormInput
                  id={`${key}-${entry.id}`}
                  key={`${key}-${entry.id}`}
                  name={`${key}-${entry.id}`}
                  fieldName={item.fieldName}
                  inputType={item.inputType}
                  placeholder={item.placeholder}
                ></FormInput>
              ))}
            </section>
          ))}
          <div className="button-container">
            <button className="add" type="submit" value="Submit CV">
              Submit CV
            </button>
            <button className="remove" type="reset" value="Reset Form">
              Reset From
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function FormInput({ id, name, fieldName, inputType, placeholder }) {
  const [value, setValue] = useState("");

  function handleSetValue(e) {
    setValue(e.target.value);
  }

  /* Formats a given fieldName to match xxx-xxx, e.g. First Name => first-name */
  function FormatFieldName(fieldName) {
    return fieldName.replace(/\s+/g, "-").toLowerCase();
  }

  return (
    <>
      <label htmlFor={id} className="form-item">
        <h3>{fieldName}: </h3>
        <input
          id={id}
          name={name}
          type={inputType}
          value={value}
          onChange={handleSetValue}
          placeholder={placeholder}
          autoComplete="yes"
          // required
        ></input>
      </label>
    </>
  );
}
