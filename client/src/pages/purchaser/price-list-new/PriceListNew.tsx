import { FC, useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSuppliers } from "../../../hooks/useSuppliers";
import { useUploadFile } from "../../../hooks/useUploadFile";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { Layout } from "../../../layout/Layout";

export const PriceListNew: FC = () => {
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const { register, handleSubmit } = useForm();
  const { clearError, errorMessage, uploadData } = useUploadFile();
  const { suppliers } = useSuppliers();
  const { currentUser } = useCurrentUser();

  const onSubmit = async (data: any) => {
    const { name, supplier, file: files } = data;
    const file = files[0];
    if (!name || !file) return null;
    setIsUploading(true);
    await uploadData(name, file, supplier, currentUser._id);
    setIsUploading(false);
  };

  return (
    <Layout
      pageTitle="Nueva Lista de Precios"
      breadcrumbOptions={[
        { label: "Comprador", href: "/purchasing" },
        { label: "Nueva Lista de Precios" },
      ]}
      expanded={false}
    >
      {errorMessage && (
        <Alert dismissible onClose={clearError} variant="danger">
          {errorMessage}
        </Alert>
      )}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Nombre</Form.Label>
          <Form.Control className="shadow-sm" id="name" {...register("name")} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="supplier">Proveedor</Form.Label>
          <Form.Select
            className="shadow-sm"
            id="supplier"
            {...register("supplier")}
          >
            {suppliers.map((s: any, idx: number) => (
              <option key={idx} value={s._id}>
                {s.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label htmlFor="chooseFileButton">Documento</Form.Label>
          <Form.Control
            {...register("file")}
            accept=".csv"
            className="shadow-sm"
            id="chooseFileButton"
            type="file"
          />
        </Form.Group>
        <Button
          className="shadow-sm"
          disabled={isUploading}
          type="submit"
          variant="dark"
        >
          {isUploading ? <span>Importando</span> : <span>Importar</span>}
          {isUploading && <Spinner className="ms-2" size="sm" />}
        </Button>
      </Form>
    </Layout>
  );
};
