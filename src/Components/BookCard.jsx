import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function BookCard({ image, title, name, id }) {
  return (
    <div>
      <Link to={`/book/${id}`}>
        <div>
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <p></p>
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </Link>
    </div>
  );
}
