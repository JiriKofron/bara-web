/// <reference types="astro/client" />
/// <reference types="vite/client" />

declare module '*.webp' {
  import type { ImageMetadata } from 'astro';
  const metadata: ImageMetadata;
  export default metadata;
}
