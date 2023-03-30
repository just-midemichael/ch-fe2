import type { PropsWithChildren } from "react";

export const LoadingIndicator: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`inline-block h-5 w-5 animate-spin rounded-full border-2 border-r-transparent ${props.className}`}
        role="status"
      />
    </div>
  );
};

type Props = {
  message: string;
  loading: boolean;
};

export const Loader: React.FC<PropsWithChildren<Props>> = ({
  loading,
  children,
  message
}) => {
  return (
    <>
      {loading ? (
        <div className="flex h-full w-full items-center justify-center gap-2 p-3">
          <LoadingIndicator className="text-pryBase" />
          <span>{message}</span>
        </div>
      ) : (
        children
      )}
    </>
  );
};
