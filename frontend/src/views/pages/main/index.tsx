import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "hooks/hook";
import { ProductItem } from "components/ProductItem";
import { getProductsActions } from "services/products";
import { Loader } from "components/Loader";
const MainPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState<boolean>(false);

  const { products } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (!products.length) {
      setLoading(true);
      dispatch(getProductsActions()).then(() => setLoading(false));
    }
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loader />;
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="flex flex-wrap">
        {loading && <div>Loading...</div>}

        {products.map((product) => (
          <ProductItem
            key={product._id}
            _id={product._id}
            title={product.title}
            text={product.text}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export { MainPage };
