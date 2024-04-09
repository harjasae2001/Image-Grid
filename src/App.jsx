import { useState } from "react";
import "./App.css";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import SearchForm from "./components/SearchForm";
import ImageGrid from "./components/ImageGrid";

const queryClient = new QueryClient();

function App() {
  const [searchTerm, setSearchTerm] = useState("");
 

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SearchForm onSearch={handleSearch} />
      {searchTerm.length > 0 ? <ImageGrid searchTerm={searchTerm} /> :<div></div>  }
    </QueryClientProvider>
  );
}

export default App;
