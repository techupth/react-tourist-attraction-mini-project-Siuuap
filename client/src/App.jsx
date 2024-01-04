import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import reactIcon from "./assets/react.svg";
import PlaceList from "./components/PlaceList";
function App() {
  const [search, setSearch] = useState("");
  const [lists, setLists] = useState("");
  const [status, setStatus] = useState("");

  async function getData() {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${search}`
      );
      setLists(response.data.data);
    } catch (error) {
      setStatus(error.message);
      console.log(error.message);
    }
  }
  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div className="App">
      {/* Start coding here */}
      <section className="flex flex-col justify-center items-center mx-auto">
        <section className="m-10 flex flex-col justify-center items-center gap-[20px]">
          <Header>เที่ยวไหนดี</Header>
          <SearchInput search={search} setSearch={setSearch} />
          {!lists ? (
            <p>{status}</p>
          ) : (
            <ul className="w-[80%] flex flex-col gap-10">
              {lists.map((list) => {
                return (
                  <PlaceList
                    key={list.eid}
                    list={list}
                    reactIcon={reactIcon}
                    search={search}
                    setSearch={setSearch}
                  />
                );
              })}
            </ul>
          )}
        </section>
      </section>
    </div>
  );
}

export default App;
