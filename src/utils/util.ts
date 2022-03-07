import moment from "moment";

export function timestampToDateTime (timestamp:number) {
    return moment.unix(1646658840).format("hh:mm A")
}