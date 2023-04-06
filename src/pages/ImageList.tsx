import { useEffect } from "react";
import { useImageStore, usePaginationStore } from "../store/imageStore";
import ImageCard from "../components/ImageCard";
import Pagination from "../components/Pagination";
import { CardContainer } from "../styles/pages.styles";

const GalleryList = () => {
  const data = useImageStore((state) => state.data);
  const updateData = useImageStore((state) => state.updateData);
  const ids = useImageStore((state) => state.ids);
  const updateIds = useImageStore((state) => state.updateIds);
  const currentPage = usePaginationStore((state) => state.currentPage);
  const updateCurrentPage = usePaginationStore(
    (state) => state.updateCurrentPage
  );
  const recordsPerPage = usePaginationStore((state) => state.recordsPerPage);

  const getData = async () => {
    try {
      const response = await fetch("./dataset.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const result = await response.json();
      updateData(result);
    } catch (error) {
      if (error) {
        return error;
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const numberOfPages = Math.ceil(data.length / recordsPerPage);

  console.log(ids);
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
