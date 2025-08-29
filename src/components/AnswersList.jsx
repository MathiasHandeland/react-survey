import AnswersItem from "./AnswersItem";

function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  const { answersList } = props; // get answersList from props

  // render a AnswerItem component for each answer in the list
  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}

export default AnswersList;
