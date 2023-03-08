import { useRef } from 'react'
import { useGetTodos, usePostTodo } from './services'
import TodoItem from './TodoItem'
import './App.css'
import { Button, Center, Container, Flex, Input } from '@chakra-ui/react'
import { Text } from "@chakra-ui/react"
import { Spinner } from '@chakra-ui/react'

function App() {

  const inputRef = useRef()
  const { todos, isLoading, isError, error } = useGetTodos()
  const {
    isCreating,
    isSuccessCreating,
    isErrorCreating,
    errorCreateing,
    CreateTodo
  } = usePostTodo()

  if (isSuccessCreating) inputRef.current.value = ''

  const handleAddTodo = () => {
    const data = {
      title: inputRef.current.value,
      completed: false
    }

    CreateTodo(data)
  }

  return (
    <Container height='container.md'>
      <Text fontSize='2xl' align='center' marginY={10}>TODO APP</Text>
      <div className='input-form'>
        <Flex>
          <Input type='text' ref={inputRef} />
          <Button onClick={handleAddTodo}>Add Todo</Button>
        </Flex>
        {isErrorCreating && <p>{errorCreateing.message}</p>}
      </div>
      {isLoading && (
        <Center>
          <Spinner size='xl' />
        </Center>
        )
      }
      {isError && <p>{error.message}</p>}
      <div className='content-container'>
        {todos && todos.map((todo, i) => <TodoItem key={i} {...todo} />)}
      </div>
      {isCreating && <p>Loading..</p>}
    </Container>
  )
}

export default App
