"use client";

import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const CreateContent = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);

  const handleChange = (name: string) => (e: any) => {
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "important":
        setImportant(e.target.checked);
        break;
      default:
        break;
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const task = {
      title,
      description,
      date,
      completed,
      important
    };

    try {
      const res = await axios.post('/api/tasks', task);

      if (res.data.eror) {
        toast.error(res.data.eror)
      }

      toast.success('Tarefa criada com sucesso!')
    } catch (error) {
      toast.error('Erro ao criar uma tarefa!');
      console.log("Erro: ", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Criar uma tarefa</h1>
      <div className='input-control'>
        <label htmlFor='title'>Título</label>
        <input
          type='text'
          id='title'
          value={title}
          name='title'
          placeholder='Título'
          onChange={handleChange('title')}
        />
      </div>
      <div className='input-control'>
        <label htmlFor='description'>Descrição</label>
        <textarea
          id='description'
          value={description}
          name='description'
          placeholder='Descrição da tarefa'
          rows={4}
          onChange={handleChange('description')}
        />
      </div>
      <div className='input-control'>
        <label htmlFor='date'>Data</label>
        <input
          type='date'
          id='date'
          value={date}
          name='date'
          onChange={handleChange('date')}
        />
      </div>
      <div className='input-control'>
        <label htmlFor='completed'>Finalizada</label>
        <input
          type='checkbox'
          id='completed'
          value={completed.toString()}
          name='completed'
          onChange={handleChange('completed')}
        />
      </div>
      <div className='input-control'>
        <label htmlFor='title'>Importante</label>
        <input
          type='checkbox'
          id='important'
          value={important.toString()}
          name='important'
          onChange={handleChange('important')}
        />
      </div>

      <div className='submit-btn'>
        <button type='submit'>
          <span>Criar</span>
        </button>
      </div>
    </form>
  )
}

export default CreateContent
