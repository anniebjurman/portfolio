import { useEffect } from "react";
import "./Filter.css";
import { FilterCategories } from "../enums";

function Filter(props: any) {

    useEffect(() => {
        if (props.activeFilter === FilterCategories.ALL) {
            props.setFiltered(props.projects);
            return;
        }

        const filtered = props.projects.filter((p : any) => p.filter.includes(props.activeFilter));
        props.setFiltered(filtered);

    }, [props.activeFilter])

    return (
        <div className="filter-container">
            <button className={props.activeFilter === FilterCategories.ALL ? "active" : ''}
                    onClick={() => props.setActiveFilter(FilterCategories.ALL)}>all</button>
            <button className={props.activeFilter === FilterCategories.DESIGN ? "active" : ''}
                    onClick={() => props.setActiveFilter(FilterCategories.DESIGN)}>design</button>
            <button className={props.activeFilter === FilterCategories.REACT ? "active" : ''}
                    onClick={() => props.setActiveFilter(FilterCategories.REACT)}>react</button>
            <button className={props.activeFilter === FilterCategories.ANGULAR ? "active" : ''}
                    onClick={() => props.setActiveFilter(FilterCategories.ANGULAR)}>angular</button>
            <button className={props.activeFilter === FilterCategories.REACT_NATIVE ? "active" : ''}
                    onClick={() => props.setActiveFilter(FilterCategories.REACT_NATIVE)}>react native</button>
            <button className={props.activeFilter === FilterCategories.COMPUTER_GRAPHICS ? "active" : ''}
                    onClick={() => props.setActiveFilter(FilterCategories.COMPUTER_GRAPHICS)}>computer graphics</button>
            <button className={props.activeFilter === FilterCategories.ANDROID ? "active" : ''}
                    onClick={() => props.setActiveFilter(FilterCategories.ANDROID)}>android</button>
        </div>
    )
}

export default Filter;