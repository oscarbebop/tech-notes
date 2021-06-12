import React, { useContext, useEffect, useState } from 'react';

import MainContext from '../../../context/context';
import { IContext, Lang } from '../../../context/types';

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
    navigator.clipboard.writeText(code);
    setShowPopUp(true);
  };

  const copyText = language === Lang.EN ? 'Copied' : 'Copiado';

  const [localTheme, setLocalTheme] = useState<undefined | string>(undefined);

  useEffect(() => {
    setLocalTheme(localStorage.getItem('theme'));
  }, [theme]);

  useEffect(() => {
    if (showPopUp) {
      setTimeout(() => {
        setShowPopUp(false);
      }, 2000);
    }
  }, [showPopUp]);

  const isTheLocalThemeWhite: boolean = localTheme === 'light';

  return (
    <>
      <CodeContainer isTheThemeWhite={lightTheme}>
        <CodeHeader>
          <IconButton
            isActive={showPopUp}
            type="button"
            onClick={handleCopyButton}
            aria-label="copy button"
          >
            <FiCopy size="1.5em" color={colors.gray} />
          </IconButton>
        </CodeHeader>
        <SyntaxHighlighter
          language={technology}
          style={isTheLocalThemeWhite ? xcode : atomOneDark}
        >
          {code}
        </SyntaxHighlighter>
      </CodeContainer>
      {showPopUp && <SuccessfulContainer>{copyText}</SuccessfulContainer>}
    </>
  );
}
