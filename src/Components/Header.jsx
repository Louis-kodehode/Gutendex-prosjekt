import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";

export default function Header() {
  const { search, setSearch } = useContext(AppContext);
  const navigate = useNavigate();

  function handleSearch(e, search) {
    e.preventDefault();
    navigate(`/result/search=${search}`);
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
        <input type="submit" 
        />
      </form>
      <div className="headerText">
        <Link to="/result/topic=Fiction">Fiction </Link>
        <Link to="/result/topic=Mystery">Mystery </Link>
        <Link to="/result/topic=Thriller">Thriller </Link>
        <Link to="/result/topic=Romance">Romance </Link>
        <Link to="/result/topic=Fantasy">Fantasy </Link>
        <Link to="/result/topic=Morality">Morality </Link>
        <Link to="/result/topic=Society">Society </Link>
        <Link to="/result/topic=Power">Power </Link>
        <Link to="/result/topic=Justice">Justice </Link>
        <Link to="/result/topic=Adventure">Adventure </Link>
        <Link to="/result/topic=Tragedy">Tragedy </Link>
        <Link to="/result/topic=War">War </Link>
        <Link to="/result/topic=Philosophy">Philosophy </Link>
      </div>
    </div>
  );
}
