import { useEffect } from "react";

import ImageCard from "../components/ImageCard";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { CardContainer } from "../styles/pages.styles";
import { useImageStore } from "../store/imageStore";
import { usePaginationStore } from "../store/paginationStore";

const GalleryList = () => {
  const [data, fetchData, loading, error, updateIds] = useImageStore(
    (state) => [
      state.data,
      state.fetchData,
      state.loading,
      state.error,
      state.updateIds,
    ]
  );
  const [currentPage, updateCurrentPage, recordsPerPage] = usePaginationStore(
    (state) => [
      state.currentPage,
      state.updateCurrentPage,
      state.recordsPerPage,
    ]
  );

  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const numberOfPages = Math.ceil(data.length / recordsPerPage);

  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <>
      <CardContainer>
        {currentRecords &&
          currentRecords.length > 0 &&
          currentRecords.map((item) => (
            <ImageCard
              key={item.id}
              item={item}
              onClick={() => {
                updateIds(item.id);
              }}
            />
          ))}
      </CardContainer>
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        updateCurrentPage={updateCurrentPage}
      />
    </>
  );
};

export default GalleryList;
