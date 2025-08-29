import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    color: "",
    timeSpent: [],
    review: ""
  });


  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const newTimeSpent = checked
          ? [...prev.timeSpent, value]
          : prev.timeSpent.filter((item) => item !== value);
        return { ...prev, timeSpent: newTimeSpent };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    console.log(formData); // log form data
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload

    console.log("Form submitted: ", formData); // log form data answers to the console when submitted

    setAnswersList((prev) => [...prev, formData]); // add new answer to list
    setFormData({ // reset form data
      username: "",
      email: "",
      color: "",
      timeSpent: [],
      review: ""
    });
  };

  return (
  <main className="survey">
    <section className={`survey__list ${open ? "open" : ""}`}>
      <h2>Answers list</h2>
      {/* answers should go here */}
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
                  checked={formData.timeSpent.includes("swimming")}
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
                  checked={formData.timeSpent.includes("bathing")}
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
                  checked={formData.timeSpent.includes("chatting")}
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
                  checked={formData.timeSpent.includes("noTime")}
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
          Leave us your email pretty please??
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
