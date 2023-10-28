import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import { useAppSelector } from "../../store/store";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

export default function SignedInMenu() {
  const { currentUser } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  async function handleSignOut() {
    await signOut(auth);
    navigate("/");
  }

  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src={currentUser?.photoURL} />
      <Dropdown pointing="top left" text={currentUser?.displayName as string}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item as={Link} to={`/profiles/${currentUser?.uid}`} text="My Profile" icon="user" />
          <Dropdown.Item
            as={Link}
            to="/account"
            text="My Account"
            icon="setting"
          />
          <Dropdown.Item onClick={handleSignOut} text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
