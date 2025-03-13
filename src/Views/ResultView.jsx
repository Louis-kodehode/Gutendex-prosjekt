import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import App from "../App";
import { useParams } from "react-router-dom";
import BookCard from "../Components/BookCard";
import { Link } from "react-router-dom";

export default function ResultView() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const params = useParams();

  console.log(params.search);

  const {
    loading,
    setLoading,
    setError,
    result,
    setResult,
    favourites,
    setFavourites,
    book,
    setBook,
  } = useContext(AppContext);
  const nextPage = "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);

        const response = await fetch(
          `https://gutendex.com/books?${params.search}`
        );
        console.log(response);

        const data = await response.json();
        console.log(data);
        setResult(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  return (
    <>
      <div className="result-view-container">
        {console.log(result)}
        <h1>ResultView</h1>
        {loading && <p>Loading...</p>}
        {result && (
          <>
            <ol className="result-view">
              {console.log(result)}
              {result.results.map((e) => (
                // <li key={e.id}>{e.title}</li>
                <div className="book-container">
                  <BookCard
                    image={e.formats["image/jpeg"]}
                    title={e.title}
                    id={e.id}
                  />
                  <button
                    className="book-page-button"
                    onClick={() => {
                      console.log(e.id);
                      setFavourites((prev) => {
                        const bookInList = prev.find(
                          (element) => element.id === e.id
                        );

                        // removes book if already in the list
                        if (bookInList) {
                          console.log("book in list");
                          return prev.toSpliced(prev.indexOf(bookInList), 1);
                        } else {
                          console.log("not in list");
                          return [...prev, e];
                        }
                      });
                      console.log(favourites);
                    }}
                  >
                    {favourites.find((element) => element.id === e.id)
                      ? "Unfavourite"
                      : "Favourite"}
                  </button>
                </div>
              ))}
            </ol>

            <div className="button-container">
              {result.next && (
                <Link
                  onClick={scrollToTop}
                  to={`/Gutendex-prosjekt/result/${result.next.slice(28)}`}
                  className="next-button"
                  // onclick="window={.location.href:'#top'}"
                >
                  NEXT
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
