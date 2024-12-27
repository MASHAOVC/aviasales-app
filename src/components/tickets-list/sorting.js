export const sortTicketsList = (ticketsList, sorting) => {
  return ticketsList.toSorted((a, b) => {
    if (sorting === 'the cheapest') {
      return a.price - b.price;
    } else if (sorting === 'the fastest') {
      const durationA = a.segments[0].duration + a.segments[1].duration;
      const durationB = b.segments[0].duration + b.segments[1].duration;

      return durationA - durationB;
    } else {
      return 0; // I don't know what do you want from me!!!
      // (todo implement optimal sorting)
    }
  });
};
