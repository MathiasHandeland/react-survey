import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([]); // stores all submitted answers in state
  const [formData, setFormData] = useState({ // holds all current input values of the form, changes when typing
    username: "",
    email: "",
    color: "",
    interactionTypes: [],
    review: ""
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target; // the input elements triggering change

    if (type === "checkbox") {
        let newInteractionType = [...formData.interactionTypes];
        if (checked) {
          newInteractionType.push(value); // add the interaction type to the array if checked
        } else {
          newInteractionType = newInteractionType.filter(item => item !== value); // remove if unchecked
        }
        setFormData({ ...formData, interactionTypes: newInteractionType }); // update interactionTypes array
      } else { // handle all other input types than checkbox
        setFormData({ ...formData, [name]: value });
      }
    console.log(formData); // log the current form data
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload

    console.log("Form submitted: ", formData); // log form data answers to the console when submitted

    setAnswersList([
      ...answersList,
      {
        username: formData.username,
        color: formData.color,
        interactionTypes: formData.interactionTypes,
        review: formData.review
      }
    ]);

    console.log(answersList);
    // reset form data after submission
    setFormData({ 
      username: "",
      email: "",
      color: "",
      interactionTypes: [],
      review: ""
    });
  };

  return (
  <main className="survey">
    <section className={`survey__list ${open ? "open" : ""}`}>
      <h2>Answers list</h2>
      {/* This section shows all submitted answers */}
      <AnswersList answersList={answersList} />
    </section>

    <section className="survey__form">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Tell us what you think about your rubber duck!</h2>

        <div className="form__group radio">
          <h3>How do you rate your rubber duck color?</h3>
          <ul>
            <li>
              <input
                id="color-one"
                type="radio"
                name="color"
                value="1"
                checked={formData.color === "1"}
                onChange={handleChange}
              />
              <label htmlFor="color-one">1</label>
            </li>
            <li>
              <input
                id="color-two"
                type="radio"
                name="color"
                value="2"
                checked={formData.color === "2"}
                onChange={handleChange}
              />
              <label htmlFor="color-two">2</label>
            </li>
            <li>
              <input
                id="color-three"
                type="radio"
                name="color"
                value="3"
                checked={formData.color === "3"}
                onChange={handleChange}
              />
              <label htmlFor="color-three">3</label>
            </li>
            <li>
              <input
                id="color-four"
                type="radio"
                name="color"
                value="4"
                checked={formData.color === "4"}
                onChange={handleChange}
              />
              <label htmlFor="color-four">4</label>
            </li>
          </ul>
        </div>

        <div className="form__group">
          <h3>How do you like to spend time with your rubber duck</h3>
          <ul>
            <li>
              <label>
                <input
                  name="spend-time"
                  type="checkbox"
                  value="swimming"
                  checked={formData.interactionTypes.includes("swimming")}
                  onChange={handleChange}
                />
                Swimming
              </label>
            </li>
            <li>
              <label>
                <input
                  name="spend-time"
                  type="checkbox"
                  value="bathing"
                  checked={formData.interactionTypes.includes("bathing")}
                  onChange={handleChange}
                />
                Bathing
              </label>
            </li>
            <li>
              <label>
                <input
                  name="spend-time"
                  type="checkbox"
                  value="chatting"
                  checked={formData.interactionTypes.includes("chatting")}
                  onChange={handleChange}
                />
                Chatting
              </label>
            </li>
            <li>
              <label>
                <input
                  name="spend-time"
                  type="checkbox"
                  value="noTime"
                  checked={formData.interactionTypes.includes("noTime")}
                  onChange={handleChange}
                />
                I don’t like to spend time with it
              </label>
            </li>
          </ul>
        </div>

        <label>
          What else have you got to say about your rubber duck?
          <textarea
            name="review"
            cols="30"
            rows="10"
            value={formData.review}
            onChange={handleChange}
          />
        </label>

        <label>
          Put your name here (if you feel like it):
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>

        <label>
          Leave us your email pretty please?
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <input
          className="form__submit"
          type="submit"
          value="Submit Survey!"
        />
      </form>
    </section>
  </main>
);


}

export default Survey;
