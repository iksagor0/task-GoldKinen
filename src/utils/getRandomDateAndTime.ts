export function getRandomDateAndTime(): string {
  const minDate = new Date(2023, 0).getTime();
  const maxDate = new Date().getTime();
  const randomTime = Math.floor(Math.random() * (maxDate - minDate)) + minDate;

  // Convert the random timestamp to a Date object
  const randomDate = new Date(randomTime);

  // Define formatting options
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  // Format the random date and time
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(randomDate);

  return formattedDate;
}
