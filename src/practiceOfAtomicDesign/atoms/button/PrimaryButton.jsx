import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton type="button">{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
