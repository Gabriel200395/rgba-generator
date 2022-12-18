import { format } from "date-fns";

const data = new Date();

let dataFormat = format(new Date(), "dd/MM/yyyy HH:mm");

const hours = data.getHours();

const minutes = data.getMinutes();

export { hours, minutes, dataFormat };
