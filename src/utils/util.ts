import moment from "moment";

export function timestampToDateTime(timestamp: number, type?: string) {
  return moment
    .unix(timestamp)
    .format(`${type === "dt" ? "LLLL" : "dddd, ll"}`);
}
