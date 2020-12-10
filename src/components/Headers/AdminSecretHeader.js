import styled from "styled-components";
import ImageContainer from "../Containers/ImageContainer";
import Logo from "../Logo";
import Input from "../Input";
const Container = styled.div``;

const DivForm = styled.div``;

export default function AdminSecretHeader() {
  const link = "https://link.com/sala";

  return (
    <ImageContainer>
      <Container>
        <Logo />
      </Container>
      <DivForm>
        <p>Compartilhe essa sala com seus amigos!</p>
        <Input value={link} disabled />
      </DivForm>
    </ImageContainer>
  );
}
