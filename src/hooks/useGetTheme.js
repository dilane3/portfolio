import { useEffect, useState } from "react"
import { getTheme } from "../storage";

export const useGetTheme = (value) => {
  const [theme, setTheme] = useState(value);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const theme = getTheme();

    setTheme(theme);
    setLoading(false)
  }, [])

  return [theme, loading]
}