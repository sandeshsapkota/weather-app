type ErrorComponentTypes = {
  error?: string;
};

const ErrorComponent = (props: ErrorComponentTypes) => {
  const { error = 'Something went wrong.' } = props;
  return (
    <div className="bg-red-100 text-red-600 rounded-xl p-24 text-2xl text-center flex justify-center items-center">
      <p>{error}</p>
    </div>
  );
};

export default ErrorComponent;
