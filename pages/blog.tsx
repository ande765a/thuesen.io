import { Container, Content } from "../components/content";
import { DefaultLayout } from "../components/layout";
import { Heading } from "../components/typography";

export default function Blog() {
  return (
    <DefaultLayout>
      <Container>
        <Content>
          <Heading>Blog</Heading>
        </Content>
      </Container>
    </DefaultLayout>
  );
}
