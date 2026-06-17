declare module '@coreui/coreui';

import 'react'; 

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}