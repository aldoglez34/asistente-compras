import { FC } from "react";
import BootstrapNavbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Overlay } from "../overlay/Overlay";
import { getFullName } from "../../../utils/helpers";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { Button } from "react-bootstrap";

export const Navbar: FC = () => {
  const { currentUser } = useCurrentUser();

  const NotificationsButton: FC = () => (
    <Button variant="transparent p-0 me-3" onClick={undefined}>
      <i className="fas fa-bell text-light lead" />
    </Button>
  );

  const User: FC = () => (
    <div className="text-light" style={{ marginRight: "80px" }}>
      <i className="fas fa-user me-2 lead" />
      <span>
        {getFullName(
          currentUser.name,
          currentUser.firstSurname,
          currentUser.secondSurname
        )}
      </span>
    </div>
  );

  return (
    <BootstrapNavbar fixed="top" sticky="top" bg="dark" className="shadow">
      <Container className="p-2">
        <BootstrapNavbar.Brand href="/">
          <h2 className="text-light">
            <strong>ADC</strong>
          </h2>
        </BootstrapNavbar.Brand>
        <div className="d-flex justify-content-end">
          <User />
          <NotificationsButton />
          <Overlay />
        </div>
      </Container>
    </BootstrapNavbar>
  );
};
