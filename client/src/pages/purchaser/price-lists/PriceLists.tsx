import { FC } from "react";
import { isEmpty } from "lodash";
import { Layout } from "../../../layout/Layout";
import { ListGroup } from "react-bootstrap";
import { usePriceLists } from "../../../hooks/usePriceLists";
import { useCurrentUser } from "../../../hooks/useCurrentUser";

export const PriceLists: FC = () => {
  const { currentUser } = useCurrentUser();
  const { allMyPriceLists } = usePriceLists({ purchaserid: currentUser?._id });

  const pageName = "Lista de Precios";

  return (
    <Layout
      pageTitle={pageName}
      breadcrumbOptions={[
        { label: "Comprador", href: "/purchasing" },
        { label: pageName },
      ]}
      expanded={false}
    >
      <ListGroup>
        {isEmpty(allMyPriceLists) && <span>Lista vacía.</span>}
        {allMyPriceLists?.map((p: any, idx: number) => (
          <ListGroup.Item
            action
            className="shadow-sm mb-2 d-flex flex-column"
            href={`/purchasing/price-lists/details/${p._id}`}
            key={idx}
            variant="warning"
          >
            <strong>{p.name}</strong>
            <span>{p.createdAt}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Layout>
  );
};
