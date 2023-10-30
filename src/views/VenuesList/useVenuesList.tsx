import { useEffect, useState } from "react";
import { axiosInstance } from "../../shared/utils/axiosInstance.ts";
import { Venue } from "../../shared/types/Venue.ts";
import { useSearchParams } from "react-router-dom";

export const useVenuesList = () => {
  const [venues, setVenues] = useState<Venue[] | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page");
  const [numberOfVenues, setNumberOfVenues] = useState(null);

  useEffect(() => {
    axiosInstance
      .get<Venue[]>(`/venues?_page=${currentPage}&_limit=18`)
      .then((response) => {
        setVenues(response.data);
        setNumberOfVenues(response.headers["x-total-count"]);
      });
  }, [currentPage]);
  return { venues, numberOfVenues, setSearchParams };
};
