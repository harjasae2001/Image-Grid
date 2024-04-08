import { useState } from 'react'
import './App.css'
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import SearchForm from './components/SearchForm'


const queryClient = new QueryClient()

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: images, isLoading } = useQuery(['images', searchTerm], () => fetchImages(searchTerm), {
    enabled: !!searchTerm,
  });

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
      <QueryClientProvider client={queryClient}>
      <SearchForm onSearch={handleSearch} />
      {isLoading ? <div>Loading...</div> : <ImageGrid images={images} />}
      </QueryClientProvider>
  )
}

export default App
