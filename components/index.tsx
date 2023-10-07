"use client";
import styled, { css } from "styled-components";
import { LargeParagraph } from "./typography";

export const HighlightingLargeParagraph = styled(LargeParagraph)`
  transition: color 200ms;
  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const Highlight = styled.span`
  color: white;
`;

export const AboutSection = styled.section`
  @keyframe fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: fadeInUp 200ms linear;
  margin: 2rem 0;
`;

export const AbountDescription = styled.div`
  @media (min-width: 960px) {
    padding: 0 5rem;
    transform: translateY(-5rem);
  }
`;

export const MantraSection = styled.section`
  background-color: #111;
  color: white;
  padding: 5rem 0;
  margin: 2rem 0;
  background: radial-gradient(
    circle,
    rgba(34, 193, 195, 0.13068977591036413) 0%,
    rgba(255, 178, 12, 0.08867296918767509) 100%
  );
  background: radial-gradient(
    circle,
    rgba(51, 34, 195, 0.13068977591036413) 0%,
    rgba(255, 12, 182, 0.08867296918767509) 100%
  );
  background: linear-gradient(
    300deg,
    rgba(51, 34, 195, 0.13068977591036413) 0%,
    rgba(255, 12, 182, 0.08867296918767509) 100%
  );
`;

export const AwardsSection = styled.section``;

export const AwardsDescription = styled.div``;

export const Awards = styled.div`
  @media (min-width: 960px) {
    padding: 2rem 0;
    padding-bottom: 10rem;
    & article:nth-child(even) {
      text-align: right;
    }
  }
`;

export const Award = styled.article`
  margin: 2rem 0;
  @media (min-width: 960px) {
    align-self: flex-start;
    max-height: 250px;
  }
`;

export const AppearancesSection = styled.section`
  background-color: white;
  color: black;
`;

export const CompetenciesSection = styled.section``;

export const Competencies = styled.div`
  @media (min-width: 960px) {
    display: flex;
    margin: 0 -2rem;
  }
`;

export const Competency = styled.div`
  margin: 2rem 0;
  @media (min-width: 960px) {
    flex: 1;
    padding: 2rem;
    margin: 0;
  }
`;
