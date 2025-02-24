import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";

export default function Header() {
  const { search, setSearch } = useContext(AppContext);
  const navigate = useNavigate();

  function handleSearch(e, search) {
    e.preventDefault();
    navigate(`/Gutendex-prosjekt/result/search=${search}`);
    console.log(search);
  }

  return (
    <div className="headerContainer">
      <h1 className="headerText">Header</h1>
      <form className="formText" onSubmit={(e) => handleSearch(e, search)}>
        <input
          type="text"
          placeholder="Searching..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="submit" />
      </form>
      <div className="headerText">
        <Link to="/Gutendex-prosjekt/result/topic=Fiction">Fiction </Link>
        <Link to="/Gutendex-prosjekt/result/topic=Mystery">Mystery </Link>
        <Link to="/Gutendex-prosjekt/result/topic=Thriller">Thriller </Link>
        <Link to="/Gutendex-prosjekt/result/topic=Romance">Romance </Link>
        <Link to="/Gutendex-prosjekt/result/topic=Fantasy">Fantasy </Link>
        <Link to="/Gutendex-prosjekt/result/topic=Morality">Morality </Link>
        <Link to="/Gutendex-prosjekt/result/topic=Society">Society </Link>
        <Link to="/Gutendex-prosjekt/result/topic=Power">Power </Link>
        <Link to="/Gutendex-prosjekt/result/topic=Justice">Justice </Link>
        <Link to="/Gutendex-prosjekt/result/topic=Adventure">Adventure </Link>
        <Link to="/Gutendex-prosjekt/result/topic=Tragedy">Tragedy </Link>
        <Link to="/Gutendex-prosjekt/result/topic=War">War </Link>
        <Link to="/Gutendex-prosjekt/result/topic=Philosophy">Philosophy </Link>
      </div>
      <div>
        <Link to="/Gutendex-prosjekt/Favourite">Favourites</Link>
      </div>
    </div>
  );
}
