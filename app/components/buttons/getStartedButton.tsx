interface GetStartedButtonProps {
    onClick?: () => void;
    className?: string;
  }
  
  export default function GetStartedButton({ onClick, className = '' }: GetStartedButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`w-full py-4 px-6 bg-[#4CD964] text-white text-xl font-medium rounded-full shadow-lg transition-all hover:bg-[#45C35A] hover:shadow-xl ${className}`}
      >
        Get started
      </button>
    )
  }
  
  