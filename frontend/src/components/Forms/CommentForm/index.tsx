import { useCallback, useState } from "react";
import { AreaTextField } from "components/AreaTextField";
import { RateComments } from "components/rate";
import { Button } from "components/Button";
import { useAppSelector } from "hooks/hook";
import { postCreateComment } from "services/products";
import { toast } from "react-toastify";
interface IProps {
  productId: string | undefined;
  updateComments: () => void;
}

const CommentForm = ({ productId, updateComments }: IProps): JSX.Element => {
  const [rate, setRate] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const { username } = useAppSelector((state) => state.user);

  const onHandleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);
      await postCreateComment({
        rate: String(rate),
        text: comment,
        username,
        id_entry: productId,
        created_at: new Date().toISOString(),
      })
        .then(async () => {
          setLoading(false);
          await updateComments();
          toast.success("Коментарий опубликован");
        })
        .catch(() => toast.error("Возникла ошибка"));
      setComment("");
      setRate(0);
    },
    [rate, comment, username, productId, updateComments]
  );

  return (
    <form onSubmit={onHandleSubmit}>
      <RateComments className="mb-2" rate={rate} setRate={setRate} />
      <AreaTextField
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setComment(e.target.value)
        }
        value={comment}
        placeholder="Type your review"
      />
      <Button loading={loading}>Submit Review</Button>
    </form>
  );
};

export { CommentForm };
