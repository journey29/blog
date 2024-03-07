const SuccessMessage = ({ message }: { message: string | undefined }) => {
  if (!message) return null;

  return (
    <div className="rounded-lg bg-emerald-500 p-4 font-bold text-white">
      {message}
    </div>
  );
};

export default SuccessMessage;
