interface PaginationProps {
  numberOfPages: number;
  currentPage: number;
  updateCurrentPage: (number: number) => void;
}
const Pagination = ({
  numberOfPages,
  currentPage,
  updateCurrentPage,
}: PaginationProps) => {
  const pageNumbers = [...Array(numberOfPages + 1).keys()].slice(1);

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li
          key={number}
          onClick={() => updateCurrentPage(number)}
          className={`page-number ${currentPage ? "active" : ""}`}
        >
          {number}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
