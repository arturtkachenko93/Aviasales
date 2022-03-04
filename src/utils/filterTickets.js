export const filterTickets = (data, checkboxes) => {
  const checked = checkboxes.filter((transfer) => transfer.checked);
  const all = checked.some((transfer) => transfer.name === "all");
  if (all) {
    return data;
  }

  return data.filter((ticket) => {
    const stops = ticket.segments[0].stops.length + ticket.segments[1].stops.length;
    return checked.some((check) => stops === check.value);
  });
};
