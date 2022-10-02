import { useNavigate } from "react-router-dom";

const BackBotton = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(-1)}
      className="flex items-center mt-5 cursor-pointer"
    >
      <svg
        data-testid="geist-icon"
        fill="none"
        height="15"
        shape-rendering="geometricPrecision"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        width="15"
      >
        <path d="M19 12H5"></path>
        <path d="M12 19l-7-7 7-7"></path>
      </svg>
      Back
    </div>
  );
};

export { BackBotton };
