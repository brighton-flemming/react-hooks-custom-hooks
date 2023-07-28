import { useEffect } from "react";

function useDocumentTitle(pageTitle) {
  useEffect(() => {
    document.title = "Our Final Encounter | Home";
  }, []);
}

export default useDocumentTitle;
