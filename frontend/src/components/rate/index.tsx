import { useCallback } from "react";
import { StarIcon } from "components/icons/star";
interface IProps {
  rate: string | number;
  readonly?: boolean;
  className?: string;
  setRate?: (num: number) => void;
}

const RateComments = ({
  rate,
  readonly,
  className,
  setRate,
}: IProps): JSX.Element => {
  const handleChange = useCallback(
    (num: number) => {
      if (setRate) {
        setRate(num);
      }
    },
    [setRate]
  );

  return (
    <div className={`flex ${className}`}>
      {[1, 2, 3, 4, 5].map((num) => {
        return (
          <div key={num} onClick={() => !readonly && handleChange(num)}>
            <StarIcon
              key={num}
              className={`ml-1 cursor-pointer ${
                rate < num ? "fill-slate-300" : "fill-black"
              }`}
            />
          </div>
        );
      })}
    </div>
  );
};

export { RateComments };
