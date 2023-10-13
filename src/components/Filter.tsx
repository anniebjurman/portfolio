import { useEffect } from "react";
import "./Filter.css";
import { FilterCategories } from "../enums";
import { motion } from "framer-motion";

function Filter(props: any) {

        useEffect(() => {
                if (props.activeFilter === FilterCategories.ALL) {
                        props.setFiltered(props.projects);
                        return;
                }

                const filtered = props.projects.filter((p: any) => p.filter.includes(props.activeFilter));
                props.setFiltered(filtered);

        }, [props.activeFilter])

        return (
                <div className="filter-container">
                        <motion.button
                                className={props.activeFilter === FilterCategories.ALL ? "active" : ''}
                                onClick={() => props.setActiveFilter(FilterCategories.ALL)}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                                all
                        </motion.button>
                        <motion.button
                                className={props.activeFilter === FilterCategories.DESIGN ? "active" : ''}
                                onClick={() => props.setActiveFilter(FilterCategories.DESIGN)}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                                design
                        </motion.button>
                        <motion.button
                                className={props.activeFilter === FilterCategories.REACT ? "active" : ''}
                                onClick={() => props.setActiveFilter(FilterCategories.REACT)}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                                react
                        </motion.button>
                        <motion.button
                                className={props.activeFilter === FilterCategories.ANGULAR ? "active" : ''}
                                onClick={() => props.setActiveFilter(FilterCategories.ANGULAR)}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                                angular
                        </motion.button>
                        <motion.button
                                className={props.activeFilter === FilterCategories.REACT_NATIVE ? "active" : ''}
                                onClick={() => props.setActiveFilter(FilterCategories.REACT_NATIVE)}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                                react native
                        </motion.button>
                        <motion.button
                                className={props.activeFilter === FilterCategories.COMPUTER_GRAPHICS ? "active" : ''}
                                onClick={() => props.setActiveFilter(FilterCategories.COMPUTER_GRAPHICS)}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                                computer graphics
                        </motion.button>
                        <motion.button
                                className={props.activeFilter === FilterCategories.ANDROID ? "active" : ''}
                                onClick={() => props.setActiveFilter(FilterCategories.ANDROID)}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                                android
                        </motion.button>
                </div>
        )
}

export default Filter;