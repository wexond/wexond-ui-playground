import { renderUI } from '@wexond/ui';

import {
  FONT_ROBOTO_LIGHT,
  FONT_ROBOTO_MEDIUM,
  FONT_ROBOTO_REGULAR,
} from './constants/fonts';
import App from './components/App';

export const injectFonts = () => {
  const styleElement = document.createElement('style');

  styleElement.textContent = `
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url(${FONT_ROBOTO_LIGHT}) format('woff2');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url(${FONT_ROBOTO_REGULAR}) format('woff2');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url(${FONT_ROBOTO_MEDIUM}) format('woff2');
  }
`;

  document.head.appendChild(styleElement);
};

injectFonts();

renderUI(App);
