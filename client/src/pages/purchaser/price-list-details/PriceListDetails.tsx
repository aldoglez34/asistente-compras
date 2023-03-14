import { FC, useMemo } from "react";
import { Layout } from "../../../layout/Layout";
import { useParams } from "react-router-dom";
import { usePriceLists } from "../../../hooks/usePriceLists";
import { Table } from "react-bootstrap";
import { useTable } from "react-table";

export const PriceListDetails: FC = () => {
  const { priceListId } = useParams();
  const { onePriceList } = usePriceLists({ priceListId });

  const columns = useMemo(
    () => [
      { Header: "Familia", accessor: "familia" },
      { Header: "SKU Propio", accessor: "skuPropio" },
      { Header: "SKU Proveedor", accessor: "skuProveedor" },
      { Header: "Descripción", accessor: "descripcion" },
      { Header: "Marca", accessor: "marca" },
      { Header: "UM", accessor: "um" },
      { Header: "Lista Precio", accessor: "listaPrecio" },
      { Header: "Precio", accessor: "precio" },
      { Header: "IVA", accessor: "iva" },
      { Header: "IEPS", accessor: "ieps" },
      { Header: "Válido desde", accessor: "validoDesde" },
      { Header: "Fecha Alta", accessor: "fechaAlta" },
      { Header: "Contenido", accessor: "contenido" },
      { Header: "UM Cont.", accessor: "umCont" },
      { Header: "Ratio", accessor: "ratio" },
      { Header: "UM Inv.", accessor: "umInv" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: onePriceList?.data || [] });

  return (
    <Layout
      pageTitle={onePriceList?.name}
      breadcrumbOptions={[
        { label: "Comprador", href: "/purchasing" },
        { label: "Lista de Precios", href: "/purchasing/price-lists" },
        { label: onePriceList?.name },
      ]}
    >
      <Table striped bordered {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Layout>
  );
};
