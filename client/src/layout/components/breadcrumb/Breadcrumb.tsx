import { FC } from "react";
import { isEmpty } from "lodash";
import cn from "classnames";

export type BreadcrumbProps = {
  className?: string;
  options: {
    label: string;
    href?: string;
  }[];
};

export const Breadcrumb: FC<BreadcrumbProps> = ({ className, options }) => {
  if (isEmpty(options)) return null;

  return (
    <section className={cn("d-flex flex-row", className)}>
      {options.map((opt, idx) => {
        if (!isEmpty(opt.href)) {
          return (
            <div key={idx}>
              <a className="text-dark" href={opt.href}>
                {opt.label}
              </a>
              <span className="mx-2 text-secondary">/</span>
            </div>
          );
        }
        return (
          <span className="text-secondary" key={idx}>
            {opt.label}
          </span>
        );
      })}
    </section>
  );
};
