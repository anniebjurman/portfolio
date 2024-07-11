
import { useColorScheme } from "./useColorScheme";
import { motion } from "framer-motion";
import { DarkModeIcon, LightModeIcon } from "../icons";

export const DarkModeToggle = () => {
    const { isDark, setIsDark } = useColorScheme();

    return (
        <motion.div
            className='icon'
            whileHover={{ scale: 1.1 }}
            onClick={() => {
                setIsDark(!isDark)
                console.log("dark", isDark)
            }}
        >
            {/* {isDark ? LightModeIcon('#FFFBF5') : DarkModeIcon('#1c1c1c')} */}
            {isDark ? <h3>light mode</h3> : <h3>dark mode</h3>}
        </motion.div>
    );
};