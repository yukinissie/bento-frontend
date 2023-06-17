import FormatDate from "../Date/FormatDate";

export const GroupCard = ({
    name,
    member,
    created_at,
    id,
}: {
    name: string;
    member: string[];
    created_at: string;
    id: string;
}) => {
    return (
        <button className="border-2 border-[#A0A0A0] rounded-[20px] p-5 flex flex-row mt-4 w-[100%] hover:bg-slate-100">
            <div className="text-start flex-auto">{name}</div>
            <div className="px-2">{member.length}人</div>
            <FormatDate dateString={created_at} />
        </button>
    );
};
