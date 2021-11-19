import { DefaultLayout } from "../components/layout";
import { Container, Content } from "../components/content";
import { Heading, LargeParagraph, SubHeading } from "../components/typography";

export default function Resume() {
  return (
    <DefaultLayout>
      <Container>
        <Content>
          <Heading>Resume213</Heading>
          <SubHeading>About me</SubHeading>
          <LargeParagraph>Coming soon.</LargeParagraph>
        </Content>
      </Container>
    </DefaultLayout>
  );
}
