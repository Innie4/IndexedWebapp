interface RequestResetCodeButtonProps {
    onClick?: () => void;
    className?: string;
  }
  
  export default function RequestResetCodeButton({ onClick, className = '' }: RequestResetCodeButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`w-full py-4 px-6 bg-[#4CD964] text-white text-xl font-bold uppercase tracking-wide rounded-full shadow-lg transition-all hover:bg-[#45C35A] hover:shadow-xl ${className}`}
      >
        Request Reset Code
      </button>
    )
  }
  
  