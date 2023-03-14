import { FC, useMemo } from "react";
import { useSuppliers } from "../../../hooks/useSuppliers";
import { Layout } from "../../../layout/Layout";
import { useTable } from "react-table";
import { Table } from "react-bootstrap";

export const Suppliers: FC = () => {
  const { suppliers } = useSuppliers();

  const columns = useMemo(
    () => [
      { Header: "Nombre", accessor: "name" },
      { Header: "Email", accessor: "email" },
      { Header: "Teléfono", accessor: "phone" },
      { Header: "Dirección", accessor: "address" },
      { Header: "Registro", accessor: "registeredAt" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: suppliers || [] });

  const pageName = "Lista de Proveedores";

  return (
    <Layout
      pageTitle={pageName}
      breadcrumbOptions={[
        { label: "Comprador", href: "/purchasing" },
        { label: pageName },
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
