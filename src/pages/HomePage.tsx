import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.png";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col mb-96">

      <div className="rounded-lg">
      <img src={hero} className="object-cover rounded-2xl " />
      </div>

      <div className="md:px-10 mx-auto w-full   bg-white rounded-lg shadow-md py-4 flex flex-col gap-5 text-center  md:-mt-20 lg:-mt-80 xl:-mt-96 lg:w-1/2 ">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
        Order your food Fast 
        </h1>
        <span className="text-xl">Restaurants and Cafes delivering near you</span>
        <SearchBar
          placeHolder="Enter your City "
          onSubmit={handleSearchSubmit}
        />
      </div>
      
    </div>
  );
};

export default HomePage;
