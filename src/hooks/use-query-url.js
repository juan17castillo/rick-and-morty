import { useLocation } from "react-router-dom";

export const useQueryURL = () => {
    return new URLSearchParams(useLocation().search);
}
  