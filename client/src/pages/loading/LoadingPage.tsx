import { FC } from "react";
import { Spinner } from "react-bootstrap";
import { Layout } from "../../layout/Layout";

export const LoadingPage: FC = () => (
  <Layout>
    <div className="text-center">
      <Spinner variant="dark" />
      <strong className="text-dark d-block mt-2">Cargando ADC...</strong>
    </div>
  </Layout>
);
