import { FC } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Layout } from "../../../layout/Layout";
import { postSupplier } from "../../../services/Suppliers";

export const NewSupplier: FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await postSupplier(data);
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  };

  const pageName = "Nuevo Proveedor";

  return (
    <Layout
      pageTitle={pageName}
      breadcrumbOptions={[
        { label: "Comprador", href: "/purchasing" },
        { label: pageName },
      ]}
      expanded={false}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control {...register("name")} placeholder="Nombre" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control {...register("email")} placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Dirección</Form.Label>
          <Form.Control {...register("address")} placeholder="Dirección" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control {...register("phone")} placeholder="Teléfono" />
        </Form.Group>
        <Button className="shadow mt-3" type="submit" variant="dark">
          Crear
        </Button>
      </Form>
    </Layout>
  );
};
