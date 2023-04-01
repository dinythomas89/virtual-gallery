interface PaginationProps{
    numberOfPages:number;
    currentPage:number;
    setCurrentPage:(number:number)=>void
}
const Pagination = ({ numberOfPages, currentPage, setCurrentPage }:PaginationProps) => {
    const pageNumbers = [...Array(numberOfPages + 1).keys()].slice(1);
  
    return (
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`page-number ${(currentPage ? "active" : "")}`}
          >
            {number}
          </li>
        ))}
      </ul>
    );
  };
  
  export default Pagination;
  