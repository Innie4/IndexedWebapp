interface NextButtonProps {
    onClick?: () => void;
    className?: string;
  }
  
  export default function NextButton({ onClick, className = '' }: NextButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`w-full py-4 px-6 bg-[#4CD964] text-[#1E1E1E] text-xl font-bold uppercase tracking-wide rounded-full shadow-lg transition-all hover:bg-[#45C35A] hover:shadow-xl ${className}`}
      >
        Next
      </button>
    )
  }
  
  