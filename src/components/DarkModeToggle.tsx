
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
            {isDark ? LightModeIcon('#EFD6AC') : DarkModeIcon('#1c1c1c')}
        </motion.div>
    );
};