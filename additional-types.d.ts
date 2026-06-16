import 'react'; 

declare module '@coreui/coreui';

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}