import { useImageStore, usePaginationStore } from "../store/imageStore";
import ImageCard from "../components/ImageCard";
import Pagination from "../components/Pagination";
import { CardContainer } from "../styles/pages.styles";

const Favourites = () => {
  const ids = useImageStore((state) => state.ids);
  const data = useImageStore((state) => state.data);
  const currentPage = usePaginationStore((state) => state.currentPage);
  const updateCurrentPage = usePaginationStore(
    (state) => state.updateCurrentPage
  );
  const recordsPerPage = usePaginationStore((state) => state.recordsPerPage);

  const favouriteImages = data.filter((item) => ids.includes(item.id));
  console.log(favouriteImages);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = favouriteImages.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const numberOfPages = Math.ceil(favouriteImages.length / recordsPerPage);

  return (
    <>
      <CardContainer>
        {currentRecords &&
          currentRecords.length > 0 &&
          currentRecords.map((item) => <ImageCard key={item.id} item={item} />)}
      </CardContainer>
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        updateCurrentPage={updateCurrentPage}
      />
    </>
  );
};

export default Favourites;
