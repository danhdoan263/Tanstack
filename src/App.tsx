import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <h1>Hello World</h1>
      <TanStackRouterDevtools initialIsOpen={false}/>
    </QueryClientProvider>
    </>
  )
}

export default App
