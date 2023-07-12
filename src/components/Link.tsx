import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import styled from "styled-components";
import { theme } from "../styles/theme";

interface Props {
  ariaLabel: string;
  children: JSX.Element;
  href: string;
}

const StyledLink = styled(animated.a)`
  align: center;
  display: flex;
  justify-content: center;
`;

const Link = ({ ariaLabel, children, href }: Props) => {
  const [isHovered, setHovered] = useState(false);
  const styleProps = useSpring({
    fill: isHovered ? theme.colors.white : theme.colors.grey,
  });

  return (
    <StyledLink
      aria-label={ariaLabel}
      href={href}
      style={styleProps}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </StyledLink>
  );
};

export default Link;
