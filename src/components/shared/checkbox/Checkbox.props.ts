import type { ChangeEvent } from "react";

export default interface CheckboxProps {
  label: string;
  value: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
