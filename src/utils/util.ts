import moment from "moment";

export function timestampToDateTime (timestamp:number) {
    return moment.unix(timestamp).format("hh:mm A")
}