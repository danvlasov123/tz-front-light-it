import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getProductById, getCommentById } from "services/products";
import { IProduct } from "interfaces/IProduct";
import { IComment } from "interfaces/IComment";
import { NotFoundPage } from "../notfound";
import { Loader } from "components/Loader";
import { ProductCommentBlock } from "components/commentsBlock";
import { BackBotton } from "components/Back";
import { toast } from "react-toastify";
const ProductPage = (): JSX.Element => {
  const { id } = useParams();

  const [product, setProduct] = useState<IProduct | null>(null);
  const [comments, setComments] = useState<IComment[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const updateComments = useCallback(async () => {
    if (id) {
      setLoading(true);
      await getCommentById(id)
        .then((data) => setComments(data))
        .then((): void => setLoading(false));
    }
  }, [setComments, id]);

  useEffect(() => {
    if (id) {
      getProductById(id)
        .then(async (data) => {
          setProduct(data);
          await updateComments();
        })
        .catch((rej) => toast.error("Данного товара не существует"))
        .finally((): void => setLoading(false));
    }
    // eslint-disable-next-line
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loader />;
      </div>
    );
  }

  return product ? (
    <div className="container">
      <BackBotton />
      <div className="px-24 pt-12 flex flex-wrap justify-between">
        <div className="max-w-[40%] w-full">
          <h1 className="text-5xl mb-10">{product.title}</h1>

          <div>
            <img className="w-full" src={product.image} alt="" />
          </div>

          <div className="mt-10 text-xl">{product.text}</div>
        </div>
        <ProductCommentBlock
          comments={comments}
          updateComments={updateComments}
          productId={id}
        />
      </div>
    </div>
  ) : (
    <NotFoundPage />
  );
};

export { ProductPage };
