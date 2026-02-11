/**
 * Get the correct image path for both development and production environments
 * @param imagePath - The image path relative to public folder (e.g., '/images/cars/car1.jpg')
 * @returns - The complete path including base URL
 */
export function getImagePath(imagePath: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // In development, BASE_URL is '/', in production it's '/Smruti-tour-travels/'
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}