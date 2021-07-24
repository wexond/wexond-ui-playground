import React from 'react';
import { defaultWexondUITheme, applyTheme, Button, Icon } from '@wexond/ui';

import { ICON_ARROW_RIGHT } from '~/constants/icons';
import { Container, GlobalStyle, StyledApp } from './style';

const App = () => {
  React.useEffect(() => {
    applyTheme(defaultWexondUITheme, document.body);
  }, []);

  return (
    <StyledApp>
      <GlobalStyle />
      <Container>
        <Button variant="primary" rightIcon={<Icon src={ICON_ARROW_RIGHT} />}>
          Button
        </Button>
      </Container>
    </StyledApp>
  );
};

export default App;
