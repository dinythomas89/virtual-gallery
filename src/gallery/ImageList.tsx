import { useEffect, useState } from "react";
import { useImageStore } from "../store/imageStore";
import ImageCard from "./ImageCard";
import Pagination from "./Pagination";

const GalleryList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);
  const data = useImageStore((state) => state.data);
  const updateData = useImageStore((state) => state.updateData);
  const ids = useImageStore((state) => state.ids);
  const updateIds = useImageStore((state) => state.updateIds);

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
    <div className="tiles-container">
      <div className="card-container">
        {currentRecords &&
          currentRecords.length > 0 &&
          currentRecords.map((item) => (
            <ImageCard
              key={item.id}
              item={item}
              onClick={() => updateIds(item.id)}
            />
          ))}
      </div>
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default GalleryList;
