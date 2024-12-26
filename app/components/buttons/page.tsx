interface CreateAccountButtonProps {
    onClick?: () => void;
    className?: string;
  }
  
  export default function CreateAccountButton({ onClick, className = '' }: CreateAccountButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`w-full py-4 px-6 bg-[#F8F9FF] text-[#8F8F8F] text-xl font-medium rounded-full transition-colors hover:bg-[#ECEEFF] ${className}`}
      >
        Create Account
      </button>
    )
  }
  
  