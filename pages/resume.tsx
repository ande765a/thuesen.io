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
          <LargeParagraph>
            I am a software engineer with a passion for building software that
            improves people's lives. I have a background in computer science and
            mathematics, and I am currently pursuing a degree in computer
            science at the University of Waterloo.
          </LargeParagraph>
        </Content>
      </Container>
    </DefaultLayout>
  );
}
