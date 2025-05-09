import { ReactNode } from "react";

const Button = ({
  type,
  onClick,
  children,
}: {
  type?: string;
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      type={type as "submit" | "reset" | "button" | undefined}
      onClick={onClick}
      className="w-full  bg-[#50C2C9] rounded-lg py-4 text-lg font-semibold text-white"
    >
      {children}
    </button>
  );
};

export default Button;
