import prev from "../../img/PrevPage.png";
import next from "../../img/NextPage.png";
const Pagination = ({ total, defaultIndex, pageSize, onChange }) => {
  const paginationSize = Math.ceil(total / pageSize);

  const getPagination = () => {
    if (defaultIndex < 3) {
      return (
        <>
          <a
            className={2 === defaultIndex ? "selected" : ""}
            onClick={() => {
              onChange(2);
            }}
          >
            {2}
          </a>
          <a
            className={3 === defaultIndex ? "selected" : ""}
            onClick={() => {
              onChange(3);
            }}
          >
            {3}
          </a>
        </>
      );
    }

    if (defaultIndex > paginationSize - 2) {
      return (
        <>
          <a
            className={paginationSize - 2 === defaultIndex ? "selected" : ""}
            onClick={() => {
              onChange(paginationSize - 2);
            }}
          >
            {paginationSize - 2}
          </a>
          <a
            className={paginationSize - 1 === defaultIndex ? "selected" : ""}
            onClick={() => {
              onChange(paginationSize - 1);
            }}
          >
            {paginationSize - 1}
          </a>
        </>
      );
    }

    return (
      <>
        <a
          onClick={() => {
            onChange(defaultIndex - 1);
          }}
        >
          {defaultIndex - 1}
        </a>
        <a
          className={"selected"}
          onClick={() => {
            onChange(defaultIndex);
          }}
        >
          {defaultIndex}
        </a>
        <a
          onClick={() => {
            onChange(defaultIndex + 1);
          }}
        >
          {defaultIndex + 1}
        </a>
      </>
    );
  };

  return (
    <div className="paginationContainer">
      <div className="pagination">
        <img
          className="prev"
          src={prev}
          alt=""
          onClick={() => {
            if (defaultIndex !== 1) {
              onChange(defaultIndex - 1);
            }
          }}
        />
        <a
          className={1 === defaultIndex ? "selected" : ""}
          onClick={() => {
            onChange(1);
          }}
        >
          {1}
        </a>

        {defaultIndex > 3 && <a>. . .</a>}
        {getPagination()}
        {defaultIndex < paginationSize - 2 && <a>. . .</a>}
        <a
          className={paginationSize === defaultIndex ? "selected" : ""}
          onClick={() => {
            onChange(paginationSize);
          }}
        >
          {paginationSize}
        </a>
        <img
          className="next"
          src={next}
          alt=""
          onClick={() => {
            if (defaultIndex !== paginationSize) {
              onChange(defaultIndex + 1);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Pagination;
