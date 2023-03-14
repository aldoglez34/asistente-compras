import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { FC } from "react";
import { isEmpty } from "lodash";
import { Layout } from "../../layout/Layout";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useFirebase } from "../../hooks/useFirebase";
import { useForm } from "react-hook-form";

export const Login: FC = () => {
  const { register, handleSubmit } = useForm();
  const { firebaseAuth, loginUserToFirebase } = useFirebase();
  const { setUserInStore } = useCurrentUser();

  const onSubmit = async (data: any) => {
    const { email, password } = data;
    if (isEmpty(email) || isEmpty(password)) return;
    try {
      // login to firebase
      await loginUserToFirebase({ email, password });
      // fetch and set user data in the data store
      if (firebaseAuth.currentUser?.uid)
        await setUserInStore(firebaseAuth.currentUser.uid);
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  };

  return (
    <Layout hasNavbar={false}>
      <Row>
        <Col md={{ span: 3, offset: 5 }} className="p-0">
          <div className="mb-4 text-center" style={{ marginTop: "150px" }}>
            <h1 className="mb-0 display-1">
              <strong>ADC</strong>
            </h1>
          </div>
          <Card className="p-4 shadow">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Label>Usuario</Form.Label>
                <Form.Control {...register("email")} type="email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control {...register("password")} type="password" />
              </Form.Group>
              <Button className="shadow mt-2" type="submit" variant="dark">
                Entrar
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};
