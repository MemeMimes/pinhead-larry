import { Button, Flex, Spacer, Menu } from "@chakra-ui/react";
import { Link } from "wasp/client/router";
import { logout } from "wasp/client/auth";

const Nav = () => {

  return (
    <Flex p={3} w="full" borderBottomWidth={2}>
      <Menu>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Spacer />
        <Flex gap={5}>
          <Link to="/profile">
            <Button>Profile</Button>
          </Link>
          <Button onClick={logout}>Logout</Button>
        </Flex>
      </Menu>
    </Flex >
  )
}

export default Nav;