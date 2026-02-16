export function getImagePath(imagePath: string): string {
  // If the path is already a full URL, return it
  if (imagePath.startsWith('http')) {
    return imagePath;
  }

  // Remove leading slash if present to avoid double slashes with BASE_URL
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;

  // Use import.meta.env.BASE_URL which Vite provides
  // It will be '/' in dev and '/Smruti-tour-travels/' in prod (if set in vite.config.ts)
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}