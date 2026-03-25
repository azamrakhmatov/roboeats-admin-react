import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DEFAULT_TITLE = "GAEMI Delivery Admin";

const GridIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
    <rect x="2" y="2" width="5" height="5" rx="1" fill="white" />
    <rect x="9" y="2" width="5" height="5" rx="1" fill="white" />
    <rect x="2" y="9" width="5" height="5" rx="1" fill="white" />
    <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.5" />
  </svg>
);

type NavbarProps = {
  showBack?: boolean;
  title?: string;
};

const Navbar = ({ showBack = true, title = DEFAULT_TITLE }: NavbarProps) => {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  return (
    <header className="h-[52px] flex items-center px-4 gap-3 bg-[#F5A623] flex-shrink-0">

      {showBack && (
        <button
          onClick={handleBack}
          aria-label="뒤로"
          className="w-[34px] h-[34px] rounded-full flex items-center justify-center bg-black/[0.18] hover:bg-black/[0.28] transition-colors flex-shrink-0"
        >
          <ChevronLeft className="w-4 h-4 text-white" strokeWidth={2} />
        </button>
      )}

      {/* Title */}
      <div className="flex-1 flex items-center justify-center gap-2">
        <div className="w-[22px] h-[22px] bg-white/20 rounded-md flex items-center justify-center flex-shrink-0">
          <GridIcon />
        </div>
        <span className="text-[15px] font-semibold text-white">{title}</span>
      </div>

    </header>
  );
};

export default Navbar;