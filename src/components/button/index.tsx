import { Container } from "./style";

interface buttonProps {
  title: string;
  click?: () => void;
}

export function Button({ title, click }: buttonProps) {
  return <Container onClick={click}>{title}</Container>;
}
