import { motion } from "framer-motion";
import './AnimateArrow.css';

function AnimateArrow(props: {color: string, text: string}) {

    return (
        <div className='arrowContainer'>
            <motion.h2
                // style={{ color: props.color }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 2,
                    duration: .7,
                    ease: "easeIn",
                }}
            >
                {props.text}
            </motion.h2>
            <div className="example">
                <motion.svg
                    viewBox="0 0 72 30"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.path
                        className="path"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            delay: 2.9
                        }}
                        strokeWidth={2}
                        // stroke={props.color}
                        strokeDasharray="0 1"
                        fill="none"
                        d="M0.5 0C0.5 10 4.99298 19.2241 10 21.5C15.5 24 27.5251 21.8891 30 18C33.5 12.5 22 8 18 12.5C13.6689 17.3725 21.5235 24.6581 26.5 27C35 31 46.2025 28.7831 53 21.5C60 14 62 7.5 71.5 9.5"
                    />
                </motion.svg>
            </div>
        </div>
    )
}

export default AnimateArrow