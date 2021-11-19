import { Container, Content } from "./content";
import Link from "next/link";
import styled from "styled-components";
import { Heading, SubHeading, Paragraph } from "./typography";

const FooterContent = styled(Content)`
  text-align: center;
  padding: 2rem;
  padding-bottom: 3rem;
`;

const StyledLink = styled.a`
  font-family: "Work Sans", sans-serif;
  color: white;
  text-decoration: none;
`;

export function Footer() {
  return (
    <footer>
      <Container>
        <FooterContent>
          <SubHeading>Connect with me at</SubHeading>
          <Link href="mailto:anders@thuesen.io" passHref>
            <StyledLink>anders@thuesen.io</StyledLink>
          </Link>
        </FooterContent>
      </Container>
    </footer>
  );
}
