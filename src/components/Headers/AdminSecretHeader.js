import styled from "styled-components";
import ImageContainerSecret from "../Containers/ImageContainerSecret";
import Logo from "../Logo";
import Input from "../Input";
import { useEffect, useState } from "react";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.light};
`;

const DivForm = styled.div`
  color: ${({ theme }) => theme.colors.light};
  padding: 20px;
  max-width: 400px;
`;

export default function AdminSecretHeader() {
  const [link, setLink] = useState("");

  useEffect(() => {
    setLink(`${window.location.origin}${window.location.pathname}`);
  }, []);

  return (
    <ImageContainerSecret>
      <Container>
        <Logo />
      </Container>
      <DivForm>
        <p>Compartilhe essa sala com seus amigos!</p>
        <Input value={link} disabled />
      </DivForm>
    </ImageContainerSecret>
  );
}
