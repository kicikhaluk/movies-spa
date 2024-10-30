import { Link, useLocation } from 'react-router-dom';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';

import { Poster } from '@/components';

import type { IMoviePreview } from '@/api/movie.api';

import styles from './table.module.scss';

interface ITable {
  data: IMoviePreview[];
}

const Table = ({ data }: ITable) => {
  const { search } = useLocation();
  const columnHelper = createColumnHelper<IMoviePreview>();

  const columns = [
    columnHelper.accessor('imdbID', {
      header: 'ID',
      cell: (info) => (
        <Link to={`${info.getValue()}${search}`}>{info.getValue()}</Link>
      ),
    }),
    columnHelper.accessor('Poster', {
      header: 'Poster',
      cell: (info) => <Poster src={info.getValue()} alt='Poster' />,
    }),
    columnHelper.accessor('Title', {
      header: 'Name',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Type', {
      header: 'Type',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Year', {
      header: 'Release Date',
      cell: (info) => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  });

  return (
    <div className={styles.table_wrapper}>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
