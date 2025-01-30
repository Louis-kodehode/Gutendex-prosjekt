import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import App from "../App";
import { useParams } from "react-router-dom";
import BookCard from "../Components/BookCard";

export default function ResultView() {
  const params = useParams();

  console.log(params.search);

  const { loading, setLoading, setError, result, setResult } =
    useContext(AppContext);

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
      {console.log(result)}
      <h1>ResultView</h1>
      {loading && <p>Loading...</p>}
      {result && (
        <ol className="resultview">
          {console.log(result)}
          {result.results.map((e) => (
            // <li key={e.id}>{e.title}</li>

            <BookCard
              image={e.formats["image/jpeg"]}
              title={e.title}
              id={e.id}
            />
          ))}
        </ol>
      )}
    </>
  );
}
