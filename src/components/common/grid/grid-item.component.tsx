interface IGridItem {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode | React.ReactNode[];
}

const GridItem = ({ as: Tag = 'div', children }: IGridItem) => {
  return <Tag>{children}</Tag>;
};

export default GridItem;
