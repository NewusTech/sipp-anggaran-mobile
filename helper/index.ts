export * from "./downloadFile";

export function getLastYears(lastYears: number) {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let i = 0; i < lastYears; i++) {
    years.push((currentYear - i).toString());
  }

  return years.reverse();
}
