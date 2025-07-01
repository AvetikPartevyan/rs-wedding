/* Global TypeScript declarations for static asset imports.
   These allow importing image and SVG files without TS2307 errors during build. */

declare module '*.jpg';
declare module '*.JPG';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';

declare module '*.svg' {
  const src: string;
  export default src;
}

// When using SVGR (e.g. `import Icon from './icon.svg?react'`)
declare module '*.svg?react' {
  import * as React from 'react';
  import { SVGProps } from 'react';
  const ReactComponent: React.FC<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
