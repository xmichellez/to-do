import React from "react";
import { Button } from "react-bootstrap";

interface Props {
  active: boolean;
  text: string;
  selected: string;
  onClick: () => void;
}

export const Filter: React.FC<Props> = ({ active, text, onClick }) => {
  function renderActive(): JSX.Element {
    return <Button variant="dark" size="sm" disabled>{text}</Button>;
  }

  function renderNotActive(): JSX.Element {
    return <Button variant="dark" size="sm" onClick={onClick}>{text}</Button>;
  }

  const button = active ? renderActive() : renderNotActive();

  return button;
};

export default Filter;
