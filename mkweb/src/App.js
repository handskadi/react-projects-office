import "./App.css";
import React, { useState } from "react";

const defaultQuestions = [
  { id: 1, question: "Where is Morocco", answear: "Africa", checked: false },
  {
    id: 2,
    question: "Who is the King of Morocco",
    answear: "Mohamed VI",
    checked: false,
  },
  {
    id: 3,
    question: "Languages of Morocco",
    answear: "Tamazight & Arabic",
    checked: false,
  },
  { id: 4, question: "Capital of Morocco", answear: "Tabat", checked: false },
  {
    id: 5,
    question: "Biggest City in Morocco",
    answear: "Casablanca",
    checked: false,
  },
  {
    id: 6,
    question: "Population 2024",
    answear: "38.03 million",
    checked: false,
  },
];

function App() {
  const [questions, SetQuestions] = useState(defaultQuestions);

  function addQuestionsHandler(question) {
    SetQuestions((qs) => [...qs, question]);
  }

  function removeQuestionsHandler(id) {
    SetQuestions((qs) => qs.filter((question) => question.id !== id));
  }

  function toggleQuestionsHandler(id) {
    SetQuestions((qs) =>
      qs.map((question) =>
        question.id === id
          ? { ...question, checked: !question.checked }
          : question
      )
    );
  }
  return (
    <div className="App">
      <h1>FQA</h1>
      {/* <button className="btn btn-primary small">Learn more</button> */}
      <Form onAddQuestion={addQuestionsHandler} />
      <QA
        questions={questions}
        onRemoveQuestion={removeQuestionsHandler}
        onToggleQuestions={toggleQuestionsHandler}
      />
    </div>
  );
}

function Form({ onAddQuestion }) {
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  function submitHandler(e) {
    e.preventDefault();

    if (newQuestion === "" || newAnswer === "") return null;
    const newQA = {
      id: Date.now(),
      question: newQuestion,
      answear: newAnswer,
      checked: false,
    };
    onAddQuestion(newQA);

    setNewQuestion("");
    setNewAnswer("");
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Question...?"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Answer....?"
        value={newAnswer}
        onChange={(e) => setNewAnswer(e.target.value)}
      />
      <button>Add QA</button>
    </form>
  );
}
function QA({ questions, onRemoveQuestion, onToggleQuestions }) {
  const [selected, setSelected] = useState(null);
  const [sortBy, setSortBy] = useState("alphabet");

  let sortedQuestions = questions;

  if (sortBy === "input") sortedQuestions = questions;
  if (sortBy === "alphabet")
    sortedQuestions = questions
      .slice()
      .sort((a, b) => a?.question.localeCompare(b.question));
  return (
    <div className="question-card">
      {sortedQuestions.map((question) => (
        <div
          className={
            question.id === selected
              ? "selected"
              : question.checked
              ? "selected"
              : ""
          }
          // onClick={() => setSelected(question.id)}
          onMouseEnter={() => setSelected(question.id)}
          onMouseLeave={() => setSelected(null)}
          key={question.id}
          style={{ position: "relative" }}
        >
          {question.id === selected || question.checked ? (
            <>
              {question.answear}

              <button
                onClick={() => {
                  const confirmed = window.confirm(
                    `Are you sure you want to delete?`
                  );
                  confirmed && onRemoveQuestion(question.id);
                }}
              >
                x
              </button>
              <input
                type="checkbox"
                value={question.checked}
                onChange={() => {
                  onToggleQuestions(question.id);
                }}
              />
            </>
          ) : (
            question.question
          )}
        </div>
      ))}
      <p style={{ width: "100%" }}>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input</option>
          <option value="alphabet">Sort By alphabets</option>
        </select>
      </p>
    </div>
  );
}

export default App;
