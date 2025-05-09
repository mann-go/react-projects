import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import FormObject from "../objects/FormObject";
import "../styles/Form.css";

export default function Form({ handleFormSubmit, formData }) {
  const [isLoading, setIsLoading] = useState("");
  const [workExperienceIdCounter, setWorkExperienceIdCounter] = useState(0);
  const [workExperienceIdList, setWorkExperienceIdList] = useState([]);
  const [sections, setSections] = useState(() => {
    return formData && Object.keys(formData).length > 0
      ? formData
      : new FormObject();
  });

  const workExperienceTemplate = {
    company_name: {
      name: "company-name",
      inputLabel: "Company Name",
      inputType: "text",
      value: "",
    },
    position_title: {
      name: "position-title",
      inputLabel: "Position Title",
      inputType: "text",
      value: "",
    },
    responsibilities: {
      name: "responsibilities",
      inputLabel: "Responsibilities",
      inputType: "textarea",
      value: "",
    },
    date_joined: {
      name: "date-joined",
      inputLabel: "Date Joined",
      inputType: "date",
      value: "",
    },
    date_left: {
      name: "date-left",
      inputLabel: "Date Left",
      inputType: "date",
      value: "",
    },
  };

  useEffect(() => {
    if (formData && Object.keys(formData).length > 0 && formData.work_experience) {
      setSections(formData);

      // Repopulate the work experience list based CV data
      const workExperienceIds = Object.keys(formData.work_experience);
      setWorkExperienceIdList(
        workExperienceIds.map((id) => ({ id: parseInt(id) }))
      );
      setWorkExperienceIdCounter(workExperienceIds.length);
    }
  }, [formData]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const form = e.target;
      const formData = new FormData(form);
      const data = { ...sections };

      Object.entries(data).forEach(([sectionKey, fields]) => {
        if (sectionKey === "work_experience") {
          const nestedWorkExperience = {};

          workExperienceIdList.forEach(({ id }) => {
            const entry = fields[id];
            nestedWorkExperience[id] = {};

            Object.entries(entry).forEach(([fieldKey, fieldObject]) => {
              const inputName = fieldObject.name;
              const newValue = formData.get(inputName);
              nestedWorkExperience[id][fieldKey] = {
                ...fieldObject,
                value: newValue !== null ? newValue : "n/a",
              };
            });
          });

          data[sectionKey] = nestedWorkExperience;
        } else {
          Object.entries(fields).forEach(([fieldKey, fieldObject]) => {
            const inputName = fieldObject.name;
            const newValue = formData.get(inputName);
            fieldObject.value = newValue !== null ? newValue : "n/a";
          });
        }
      });

      console.log(data);

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
    onRemoveWorkExperienceSection(id);
  }

  function onSetSections() {
    const newId = workExperienceIdCounter;

    const newExperienceEntry = JSON.parse(
      JSON.stringify(workExperienceTemplate)
    );

    Object.keys(newExperienceEntry).forEach((key) => {
      newExperienceEntry[key].name = `${key}-${newId}`;
    });

    setSections((prevSections) => ({
      ...prevSections,
      work_experience: {
        ...prevSections.work_experience,
        [newId]: newExperienceEntry,
      },
    }));

    onAddWorkExperience();
  }

  function onRemoveWorkExperienceSection(id) {
    const updatedWorkExperience = { ...sections.work_experience };
    delete updatedWorkExperience[id];

    setSections((prevSections) => ({
      ...prevSections,
      work_experience: updatedWorkExperience,
    }));
  }

  if (isLoading) {
    return <LoadingSpinner />;
  } else {
    return (
      <div className="form-container">
        <div className="form-header">
          <h1>CV Application</h1>
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <div className="section-header">
            <h2>Basic Details</h2>
          </div>
          <section className="active">
            {Object.entries(sections.basic_info).map(([key, item]) => (
              <FormInput
                key={key}
                name={item.name}
                inputLabel={item.inputLabel}
                inputType={item.inputType}
                value={item.value}
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
                inputLabel={item.inputLabel}
                inputType={item.inputType}
                value={item.value}
              />
            ))}
          </section>
          <div className="section-header">
            <h2>Previous Experience</h2>
            <button className="add" type="button" onClick={onSetSections}>
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
          {workExperienceIdList.map((entry) => {
            const entryId = entry.id.toString();
            const entryFields = sections.work_experience[entryId];

            return (
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
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                {entryFields &&
                  Object.entries(entryFields).map(([fieldKey, fieldValue]) => (
                    <FormInput
                      id={fieldValue.name}
                      key={fieldValue.name}
                      name={fieldValue.name}
                      inputLabel={fieldValue.inputLabel}
                      inputType={fieldValue.inputType}
                      value={fieldValue.value}
                    />
                  ))}
              </section>
            );
          })}
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

function FormInput({ id, name, inputLabel, inputType, value: initialValue }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(initialValue || "");
  }, [initialValue]);

  const ukPhonePattern =
  "^((\\+44\\s?([0-6]|[8-9])\\d{3}|\\(?0([0-6]|[8-9])\\d{3}\\)?)\\s?\\d{3}\\s?(\\d{2}|\\d{3})|((\\+44\\s?([0-6]|[8-9])\\d{3}|\\(?0([0-6]|[8-9])\\d{3}\\)?)\\s?\\d{3}\\s?(\\d{4}|\\d{3}))|((\\+44\\s?([0-6]|[8-9])\\d{1}|\\(?0([0-6]|[8-9])\\d{1}\\)?)\\s?\\d{4}\\s?(\\d{4}|\\d{3}))|((\\+44\\s?\\d{4}|\\(?0\\d{4}\\)?)\\s?\\d{3}\\s?\\d{3})|((\\+44\\s?\\d{3}|\\(?0\\d{3}\\)?)\\s?\\d{3}\\s?\\d{4})|((\\+44\\s?\\d{2}|\\(?0\\d{2}\\)?)\\s?\\d{4}\\s?\\d{4}))$";

  function handleSetValue(e) {
    setValue(e.target.value);
  }

  if (inputType === "tel") {
    return (
      <>
        <label htmlFor={id} className="form-item">
          <h3>{inputLabel}: (UK Only)</h3>
          <input
            id={id}
            name={name}
            type={inputType}
            value={value}
            onChange={handleSetValue}
            autoComplete="yes"
            pattern={ukPhonePattern}
            placeholder="+xx xxxx xxxxxxx"
            required
          />
        </label>
      </>
    );
  } else {
    return (
      <>
        <label htmlFor={id} className="form-item">
          <h3>{inputLabel}: </h3>
          <input
            id={id}
            name={name}
            type={inputType}
            value={value}
            onChange={handleSetValue}
            autoComplete="yes"
            required
          />
        </label>
      </>
    );
  }
}
