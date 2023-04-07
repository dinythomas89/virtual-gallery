import { useState } from "react";

import ImageCard from "../components/ImageCard";
import Pagination from "../components/Pagination";
import { CardContainer, HeaderTag } from "../styles/pages.styles";
import { useImageStore } from "../store/imageStore";
import { usePaginationStore } from "../store/paginationStore";

const Favourites = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ids, data] = useImageStore((state) => [state.ids, state.data]);
  const recordsPerPage = usePaginationStore((state) => state.recordsPerPage);

  const favouriteImages = data.filter((item) => ids.includes(item.id));
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = favouriteImages.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const numberOfPages = Math.ceil(favouriteImages.length / recordsPerPage);

  return (
    <>
      {favouriteImages.length > 0 ? (
        <>
          <HeaderTag>Favourite images:</HeaderTag>
          <CardContainer>
            {currentRecords &&
              currentRecords.length > 0 &&
              currentRecords.map((item) => (
                <ImageCard key={item.id} item={item} />
              ))}
          </CardContainer>
        </>
      ) : (
        <HeaderTag>There is nothing to display</HeaderTag>
      )}
      {numberOfPages > 1 ? (
        <Pagination
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          updateCurrentPage={setCurrentPage}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Favourites;
