import { ChangeEvent, useEffect, useState } from "react";
import { Venue } from "../../../shared/types/Venue.ts";
import { useSearchParams } from "react-router-dom";
import { axiosInstance } from "../../../shared/utils/axiosInstance.ts";

export const useVenueTiles = () => {
  const [venues, setVenues] = useState<Venue[] | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page");
  const [numberOfVenues, setNumberOfVenues] = useState(null);
  const pagesNumber = Math.ceil((numberOfVenues ?? 1) / 18);
  const changePage = (_event: ChangeEvent<unknown>, value: number) =>
    setSearchParams({ page: String(value) });

  useEffect(() => {
    axiosInstance
      .get<Venue[]>(`/venues?_page=${currentPage}&_limit=18`)
      .then((response) => {
        setVenues(response.data);
        setNumberOfVenues(response.headers["x-total-count"]);
      });
  }, [currentPage]);
  return { venues, pagesNumber, changePage };
};
