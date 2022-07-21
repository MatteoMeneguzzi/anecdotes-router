import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useField } from '../hooks/index';

const CreateNew = ({ addNew, setNotification }) => {
  const content = useField('text');
  const contentCopy = { ...content };
  content.reset = null;
  const author = useField('text');
  const authorCopy = { ...author };
  author.reset = null;
  const info = useField('text');
  const infoCopy = { ...info };
  info.reset = null;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });
    navigate('/');
    setNotification(`a new anecdote ${content.value} created!`);
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <button>create</button>
      </form>
      <button
        onClick={() => {
          contentCopy.reset();
          authorCopy.reset();
          infoCopy.reset();
        }}
      >
        reset
      </button>
    </div>
  );
};

export default CreateNew;
