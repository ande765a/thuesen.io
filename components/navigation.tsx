import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";
import styled, { css } from "styled-components";

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
`;

const NavigationItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const NavigationItem = styled.li`
  display: inline-block;
  padding: 1rem;
`;

const StyledNavigationLink = styled.a`
  font-family: "Work Sans", sans-serif;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;

  &:hover {
    color: white;
  }

  &.active {
    color: white;
  }
`;

const NavigationLink = (props: React.PropsWithChildren<LinkProps>) => {
  const router = useRouter();

  return (
    <Link {...props} passHref>
      <StyledNavigationLink
        className={router.pathname == props.href && "active"}
      >
        {props.children}
      </StyledNavigationLink>
    </Link>
  );
};

export const Navigation = () => {
  return null;
  return (
    <NavigationContainer>
      <NavigationItems>
        <NavigationItem>
          <NavigationLink href="/">Home</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="/projects">Projects</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="/resume">Resume</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="/contact">Contact</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="/blog">Blog</NavigationLink>
        </NavigationItem>
      </NavigationItems>
    </NavigationContainer>
  );
};
