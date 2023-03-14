import { FC, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useFirebase } from "../../../hooks/useFirebase";
import { useCurrentUser } from "../../../hooks/useCurrentUser";

type SubMenuProps = {
  header: string;
  options: {
    label: string;
    href: string;
  }[];
};

export const Overlay: FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { logoutUser } = useFirebase();
  const { removeUserFromStore } = useCurrentUser();

  const handleOnLogout = () => {
    logoutUser();
    removeUserFromStore();
  };

  const SubMenu: FC<SubMenuProps> = ({ header, options }) => (
    <section className="mb-3">
      <strong>{header}</strong>
      {options.map((opt, idx) => (
        <Button
          className="p-0 d-flex text-dark"
          variant="link"
          key={idx}
          href={opt.href}
        >
          {opt.label}
        </Button>
      ))}
    </section>
  );

  return (
    <>
      <Button variant="transparent p-0" onClick={handleShow}>
        <i className="fas fa-bars text-light lead" />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <strong>Menu</strong>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-column h-100">
            <SubMenu
              header="Precios"
              options={[
                { label: "Lista de Precios", href: "/purchasing/price-lists" },
                {
                  label: "Nueva Lista de Precios",
                  href: "/purchasing/price-lists/new",
                },
              ]}
            />
            <SubMenu
              header="Proveedores"
              options={[
                {
                  label: "Lista de Proveedores",
                  href: "/purchasing/suppliers",
                },
                { label: "Nuevo Proveedor", href: "/purchasing/suppliers/new" },
              ]}
            />
            <Button
              className="shadow mt-auto"
              onClick={handleOnLogout}
              variant="danger"
            >
              Cerrar sesión
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
