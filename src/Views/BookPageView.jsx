import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BookPageView() {
  const { book, setBook, loading, setLoading, setError, result, setResult } =
    useContext(AppContext);
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
      <div key={book.id} style={{padding:"5rem"}}>
        {/* <Link to={`/book/${book.id}`}> */}
          <img src={book.formats["image/jpeg"]} alt={book.title} />
        {/* </Link> */}
        <h3>{book.title}</h3>
        <p>{book.authors.map((author) => author.name).join(", ")}</p>
        <p>Download count {book.download_count}</p>
        <p>Category {book.subjects}</p>
        <p>Language: {book.languages.join(", ")}</p>
        <Link to={book.formats["text/html"]}>Html</Link>
      </div>
    </>
  );
}
