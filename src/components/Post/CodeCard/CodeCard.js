import React, { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import styled from "styled-components";

const Pre = styled.pre`
  text-align: left;
  padding: 2em 0.5em;
  overflow: scroll;
  opacity: 0;
  height: 100%;
  border-radius: 0 0 5px 5px;
`;

const Line = styled.div`
  display: table-row;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none !important; /* Firefox 64 */
  &::-webkit-scrollbar {
    width: 0;
  }
  & > * {
    font-size: 0.8rem;
  }
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CopyBtn = styled.button`
  font-family: "Roboto", sans-serif;
  background-color: #e1693da3;
  border: none;
  border-radius: 5px;
  padding: 5px 8px;
  cursor: pointer;
  color: white;
  margin-left: 1rem;
  transition: all 0.3s ease;
  &:focus {
    outline: 1px dashed #d0d0d069;
  }
`;

const code = `<Highlight {...defaultProps} theme={theme} code={code} language="jsx">
{({ className, style, tokens, getLineProps, getTokenProps }) => (
  <Pre className={className} style={style}>
    {tokens.map((line, i) => (
      <Line key={i} {...getLineProps({ line, key: i })}>
        <LineNo>{i + 1}</LineNo>
        <LineContent>
          {line.map((token, key) => (
            <span key={key} {...getTokenProps({ token, key })} />
          ))}
        </LineContent>
      </Line>
    ))}
  </Pre>
)}
</Highlight>`;

const CodeCard = ({ mdxCode, opacity }) => {
  const [isCopied, setIsCopied] = useState();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
  };

  const handleCopied = () => {
    setTimeout(() => {
      setIsCopied(false);
    }, 500);
  };
  const status = isCopied ? `Copied!` : `Copy`;
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={{ opacity, ...style }}>
          <ContainerBtn style={{ display: "flex", justifyContent: "flex-end" }}>
            <CopyBtn
              onClick={() => handleCopy()}
              onMouseLeave={() => {
                handleCopied();
              }}
            >
              {status}
            </CopyBtn>
          </ContainerBtn>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export { CodeCard };
