import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css'
import { useProducts } from './hooks/useQuery'


function App() {
  const {getAll} = useProducts({})
  const {data, isLoading, isError} = getAll
  console.log('data',data);
  console.log('isLoading',isLoading);
  console.log('isError',isError);
  
  return (
    <>
      <h1>Hello World</h1>
      {data?.products.map((product)=>(
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      ))}
      
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default App
