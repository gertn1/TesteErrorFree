import { DefaultTheme } from 'styled-components';

export const dark: DefaultTheme = {
  title: 'dark',
  colors: {
    text: '#F2F4F6',
    text1: '#9ba8b0',
    primary: '#263238',
    secondary: '#12191D',
    ternary: 'rgb(29, 39, 44)',

    blue: '#339af0',
    blueHover: 'rgb(3, 169, 244)',
    orange: ' rgb(255, 152, 0)',

    success: '#1E641D',
    error: '#E3213E',

    gray100: '#F2F4F6',
    gray200: '#D9D9D9',
    gray300: '#898989',
    gray400: '#666666',
    gray500: '#333333',

    opacity100: 'rgba(0, 0, 0, 0.04)',
    opacity200: 'rgba(0, 0, 0, 0.1)',
    opacity300: 'rgba(0, 0, 0, 0.3)',
    opacity400: 'rgba(0, 0, 0, 0.5)',
    opacity500: 'rgba(0, 0, 0, 0.9)',
  },
  fontSizes: {
    1: '1.2rem',
    2: '1.4rem',
    3: '1.6rem',
    4: '2rem',
    5: '2.4rem',
    6: '2.8rem',
    7: '3.2rem',
    8: '4.8rem',
    9: '6.4rem',
    10: '7.2rem',
  },
  weight: {
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
    7: 700,
    8: 800,
    9: 900,
  },
  space: {
    0: '2px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
  },
  radius: {
    1: '4px',
    2: '8px',
    3: '10px',
    4: '16px',
    5: '20px',
    round: '50%',
  },
  shadows: {
    1: '0 2px 4px 0px rgba(0, 0, 0, 0.2)',
    2: '2px 2px 12px 2px rgba(99, 99, 99, 0.3)',
  },
  zIndices: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
};

export const light: DefaultTheme = {
  title: 'light',
  colors: {
    text: '#333333', // Texto escuro para contraste com o fundo claro
    text1: '#555555', // Um tom de cinza um pouco mais claro para textos secundários
    primary: '#F2F6F8', // Mantenha a cor primária clara
    secondary: '#c0b2b4', // Uma cor secundária brilhante para elementos de destaque
    ternary: '#cccccc', // Uma cor terciária neutra

    blue: '#339af0',
    blueHover: '#1e7ad4', // Um azul um pouco mais escuro para o hover
    orange: '#ff6d05', // Mantenha a cor laranja brilhante para elementos interativos

    success: '#28a745', // Verde para sucesso
    error: '#dc3545', // Vermelho para erros

    gray100: '#f8f9fa', // Escala de cinza para diferentes níveis de profundidade
    gray200: '#e9ecef',
    gray300: '#dee2e6',
    gray400: '#ced4da',
    gray500: '#adb5bd',

    opacity100: 'rgba(0, 0, 0, 0.04)',
    opacity200: 'rgba(0, 0, 0, 0.1)',
    opacity300: 'rgba(0, 0, 0, 0.3)',
    opacity400: 'rgba(0, 0, 0, 0.5)',
    opacity500: 'rgba(0, 0, 0, 0.9)',
  },
  fontSizes: {
    1: '1.2rem',
    2: '1.4rem',
    3: '1.6rem',
    4: '2rem',
    5: '2.4rem',
    6: '2.8rem',
    7: '3.2rem',
    8: '4.8rem',
    9: '6.4rem',
    10: '7.2rem',
  },
  weight: {
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
    7: 700,
    8: 800,
    9: 900,
  },
  space: {
    0: '2px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
  },
  radius: {
    1: '4px',
    2: '8px',
    3: '10px',
    4: '16px',
    5: '20px',
    round: '50%',
  },
  shadows: {
    1: '0 2px 4px 0px rgba(0, 0, 0, 0.2)',
    2: '2px 2px 12px 2px rgba(99, 99, 99, 0.3)',
  },
  zIndices: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
};
