import { useImageStore, usePaginationStore } from "../store/imageStore";
import ImageCard from "./ImageCard";
import Pagination from "./Pagination";

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
    <div>
      <div className="card-container">
        {currentRecords &&
          currentRecords.length > 0 &&
          currentRecords.map((item) => <ImageCard key={item.id} item={item} />)}
      </div>
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        updateCurrentPage={updateCurrentPage}
      />
    </div>
  );
};

export default Favourites;
