const dateFormatter = new Intl.DateTimeFormat([], { dateStyle: "long" });

export const formatDate = (date: Date) => {
  return dateFormatter.format(date);
};
