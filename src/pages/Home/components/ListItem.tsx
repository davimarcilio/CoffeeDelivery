import { ListIcon, ListIconProps } from "./ListIcon";

interface ListItemProps extends ListIconProps {
  title: string;
}

export function ListItem({ children, title, bgColor }: ListItemProps) {
  return (
    <li className="flex items-center gap-3 font-Roboto text-base-text">
      <ListIcon bgColor={bgColor}>{children}</ListIcon>
      {title}
    </li>
  );
}
