import ArrowLeftIcon from "@/assets/icons/arrow-left.svg";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import React from "react";

export interface IPagination {
  total: number;
  perPage: number;
  currentPage: number;
  updatePerPage: (perPage: number) => void;
  onPageChange: (page: number) => void;
}

export interface IPaginationApi {
  start: number;
  length: number;
  total: number;
}

const Pagination = ({
  total,
  perPage,
  currentPage,
  updatePerPage,
  onPageChange
}: IPagination) => {
  const handlePageChange = (page: number) => {
    if (
      page > 0 &&
      page <= Math.ceil(total / perPage) &&
      page !== currentPage
    ) {
      onPageChange(page);
    }
  };

  const handlePerPageChange = (limit: number) => {
    if (limit > 0) {
      onPageChange(1);
      updatePerPage(limit);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const totalPage = Math.ceil(total / perPage);
    for (let i = 1; i <= totalPage; i = +1) {
      if (i <= 2 || i >= totalPage - 1 || i === currentPage) {
        pageNumbers.push(i);
      } else if (
        (i < currentPage && i >= currentPage - 2) ||
        (i > currentPage && i <= currentPage + 2)
      ) {
        pageNumbers.push(i);
      } else if (
        (i < currentPage && i === currentPage - 3) ||
        (i > currentPage && i === currentPage + 3)
      ) {
        pageNumbers.push("...");
      }
    }

    return pageNumbers.map((number) => {
      if (number === "...") {
        return (
          <button
            className="rounded-md px-2 py-1 text-sm font-medium"
            key={`pageNumber-${number}`}
          >
            {number}
          </button>
        );
      }

      return (
        <button
          key={number}
          onClick={() =>
            number !== currentPage &&
            number !== "..." &&
            handlePageChange(Number(number))
          }
          className={`${
            number === currentPage
              ? "bg-primary500 text-white"
              : "bg-white text-neutral-400 "
          } rounded-md px-2 py-1 text-sm font-medium`}
        >
          {number}
        </button>
      );
    });
  };

  return (
    <div className="mt-3 flex w-full items-center justify-between py-3 text-sm">
      <div className="flex items-center justify-start text-[#243757]">
        <span>Show</span>
        <span className="mx-3">
          <input
            type="number"
            value={perPage}
            onChange={(e) => handlePerPageChange(Number(e.target.value))}
            className="w-10 appearance-none rounded border border-neutral-300 px-2 py-1 text-center outline-none focus:ring-1 focus:ring-primary500"
          />
        </span>
        <span>Entires</span>
      </div>
      <div className="flex items-center justify-end space-x-3">
        <button>
          <ArrowLeftIcon className="h-5 w-5" />
        </button>
        <div className="flex items-center space-x-2 text-sm">
          {renderPageNumbers()}
        </div>
        <button>
          <ArrowRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

interface IUsePagination {
  defaultPerPage?: number;
  defaultCurrentPage?: number;
  refetch?: (page: number, perPage: number) => void;
}

export const usePagination = ({
  defaultPerPage = 10,
  defaultCurrentPage = 1,
  refetch
}: IUsePagination) => {
  const [currentPage, setCurrentPage] = React.useState(defaultCurrentPage);
  const [perPage, setPerPage] = React.useState(defaultPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (refetch) refetch(currentPage, perPage);
  };

  const handleLimitChange = (limit: number) => {
    setPerPage(perPage);
    if (refetch) refetch(currentPage, limit);
  };

  return {
    currentPage,
    perPage,
    handlePageChange,
    handleLimitChange
  };
};
