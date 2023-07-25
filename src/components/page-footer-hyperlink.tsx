import React from "react";

interface FooterHyperlinkProps {
  children: JSX.Element;
  path: string;
}

export const PageFooterHyperlink: React.FC<FooterHyperlinkProps> = ({
  children,
  path,
}) => {
  return (
    <a
      className="page-footer__hyperlink"
      href={path}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
