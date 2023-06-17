import { GroupCard } from "../GroupCard/GroupCard";

export const GroupList = () => {
    const groups = [
        {
            id: "hogehoge",
            name: "hogehoge",
            member: ["hoge", "hoge", "hoge"],
            created_at: "2023-06-17T05:21:56.000Z",
        },
        {
            id: "hogehoge",
            name: "hogehoge",
            member: ["hoge", "hoge", "hoge"],
            created_at: "2023-06-17T05:21:56.000Z",
        },
        {
            id: "hogehoge",
            name: "hogehoge",
            member: ["hoge", "hoge", "hoge"],
            created_at: "2023-06-17T05:21:56.000Z",
        },
        {
            id: "hogehoge",
            name: "hogehoge",
            member: ["hoge", "hoge", "hoge"],
            created_at: "2023-06-17T05:21:56.000Z",
        },
        {
            id: "hogehoge",
            name: "hogehoge",
            member: ["hoge", "hoge", "hoge"],
            created_at: "2023-06-17T05:21:56.000Z",
        },
        {
            id: "hogehoge",
            name: "hogehoge",
            member: ["hoge", "hoge", "hoge"],
            created_at: "2023-06-17T05:21:56.000Z",
        },
        {
            id: "hogehoge",
            name: "hogehoge",
            member: ["hoge", "hoge", "hoge"],
            created_at: "2023-06-17T05:21:56.000Z",
        },
        {
            id: "hogehoge",
            name: "hogehoge",
            member: ["hoge", "hoge", "hoge"],
            created_at: "2023-06-17T05:21:56.000Z",
        },
        {
            id: "hogehoge",
            name: "hogehoge",
            member: ["hoge", "hoge", "hoge"],
            created_at: "2023-06-17T05:21:56.000Z",
        },
        {
            id: "hogehoge",
            name: "hogehoge",
            member: ["hoge", "hoge", "hoge"],
            created_at: "2023-06-17T05:21:56.000Z",
        },
        {
            id: "hogehoge",
            name: "hogehoge",
            member: ["hoge", "hoge", "hoge"],
            created_at: "2023-06-17T05:21:56.000Z",
        },
        {
            id: "hogehoge",
            name: "hogehoge",
            member: ["hoge", "hoge", "hoge"],
            created_at: "2023-06-17T05:21:56.000Z",
        },
    ];
    return (
        <div className=" overflow-auto max-h-[80vh]">
            {groups.map((group) => (
                <GroupCard {...group} />
            ))}
        </div>
    );
};
