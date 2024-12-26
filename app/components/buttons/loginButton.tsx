interface LoginButtonProps {
    onClick?: () => void;
    className?: string;
  }
  
  export default function LoginButton({ onClick, className = '' }: LoginButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`w-full py-4 px-6 bg-[#4CD964] text-white text-xl font-medium rounded-full transition-colors hover:bg-[#45C35A] ${className}`}
      >
        Login
      </button>
    )
  }
  
  