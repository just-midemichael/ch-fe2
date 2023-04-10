import React, { useRef } from "react";
import { get } from "lodash";

import { LoadingIndicator } from "../loader/Loader";
import type { IPagination } from "./Pagination";
import Pagination from "./Pagination";
import { H3 } from "../headings/Headings";

export interface IColumnType<T> {
  key: string;
  title: string;
  width?: string;
  render?: (column: IColumnType<T>, item: T) => React.ReactNode;
  renderHeader?: (column: IColumnType<T>) => React.ReactNode;
  onRowClick?: (item: T) => void;
}

interface Props<T> extends Partial<IPagination> {
  data: T[];
  header: IColumnType<T>[];
  headerComponent?: React.ReactNode;
  isLoading?: boolean;
  withPagination?: boolean;
  onRowClick?: (item: T) => void;
}

interface PropsTableRow<T> {
  data: T[];
  columns: IColumnType<T>[];
  onRowClick?: (item: T) => void;
}

interface PropsTableHeader<T> {
  columns: IColumnType<T>[];
}

interface PropsTableCell<T> {
  item: T;
  column: IColumnType<T>;
}

export function TableHeader<T>({ columns }: PropsTableHeader<T>): JSX.Element {
  return (
    <tr>
      {columns.map((column, columnIndex) => (
        <th
          key={`table-header-${columnIndex}`}
          className={`border-b border-[#DFE2E6] bg-[#F2F2F2] px-3  py-2 text-left font-extrabold tracking-wider text-[#243757]`}
          style={{ width: `${column.width}` }}
        >
          <div className="flex cursor-pointer items-center justify-start text-sm">
            <span>
              {column.renderHeader ? column.renderHeader(column) : column.title}
            </span>
          </div>
        </th>
      ))}
    </tr>
  );
}

function TableRoWCell<T>({ item, column }: PropsTableCell<T>): JSX.Element {
  const value = get(item, column.key);
  return (
    <td
      className={`p-3 text-sm text-[#42526D]`}
      style={{ width: `${column.width}` }}
    >
      {column.render ? (
        column.render(column, item)
      ) : (
        <span className="truncate text-sm">{value}</span>
      )}
    </td>
  );
}

export function TableRow<T>({
  data,
  columns,
  onRowClick
}: PropsTableRow<T>): JSX.Element {
  return (
    <>
      {data.map((item, itemIndex) => (
        <tr
          className="cursor-pointer hover:bg-primary50"
          key={`table-body-${itemIndex}`}
          onClick={() => onRowClick!(item)}
        >
          {columns.map((column, columnIndex) => (
            <TableRoWCell
              key={`table-body-${columnIndex}`}
              item={item}
              column={column}
            />
          ))}
        </tr>
      ))}
    </>
  );
}

export function Table<T>({
  data,
  header,
  headerComponent,
  onRowClick,
  isLoading = false,
  withPagination = false,
  ...paginationProps
}: Props<T>): JSX.Element {
  const headerComponentRef = useRef<HTMLDivElement | null>(null);
  const topSpace = headerComponentRef?.current?.clientHeight || 0;

  return (
    <div>
      <div className="relative rounded-md border border-[#EBEDF0] shadow-md">
        <div ref={headerComponentRef} className="p-5">
          {headerComponent}
        </div>
        {isLoading && (
          <div
            className="absolute inset-x-0 bottom-0 z-[2] flex h-full items-start justify-center bg-white/80 py-10"
            style={{
              top: `${topSpace + 65}px`
            }}
          >
            <div>
              <LoadingIndicator className="mb-1 h-6 w-6 border-primary600" />
              <p>Loading ...</p>
            </div>
          </div>
        )}
        <table className="table h-auto w-full table-auto border-none p-3">
          <thead>
            <TableHeader columns={header} />
          </thead>
          <tbody className="relative">
            <TableRow data={data} columns={header} onRowClick={onRowClick} />
          </tbody>
        </table>
        {isLoading && data.length === 0 && (
          <div className="z-[2] flex items-start justify-center py-10">
            <div>
              <LoadingIndicator className="mb-1 h-6 w-6 border-primary600" />
              <p>Loading ...</p>
            </div>
          </div>
        )}
        {!isLoading && data.length === 0 && (
          <div className="flex h-[90px] items-center justify-center py-5">
            <div className="text-center">
              <H3>No data available</H3>
              <p className="text-neutral-400">Please try again later</p>
            </div>
          </div>
        )}
      </div>

      {withPagination && (
        <Pagination
          total={10}
          currentPage={paginationProps.currentPage || 1}
          perPage={paginationProps.perPage || 10}
          onPageChange={paginationProps.onPageChange || (() => {})}
          updatePerPage={paginationProps.updatePerPage || (() => {})}
        />
      )}
    </div>
  );
}
