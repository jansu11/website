const ModernButton = ({ text, onClick,visible }) => {
    if(!visible) return null;
  return (
    <button
      onClick={onClick}
      className="underline text-xs lg:text-sm font-medium text-gray-800 dark:text-button-dark hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 ease-in-out px-2 py-1 sm:px-4 sm:py-2"
    >
      {text}
    </button>
  );
};

export default ModernButton;