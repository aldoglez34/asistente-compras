import { FC } from "react";
import { Navbar } from "./components/navbar/Navbar";
import Container from "react-bootstrap/Container";
import styles from "./Layout.module.scss";
import { Col, Row } from "react-bootstrap";
import { Breadcrumb } from "./components/breadcrumb/Breadcrumb";
import { isEmpty } from "lodash";

type LayoutProps = {
  breadcrumbOptions?: {
    label: string;
    href?: string;
  }[];
  children: any;
  expanded?: boolean;
  hasNavbar?: boolean;
  pageTitle?: string;
};

export const Layout: FC<LayoutProps> = ({
  breadcrumbOptions = [],
  children,
  expanded = true,
  hasNavbar = true,
  pageTitle,
}) => (
  <>
    {hasNavbar && <Navbar />}
    <article className={styles.mainArticle}>
      <Container>
        {!isEmpty(breadcrumbOptions) && (
          <Breadcrumb className="mb-3" options={breadcrumbOptions} />
        )}
        {expanded ? (
          <>
            {pageTitle && (
              <h2 className="mb-4">
                <strong>{pageTitle.toLocaleUpperCase()}</strong>
              </h2>
            )}
            {children}
          </>
        ) : (
          <Row>
            <Col md={{ span: 4, offset: 4 }} className="p-0">
              {pageTitle && (
                <h2 className="mb-4">
                  <strong>{pageTitle.toLocaleUpperCase()}</strong>
                </h2>
              )}
              {children}
            </Col>
          </Row>
        )}
      </Container>
    </article>
  </>
);
