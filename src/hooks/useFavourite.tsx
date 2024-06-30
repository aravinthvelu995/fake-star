import { useEffect, useState } from "react";

const useFavourite = () => {
  const [favourites, setFavourites] = useState<number[]>([]);

  useEffect(() => {
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) {
      setFavourites(JSON.parse(storedFavourites));
    }
  }, []);

  const addFavourite = (movieId: number) => {
    if (!favourites.includes(movieId)) {
      const newFavourites = [...favourites, movieId];
      setFavourites((prevFavourites) => [...prevFavourites, movieId]);
      localStorage.setItem("favourites", JSON.stringify(newFavourites));
    }
  };

  const removeFavourite = (movieId: number) => {
    const newFavourites = favourites.filter((id) => id !== movieId);
    setFavourites(newFavourites);
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
  };

  const isFavourite = (movieId: number) => favourites.includes(movieId);

  return { favourites, addFavourite, removeFavourite, isFavourite };
};

export default useFavourite;
