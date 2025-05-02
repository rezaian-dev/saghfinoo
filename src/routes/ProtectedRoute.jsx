import { useContext, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FilterContext } from '../context/FilterContext';
import useToast from '../hooks/useToast';

/**
 * 🛡️ ProtectedRoute – Guards routes for authenticated users only
 **/
const ProtectedRoute = ({ children }) => {
  // 🔧 Hooks & Context
  const { setProtectedRedirect } = useContext(FilterContext);
  const { handleToastError } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const toastShownRef = useRef(false); // 🚫 Prevents duplicate toasts/redirects
 const user = JSON.parse(localStorage.getItem("user"));
  // 🔐 Authentication check
  useEffect(() => {
    
    if (!user && !toastShownRef.current) {
      toastShownRef.current = true;
      
      setProtectedRedirect(true); // 🚩 Mark protected route attempt
      navigate('/', { state: { from: location.pathname } });
      
      // ⏳ Show toast after navigation for better UX
      setTimeout(() => {
        handleToastError('لطفاً ابتدا وارد حساب کاربری خود شوید!');
      }, 1000);
    }
  }, [user, location, navigate, setProtectedRedirect, handleToastError]);

  return user ? children : null; // 👶 Render children only when authenticated
};

export default ProtectedRoute;