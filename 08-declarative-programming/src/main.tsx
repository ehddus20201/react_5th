
import '@/styles/main.css'
import '@/programming/imperative'
import { createRoot } from 'react-dom/client'
import Form from './programming/declarative'
// import '@/programming/declarative-step1'





const root = document.getElementById('root')

if(root){
  createRoot(root).render(
    <Form></Form>
  )
}










