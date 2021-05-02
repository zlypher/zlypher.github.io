const dateFormatter = new Intl.DateTimeFormat([], {
  dateStyle: "long",
  // as any to intentionally hide the build error. https://github.com/microsoft/TypeScript/issues/38266
} as any);

export const formatDate = (date: Date) => {
  return dateFormatter.format(date);
};
