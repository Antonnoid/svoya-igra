export const QuestionFetch = async (idCard: number): Promise<Message> => {
  const res = await fetch(`api/cards/${idCard}`, {
    method: "delete",
  });
  const data = await res.json();
  return data;
};
