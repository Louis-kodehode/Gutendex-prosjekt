import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function BookCard({ image, title, name, id }) {
  return (
    <div className="book-card-view">
      <Link to={`/Gutendex-prosjekt/book/${id}`}>
        <div className="book-card-content">
          <img src={image} alt={title} />
          <h2>{title}</h2>
          {/* <p></p> */}
          {/* <FontAwesomeIcon icon={faHeart} /> */}
        </div>
      </Link>
      {/* <div>Button placeholder</div> */}
    </div>
  );
}
