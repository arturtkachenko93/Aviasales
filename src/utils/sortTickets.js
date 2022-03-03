export const sortTickets = (data, activeFilter) => {
  if (activeFilter === "cheap") {
    return data.sort((previous, next) => previous.price - next.price);
  }
  if (activeFilter === "fast") {
    return data.sort(
      (previous, next) =>
        previous.segments[0].duration +
        previous.segments[1].duration -
        (next.segments[0].duration + next.segments[1].duration)
    );
  }

  if (activeFilter === "optimal") {
    return data.sort(
      (previous, next) =>
        previous.price +
        previous.segments[0].duration +
        previous.segments[1].duration -
        (next.price + next.segments[0].duration + next.segments[1].duration)
    );
  }

  return data;
};
