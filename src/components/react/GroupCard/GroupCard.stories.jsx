/** @jsxImportSource react */
import { GroupCard } from './GroupCard';
export default {
  title: 'Example/GroupCard',
  component: GroupCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
const args = {
  id: "hogehoge",
  name: 'hogehoge',
  member: ["hoge", "hoge", "hoge"],
  created_at :"2023-06-17T05:21:56.000Z",
}
export const Default = () => <GroupCard {...args}/>
