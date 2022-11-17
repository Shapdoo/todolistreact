const ErrorMessage = ({ children }) => {
  return (
    <div className="font-bold text-white bg-red-500 w-full px-5 py-5 text-center mb-5 rounded-lg">
      {children}
    </div>
  );
};

export default ErrorMessage;
