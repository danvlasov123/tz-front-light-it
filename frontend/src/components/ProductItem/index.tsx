import { IProduct } from "interfaces/IProduct";
import { useNavigate } from "react-router-dom";
const ProductItem = (props: IProduct): JSX.Element => {
  const navigate = useNavigate();

  const { image, text, title, _id } = props;
  return (
    <div
      onClick={(): void => navigate(`/product/${_id}`)}
      className="max-w-[320px] w-full m-3 p-4 bg-slate-200 flex flex-col cursor-pointer hover:opacity-90"
    >
      <div className="max-h-56 overflow-hidden h-full">
        <img src={image} className="h-full w-full" alt={_id} />
      </div>
      <div className="py-2">
        <h2 className="text-4xl mb-2">{title}</h2>
        <span className="text-slate-600">{text}</span>
      </div>
    </div>
  );
};

export { ProductItem };
