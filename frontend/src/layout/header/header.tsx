import { Link } from "react-router-dom";
import { routes } from "routes";
import { useAuth } from "hooks/useAuth";
import { useAppDispatch } from "hooks/hook";
import { useCallback } from "react";
import { logoutAction } from "services/auth";

export const Header = (): JSX.Element => {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();

  const authRoute = routes.find((route) => route.name === "Auth")?.path || "/";
  const mainRoute = routes.find((route) => route.name === "Main")?.path || "/";

  const handleLogout = useCallback(() => {
    dispatch(logoutAction());
  }, [dispatch]);

  return (
    <header className="fixed w-full h-12 bg-slate-200">
      <div className="container flex items-center h-full justify-between">
        <Link
          to={`${mainRoute}`}
          className="text-2xl font-semibold hover:opacity-60"
        >
          Header
        </Link>

        {isAuth ? (
          <Link
            className="hover:opacity-60"
            onClick={handleLogout}
            to={`${authRoute}`}
          >
            Log out
          </Link>
        ) : (
          <Link className="hover:opacity-60" to={`${authRoute}`}>
            Sign in
          </Link>
        )}
      </div>
    </header>
  );
};
