import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BookPageView() {
  const {
    book,
    setBook,
    loading,
    setLoading,
    setError,
    result,
    setResult,
    setFavourites,
    favourites,
  } = useContext(AppContext);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);

        const response = await fetch(`https://gutendex.com/books/${params.id}`);
        console.log(response);

        const data = await response.json();
        console.log(data);
        setBook(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  return loading ? (
    <p>loading...</p>
  ) : (
    <>
      {!loading && book.formats && (
        <div className="book-page-view">
          <div
            className="book-page-container"
            key={book.id}
            style={{ padding: "5rem" }}
          >
            {/* <Link to={`/book/${book.id}`}> */}
            <div className="book-page-img-container">
              <img
                className="book-page-img"
                src={book.formats["image/jpeg"]}
                alt={book.title}
              />
              {/* </Link> */}
              <div className="book-page-button-container">
                <button
                  className="book-page-button"
                  onClick={() => {
                    setFavourites((prev) => {
                      const bookInList = prev.find((e) => e.id === book.id);

                      // removes book if already in the list
                      if (bookInList) {
                        return prev.toSpliced(prev.indexOf(bookInList), 1);
                      } else {
                        return [...prev, book];
                      }
                    });
                    console.log(favourites);
                  }}
                >
                  {favourites.find((e) => e.id === book.id)
                    ? "Unfavourite"
                    : "Favourite"}
                </button>
              </div>
            </div>
            <div className="book-page-text">
              <h2 className="book-page-title">{book.title}</h2>
              <p>{book.authors.map((author) => author.name).join(", ")}</p>
              <p>Download count {book.download_count}</p>
              <p>
                Category: <br /> {book.subjects.join(", ")}{" "}
              </p>
              <p>Language: {book.languages.join(", ")}</p>
              <Link to={book.formats["text/html"]}>Read book online</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
