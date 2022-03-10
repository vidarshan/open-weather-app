import moment from "moment";

export function timestampToDateTime(timestamp: number) {
  return moment.unix(timestamp).format("DD-MMM-YYYY hh:mm A");
}
