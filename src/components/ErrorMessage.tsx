const ErrorMessage = ({ message }: { message: string | undefined | null }) => {
  if (!message) return null;

  return (
    <div className="rounded-lg bg-red-500 p-4 font-bold text-white">
      {message}
    </div>
  );
};

export default ErrorMessage;
