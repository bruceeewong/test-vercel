import dayjs from "dayjs";

export function formatDateMMDD1(date: string | number) {
  return dayjs(date).format("MMM DD");
}

export function formatDateMMDDYYYY1(date: string | number) {
  return dayjs(date).format("MMM DD, YYYY");
}
