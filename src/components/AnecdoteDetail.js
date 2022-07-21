import { useParams } from 'react-router-dom';

const AnecdoteDetail = ({ anecdotes }) => {
  const id = useParams().id;

  const anecdote = anecdotes.find((n) => n.id === Number(id));

  return (
    <div>
      <h2>
        {anecdote.content} by {anecdote.author}
      </h2>
      <p>has {anecdote.votes} votes</p>

      <p>for more info see {anecdote.info}</p>
    </div>
  );
};

export default AnecdoteDetail;
