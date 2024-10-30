export const getQueryParamsFromSearch = (params: {
  [key: string]: string;
}): string[] => {
  const query = [];
  for (const [key, value] of Object.entries(params)) {
    if (value) {
      query.push(`${key}=${value}`);
    }
  }
  return query;
};
