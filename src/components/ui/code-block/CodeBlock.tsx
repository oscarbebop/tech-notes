import React, { useContext, useEffect, useState } from 'react';

import MainContext from '../../../context/context';
import { IContext, Lang } from '../../../context/types';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiCopy } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  atomOneDark,
  xcode
} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { colors } from '../../../constants';
import {
  CodeContainer,
  CodeHeader,
  IconButton,
  SuccessfulContainer
} from './CodeBlock.styles';

interface IProps {
  technology: string;
  code: string;
}

export default function CodeBlock(props: IProps): JSX.Element {
  const { code, technology } = props;

  const { language, theme } = useContext<IContext>(MainContext);

  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  const lightTheme: boolean = theme === 'light';

  const handleCopyButton = (): void => {
    setShowPopUp(true);
  };

  const copyText = language === Lang.EN ? 'Copied' : 'Copiado';

  useEffect(() => {
    if (showPopUp) {
      setTimeout(() => {
        setShowPopUp(false);
      }, 2000);
    }
  }, [showPopUp]);

  const [localTheme, setLocalTheme] = useState<undefined | string>(undefined);

  useEffect(() => {
    setLocalTheme(localStorage.getItem('theme'));
  }, [theme]);

  const dinamicTheme: boolean = localTheme === 'light';

  return (
    <>
      <CodeContainer className="code_background" isTheThemeWhite={lightTheme}>
        <CodeHeader className="code_header_background">
          <CopyToClipboard text={code}>
            <IconButton
              isActive={showPopUp}
              type="button"
              onClick={handleCopyButton}
              aria-label="copy button"
            >
              <FiCopy size="1.5em" color={colors.gray} />
            </IconButton>
          </CopyToClipboard>
        </CodeHeader>
        <SyntaxHighlighter
          language={technology}
          style={dinamicTheme ? xcode : atomOneDark}
        >
          {code}
        </SyntaxHighlighter>
      </CodeContainer>
      {showPopUp && <SuccessfulContainer>{copyText}</SuccessfulContainer>}
    </>
  );
}
