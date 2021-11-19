import styled from "styled-components";

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ScrollNotice = () => {
  return (
    <ArrowContainer>
      <svg
        width={26}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 2l11 11L24 2" stroke="#fff" strokeWidth={3} />
      </svg>
    </ArrowContainer>
  );
};
