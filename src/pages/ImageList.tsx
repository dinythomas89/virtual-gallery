import { useEffect } from "react";

import ImageCard from "../components/ImageCard";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { CardContainer } from "../styles/pages.styles";
import { useImageStore } from "../store/imageStore";
import { usePaginationStore } from "../store/paginationStore";

const GalleryList = () => {
  const data = useImageStore((state) => state.data);
  const fetchData = useImageStore((state) => state.fetchData);
  const loading = useImageStore((state) => state.loading);
  const error = useImageStore((state) => state.error);
  const updateIds = useImageStore((state) => state.updateIds);
  const currentPage = usePaginationStore((state) => state.currentPage);
  const updateCurrentPage = usePaginationStore(
    (state) => state.updateCurrentPage
  );
  const recordsPerPage = usePaginationStore((state) => state.recordsPerPage);

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
