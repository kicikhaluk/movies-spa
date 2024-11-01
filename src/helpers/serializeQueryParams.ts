export const serializeQueryParams = (
  searchParams: URLSearchParams
): string[] => {
  const query = [];
  for (const [key, value] of searchParams.entries()) {
    if (value) {
      query.push(`${key}=${value}`);
    }
  }
  return query;
};
