import { ComponentProps, ElementType } from "react";

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children: string;
  loading?: boolean;
  as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = "button";

function Button<E extends ElementType = typeof defaultElement>({
  children,
  as,
  loading = false,
  ...rest
}: ButtonProps<E>): JSX.Element {
  const Tag = as || defaultElement;

  return (
    <Tag
      className="w-full py-2 px-4 rounded-md bg-black font-semibold text-white hover:opacity-90"
      {...rest}
    >
      {loading ? "Loading..." : children}
    </Tag>
  );
}

export { Button };
