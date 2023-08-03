import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Modal() {
  const [answer, setAnswer] = useState("");
  const dispatch = useDispatch();

  const submit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>{Card.quest}</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          name="Answer"
          placeholder="Ваш Ответ"
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button type="submit">Ответить</button>
      </form>
    </div>
  );
}

export default Modal;
