import React from "react";

interface FooterHyperlinkProps {
  path: string;
}

export const FooterHyperlink: React.FC<FooterHyperlinkProps> = ({
  children,
  path,
}) => {
  return (
    <a
      className="footer__hyperlink"
      href={path}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
