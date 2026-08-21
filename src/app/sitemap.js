export default function sitemap() {
  const baseUrl = 'https://esp-en-alturas.vercel.app';
  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/servicios/estructuras-metalicas`, lastModified: new Date() },
    { url: `${baseUrl}/servicios/trabajos-en-fachadas`, lastModified: new Date() },
    { url: `${baseUrl}/servicios/lineas-de-vida`, lastModified: new Date() },
    { url: `${baseUrl}/servicios/trabajos-en-cubiertas`, lastModified: new Date() },
  ];
}
