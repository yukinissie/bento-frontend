import { format, parseISO } from "date-fns";

const FormatDate = ({ dateString }) => {
    const date = parseISO(dateString);
    const now = new Date();
    const subSec = parseInt((now - date) / 1000);
    const diff =
        subSec < 60
            ? parseInt(subSec) + "秒前"
            : subSec < 3600
            ? parseInt(subSec / 60, 10) + "分前"
            : subSec < 3600 * 24
            ? parseInt(subSec / 3600) + "時間前"
            : subSec < 3600 * 24 * 5
            ? parseInt(subSec / (3600 * 24)) + "日前"
            : format(date, "yyyy/MM/dd HH:mm");
    return <div style={{ placeSelf: "center" }}>{diff}</div>;
};
export default FormatDate;
