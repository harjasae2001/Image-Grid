import { useState } from 'react'
import './App.css'
import imgGrid from './components/imageGrid'  
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: images, isLoading } = useQuery(['images', searchTerm], () => fetchImages(searchTerm), {
    enabled: !!searchTerm,
  });

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <>
      <searchForm onSearch={handleSearch} />
      {isLoading ? <div>Loading...</div> : <imageGrid images={images} />}
    </>
  )
}

export default App
