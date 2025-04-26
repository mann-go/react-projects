import { useCallback, useState } from "react";
import Form from "./Form";

/**
 * TODO:
 * Make a submitted CV editable
 * Pass CV data back to form to repopulate
 * Make a "Add" and "Remove" button for extra "Previous Experience" blocks - DONE
 */

export default function CV() {
  const [isFormSubmitted, setIsFormSubmitted] = useState("");
  const [cvData, setCVData] = useState({});

  const handleFormSubmit = useCallback(
    (formObject) => {
      setIsFormSubmitted(!isFormSubmitted);
      setCVData(formObject);
    },
    [isFormSubmitted]
  );

  function handleFormEdit() {
    setIsFormSubmitted(false);
  }

  if (!isFormSubmitted) {
    return (
      <>
        <Form
          isFormSubmitted={isFormSubmitted}
          handleFormSubmit={handleFormSubmit}
          formData={cvData}
        />
      </>
    );
  } else {
    return (
      <>
        <div className="cv-header">
          <h1>My CV</h1>
          <button type="button" onClick={() => handleFormEdit(cvData)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" />
            </svg>
          </button>
        </div>

        <CVContainer cvData={cvData} />
      </>
    );
  }
}

function CVContainer({ cvData }) {
  console.log("CV Container: ", cvData);

  const sectionTitles = {
    basic_info: "Basic Information",
    education: "Education",
    work_experience: "Work Experience",
  };

  return (
    <div className="cv-container">
      {Object.entries(cvData).map(([section, data]) => (
        <CVItem key={section} title={sectionTitles[section]} data={data} />
      ))}
    </div>
  );
}

function CVItem({ title, data }) {
  function formatKey(key) {
    return key
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  function renderItems(data) {
    return Object.entries(data).map(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        return (
          <div className="work-experience-item" key={key}>
            {renderItems(value)}
          </div>
        );
      }

      // Flat case: Directly render the key-value pair
      return (
        <p key={`${key}-${value}`}>
          <strong>{formatKey(key)}:</strong> {value}
        </p>
      );
    });
  }

  const items = renderItems(data);

  return (
    <section className="cv-item">
      <div className="cv-item-header">
        <h3>{formatKey(title)}</h3>
      </div>
      <div className="cv-item-body">{items}</div>
    </section>
  );
}
