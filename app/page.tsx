import Head from "next/head";
import Image from "next/image";

import { Container, Content } from "../components/content";
import {
  Heading,
  LargeParagraph,
  Paragraph,
  SubHeading,
} from "../components/typography";
import {
  AbountDescription,
  AboutSection,
  Award,
  Awards,
  AwardsDescription,
  AwardsSection,
  Competencies,
  CompetenciesSection,
  Competency,
  Highlight,
  HighlightingLargeParagraph,
  MantraSection,
} from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anders Thuesen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutSection>
        <Container>
          <Content>
            <Image
              src="/me.jpg"
              width={384}
              height={512}
              alt="Picture of me in front of a blossoming tree."
            />
            <AbountDescription>
              <HighlightingLargeParagraph>
                Hi, my name is Anders Thuesen. I{"'"}m a software and machine
                learning engineer from Denmark striving to solve large scale
                problems with <Highlight>empathy and technology</Highlight>.
              </HighlightingLargeParagraph>
            </AbountDescription>
          </Content>
        </Container>
      </AboutSection>
      <CompetenciesSection>
        <Container>
          <Content>
            <Heading>Competencies</Heading>
            <Competencies>
              <Competency>
                <SubHeading>Frontend</SubHeading>
                <Paragraph>
                  React (Native) / Apollo / Gatsby / Next.js / styled-components
                </Paragraph>
              </Competency>
              <Competency>
                <SubHeading>Backend</SubHeading>
                <Paragraph>
                  GraphQL / Express / FastAPI / gRPC / AWS / Google Cloud /
                  Kubernetes
                </Paragraph>
              </Competency>
              <Competency>
                <SubHeading>Machine Learning</SubHeading>
                <Paragraph>
                  PyTorch / scikit-learn / Image segmentation / Audio
                  fingerprinting
                </Paragraph>
              </Competency>
            </Competencies>
          </Content>
        </Container>
      </CompetenciesSection>
      {/* <ScrollNotice /> */}
      <AwardsSection>
        <Container>
          <Content>
            <Heading>Awards</Heading>
            <Awards>
              <Award>
                <Image
                  src="/danish-design-awards.jpg"
                  width={500}
                  height={300}
                  style={{ objectFit: "cover" }}
                  alt="Danish Design Award winners with golden D prize cups."
                />
                <AwardsDescription>
                  <Paragraph>
                    Danish Design Awards 2019 <br /> Winner of Peoples Choice
                  </Paragraph>
                </AwardsDescription>
              </Award>
              <Award>
                <Image
                  src="/venture-cup.jpg"
                  width={500}
                  height={300}
                  style={{ objectFit: "cover" }}
                  alt="SubReader team holding a check of 100.000 danish kroner."
                />
                <AwardsDescription>
                  <Paragraph>
                    Venture Cup Denmark 2020 <br /> Winner with SubReader
                  </Paragraph>
                </AwardsDescription>
              </Award>
              <Award>
                <Image
                  src="/hack-the-crisis.png"
                  width={500}
                  height={300}
                  style={{ objectFit: "cover" }}
                  alt="CovidGuard team on video call during Hack the Crisis."
                />
                <AwardsDescription>
                  <Paragraph>
                    Hack the Crisis Hackathon <br /> Winner in Saving lives
                  </Paragraph>
                </AwardsDescription>
              </Award>
            </Awards>
          </Content>
        </Container>
      </AwardsSection>
      <MantraSection>
        <Container>
          <Content>
            <SubHeading>Mantra</SubHeading>
            <LargeParagraph>
              I believe that great user experience is a result of obsessively
              trying to understand peoples needs combined with cutting edge
              tech.
            </LargeParagraph>
          </Content>
        </Container>
      </MantraSection>
      {/* <AppearancesSection>
          <Container>
            <Content>
              <SubHeading>Appearances</SubHeading>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/-1d9uNLn0bc"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Content>
          </Container>
        </AppearancesSection> */}
    </>
  );
}