// src/components/SearchForm.js
import { useForm } from "react-hook-form";

const SearchForm = ({ onSearch }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    onSearch(data.searchTerm);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("searchTerm")} placeholder="Search for images" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;