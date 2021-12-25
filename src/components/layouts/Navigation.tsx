import Link from "next/link";
import { ROUTES } from "../../constants";

interface ROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
}

export const Navigation = () => {
  return (
    <div>
      {ROUTES.map((routeObject: ROUTE) => {
        return (
          <Link key={`navbar-${routeObject.ID}`} href={routeObject.PATH}>
            <a>{routeObject.LABEL}</a>
          </Link>
        );
      })}
    </div>
  );
};
