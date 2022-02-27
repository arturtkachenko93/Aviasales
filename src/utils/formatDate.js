import { format } from "date-fns";

export const departureFormat = (date) => format(new Date(date), "HH:mm");

export const arrivalFormat = (date, duration) =>
  format(new Date(new Date(date).getTime() + duration * 1000 * 60), "HH:mm");

export const getTimeFromMins = (mins) => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return `${hours}ч  ${minutes < 10 ? `0${minutes}` : minutes}м`;
};
