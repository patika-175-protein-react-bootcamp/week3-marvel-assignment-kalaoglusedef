import "./App.css";
import { useEffect, useState } from "react";
import http from "./axios";
import Header from "./components/header";
import Pagination from "./components/pagination";
import List from "./components/list";
import loading from "../src/img/loading.gif";

function App() {
  const [data, setData] = useState({ results: [], total: 0 });
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const pageSize = 20;

  const handleGetData = () => {
    setLoading(true);
    http
      .get("characters", {
        params: {
          apikey: "6a9a3e4a660867bb6fca9c3a68a2ed87",
          limit: pageSize,
          offset: (currentIndex - 1) * pageSize,
        },
      })
      .then(({ data }) => {
        sessionStorage.setItem(currentIndex, JSON.stringify(data));
        setData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    const data = sessionStorage.getItem(currentIndex);

    if (data) {
      setData(JSON.parse(data));
    } else {
      handleGetData();
    }
  }, [currentIndex]);

  return (
    <>
      <Header></Header>
      {isLoading ? (
        <div className="loadingContainer">
          <img src={loading} width={128} height={128}></img>
        </div>
      ) : (
        <List data={data.results}></List>
      )}

      {data.total > 20 && (
        <Pagination
          defaultIndex={currentIndex}
          pageSize={pageSize}
          onChange={(index) => {
            setCurrentIndex(index);
          }}
          total={data.total}
        ></Pagination>
      )}
    </>
  );
}

export default App;
