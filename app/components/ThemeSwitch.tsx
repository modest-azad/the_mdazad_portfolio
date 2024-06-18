import { Switch } from "@nextui-org/react"
import { useState, useEffect } from "react"
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className=" relative">
    <Switch
      defaultSelected={theme === "dark"}
      size="lg"
      color="default"
      startContent={<MdOutlineWbSunny />}
      endContent={<MdDarkMode />}

      onChange={() => {
        setTheme(theme === "light" ? "dark" : "light")
      }}
    >
    </Switch>
    </div>
  )
};

export default ThemeSwitch