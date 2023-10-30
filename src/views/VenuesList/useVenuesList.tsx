import { useEffect, useState } from "react";
import { axiosInstance } from "../../shared/utils/axiosInstance.ts";
import { Venue } from "../../shared/types/Venue.ts";
import { useSearchParams } from "react-router-dom";

export const useVenuesList = () => {
  const [venues, setVenues] = useState<Venue[] | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page");

  const onNextPage = () => {
    const newPage = Number(searchParams.get("page")) + 1;
    setSearchParams({ page: String(newPage) });
  };

  const onPrevPage = () => {
    const newPage = Number(searchParams.get("page")) - 1;
    setSearchParams({ page: String(newPage) });
  };

  useEffect(() => {
    axiosInstance
      .get<Venue[]>(`/venues?_page=${currentPage}&_limit=3`)
      .then((response) => {
        setVenues(response.data);
      });
  }, [currentPage]);
  return { venues, onNextPage, onPrevPage };
};
