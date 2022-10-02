import { CommentForm } from "components/Forms/CommentForm";
import { IComment } from "interfaces/IComment";
import { RateComments } from "components/rate";
import { format } from "date-fns";

import { useAuth } from "hooks/useAuth";

interface IProps {
  comments: IComment[];
  productId: string | undefined;
  updateComments: () => void;
}
const ProductCommentBlock = (props: IProps): JSX.Element => {
  const { comments, productId, updateComments } = props;
  const { isAuth } = useAuth();

  return (
    <div className="max-w-sm w-full pb-5 mt-20">
      {isAuth ? (
        <CommentForm updateComments={updateComments} productId={productId} />
      ) : (
        <div>Войдите или зарегестрируйтесь, что бы оставить комментарий</div>
      )}
      {comments.map((comment) => {
        return (
          <div className="mt-12" key={comment._id}>
            <h4 className="text-2xl">{comment.username}</h4>
            <div className="mt-2 flex justify-between">
              <RateComments rate={comment.rate} readonly />
              <div className="text-slate-500">
                {format(new Date(comment.created_at), "MMMM do, yyyy H:mma")}
              </div>
            </div>
            <div className="mt-2 text-base">{comment.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export { ProductCommentBlock };
