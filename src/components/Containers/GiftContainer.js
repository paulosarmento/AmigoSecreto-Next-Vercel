import styled from "styled-components";

const Background = styled.div`
  background-image: url("/giftbackground.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function GiftContainer({ children }) {
  return <Background>{children}</Background>;
}
