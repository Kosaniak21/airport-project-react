export function extractNumber(searchQuery) {
  const params = new URLSearchParams(searchQuery);
  const cityName = params.get('search');
  return cityName ? cityName.trim() : '';
}
export function extractDate(searchQuery) {
  const params = new URLSearchParams(searchQuery);
  const date = params.get('date');
  return date ? date.trim() : '';
}
