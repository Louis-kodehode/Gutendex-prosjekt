import React, { useContext } from "react";
import { AppContext } from "../App";
import BookCard from "../Components/BookCard";

export default function FavouritesView() {
  const { favourites } = useContext(AppContext);
  return (
    <>
      <div className="result-view">
        {favourites.map((e) => (
          <BookCard image={e.formats["image/jpeg"]} title={e.title} id={e.id} />
        ))}
      </div>
    </>
  );
}
