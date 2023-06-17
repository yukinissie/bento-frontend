import FormatDate from "./FormatDate";
export default {
    title: "Example/FormatDate",
    component: Date,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
};
const args = {
    dateString: "2023-06-17T05:21:56.000Z",
};
export const Default = () => <FormatDate {...args} />;
