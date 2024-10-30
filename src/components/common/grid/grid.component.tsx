import GridItem from './grid-item.component';
import styles from './grid.module.scss';

interface IGrid {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode | React.ReactNode[];
}

const Grid = ({ as: Tag = 'div', children }: IGrid) => {
  return <Tag className={styles.grid}>{children}</Tag>;
};

Grid.Item = GridItem;

export default Grid;
