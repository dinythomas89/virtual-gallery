import {
  PaginationContainer,
  PaginationList,
} from "../styles/pagination.styles";

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
    <PaginationContainer>
      {pageNumbers.map((number) => (
        <PaginationList
          key={number}
          onClick={() => updateCurrentPage(number)}
          primary={`${currentPage === number ? "active" : ""}`}
        >
          {number}
        </PaginationList>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
