const filterObjectToArrayOfNumbers = (filter) => {
  return Object.entries(filter)
    .filter((entrie) => entrie[1])
    .map((truthyEntrie) => {
      switch (truthyEntrie[0]) {
        case 'nonStop':
          return 0;

        case 'oneStop':
          return 1;

        case 'twoStops':
          return 2;

        case 'threeStops':
          return 3;

        default:
          throw new Error('Unsupported filter name encountered');
      }
    });
};

export const filterTiketsList = (tickets, filter) => {
  if (filter.all) return tickets.ticketPack;

  const arrayOfNumbers = filterObjectToArrayOfNumbers(filter);

  return tickets.ticketPack.filter((ticket) => {
    return ticket.segments.every((segment) => arrayOfNumbers.includes(segment.stops.length));
  });
};
