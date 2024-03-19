import { ReactNode } from "react";

type Props = {
  component: ReactNode;
  title: string;
};
const Item = ({ component, title }: Props) => {
  return (
    <div className="flex flex-col text-xl text-[#813F3D] cursor-pointer items-center hover:text-[#622d2b] transition-all gap-4">
      <span className="text-5xl ">{component}</span>
      <span className="font-bold">{title}</span>
    </div>
  );
};

export default Item;
