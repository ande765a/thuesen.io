import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";
import { DefaultLayout } from "../components/layout";

const RoundedImage = styled(Image)`
  border-radius: 100%;
`;

const Main = styled.main`
  padding: 12px;
`;

const HugeText = styled.h1`
  font-size: 10rem;
  font-weight: 200;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <RoundedImage src="/avatar.jpg" alt="avatar" width={100} height={100} />
        <HugeText>Projects</HugeText>
      </DefaultLayout>
    </>
  );
}
