import { getAllMyPriceLists, getOnePriceList } from "../services/PriceLists";
import { useQuery } from "react-query";

type usePriceListsProps = {
  priceListId?: string;
  purchaserid?: string;
};

export const usePriceLists = ({
  priceListId = "",
  purchaserid = "",
}: usePriceListsProps) => {
  const { data: allMyPriceLists } = useQuery(
    "allMyPriceLists",
    () => getAllMyPriceLists(purchaserid),
    { enabled: !!purchaserid }
  );

  const { data: onePriceList } = useQuery(
    "onePriceList",
    () => getOnePriceList(priceListId),
    { enabled: !!priceListId }
  );

  return {
    allMyPriceLists,
    onePriceList,
  };
};
