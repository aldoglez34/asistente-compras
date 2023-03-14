import { useQuery } from "react-query";
import { getAllSuppliers } from "../services/Suppliers";

export const useSuppliers = () => {
  const { data, isLoading } = useQuery("prices", getAllSuppliers);

  return { suppliers: data || [], isLoading };
};
