import { createGlobalStyle } from 'styled-components';
import { themeGet } from 'styled-system';

export const ResetCSS = createGlobalStyle`
  ::selection {
    background: #333333;
    color: #ffffff;
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  // modal default style
  .reuseModalOverlay {
    z-index: 99999;
  }

  .reuseModalHolder {
    padding: 0;
    &.demo_switcher_modal {
      border: 0;
      background-color: rgba(16, 30, 77, 0.9);
      .innerRndComponent {
        border-radius: 8px;
      }
    }
  }

  button.modalCloseBtn {
    position: fixed;
    z-index: 999991;
    background-color: transparent;
    top: 10px;
    right: 10px;
    min-width: 34px;
    min-height: 34px;
    padding: 0;
    span.btn-icon {
      font-size: 22px;
      transform: rotate(45deg);
    }

    &.alt {
      border-radius: 50%;
      z-index: 999999;
      padding: 0;
      transition: all 0.3s ease;
      top: 25px;
      right: 30px;
      min-width: 40px;
      min-height: 40px;

      span.btn-icon {
        font-size: 20px;
      }

      &:hover {
        opacity: 0.88;
      }
    }   
  }
`;
