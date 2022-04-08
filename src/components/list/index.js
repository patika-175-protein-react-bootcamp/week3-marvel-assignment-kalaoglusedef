const List = ({ data }) => {
  return (
    <div className="cardContainer">
      {data.map((x) => {
        return (
          <div>
            <div className="card">
              <img
                src={`${x.thumbnail.path}.${x.thumbnail.extension}`}
                alt=""
              />
              <p className="cardText">{x.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
