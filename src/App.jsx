import { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import "./index.css";

export const AppContext = createContext();

export default function App() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);
  const [book, setBook] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <AppContext.Provider
      value={{
        search,
        result,
        book,
        error,
        loading,
        selectedBook,
        setSearch,
        setBook,
        setError,
        setLoading,
        setSelectedBook,
        setResult,
      }}
    >
      <>
        <Header />
        <Outlet />
      </>
    </AppContext.Provider>
  );
}
