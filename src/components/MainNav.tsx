import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <>
          <Link to="/order-status" className="font-bold hover:text-orange-500">
            Order Status
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
            variant="ghost"
            className="font-semibold text-lg hover:text-orange-500 hover:bg-white"
            onClick={async () => await loginWithRedirect()}
          >
            <FaRegUser className="mr-2"/>
            Log in
          </Button>
      )}
    </div>
  );
};

export default MainNav;
