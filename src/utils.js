export function getCreationDate(date = new Date()) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    weekday: "long",
  });
  return formatter.format(date);
}
