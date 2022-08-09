import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
// import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      <button type="button" onClick={backToTop} className={isVisible ? "opacity-100 inline-flex items-center p-3 rounded-full shadow-sm text-white bg-teal-500 transition-opacity hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-300" : "opacity-0"}>
        <FaAngleUp className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}

export default ScrollToTop;
