
import { useColorScheme } from "./useColorScheme";
import { motion } from "framer-motion";
import { DarkModeIcon, LightModeIcon } from "../icons";

export const DarkModeToggle = () => {
    const { isDark, setIsDark } = useColorScheme();

    return (
        <motion.div
            className='icon'
            whileHover={{ scale: 1.2 }}
            onClick={() => {
                setIsDark(!isDark)
                console.log("dark", isDark)
            }}
        >
            {isDark ? LightModeIcon('#f4f4f4') : DarkModeIcon('#353e5b')}
        </motion.div>
    );
};