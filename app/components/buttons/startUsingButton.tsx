interface StartUsingButtonProps {
    onClick?: () => void;
    className?: string;
  }
  
  export default function StartUsingButton({ onClick, className = '' }: StartUsingButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`w-full py-4 px-6 bg-[#4CD964] text-black text-xl font-bold rounded-full flex items-center justify-center gap-3 transition-all hover:bg-[#45C35A] ${className}`}
      >
        START USING
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M14 5l7 7m0 0l-7 7m7-7H3" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
    )
  }
  
  