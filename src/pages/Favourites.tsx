import { useState } from "react";
import { useImageStore, usePaginationStore } from "../store/imageStore";
import ImageCard from "../components/ImageCard";
import Pagination from "../components/Pagination";
import { CardContainer } from "../styles/pages.styles";

const Favourites = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ids = useImageStore((state) => state.ids);
  const data = useImageStore((state) => state.data);
  const recordsPerPage = usePaginationStore((state) => state.recordsPerPage);

  const favouriteImages = data.filter((item) => ids.includes(item.id));
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = favouriteImages.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  console.log("current records", currentRecords);

  const numberOfPages = Math.ceil(favouriteImages.length / recordsPerPage);

  return (
    <>
      <CardContainer>
        {currentRecords &&
          currentRecords.length > 0 &&
          currentRecords.map((item) => <ImageCard key={item.id} item={item} />)}
      </CardContainer>
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
