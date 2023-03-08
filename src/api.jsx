import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com//'

export const API = axios.create({
  baseURL: url
})

export const getAllTodosFn = async (signal) => {
  const res = await API.get('todos', { signal })
  return res
}

export const postTodoFn = async (data) => {
  const res = await API.post('todos', data)
  return res
}

export const deleteTodoFn = async (id) => {
  const res = await API.delete(`todos/${id}`)
  return res
}

export const updateTodoFn = async ({ id, data }) => {
  const res = await API.put(`todos/${id}`, data)
  return res
}