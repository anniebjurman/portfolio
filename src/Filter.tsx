import { useEffect } from "react";
import "./Filter.css";

function Filter(props: any) {

    useEffect(() => {
        if (props.activeFilter === "all") {
            props.setFiltered(props.projects);
            return;
        }

        const filtered = props.projects.filter((p : any) => p.filter.includes(props.activeFilter));
        props.setFiltered(filtered);

    }, [props.activeFilter])

    return (
        <div className="filter-container">
            <button className={props.activeFilter === 'all' ? "active" : ''}
                    onClick={() => props.setActiveFilter('all')}>all</button>
            <button className={props.activeFilter === 'design' ? "active" : ''}
                    onClick={() => props.setActiveFilter('design')}>design</button>
            <button className={props.activeFilter === 'react' ? "active" : ''}
                    onClick={() => props.setActiveFilter('react')}>react</button>
            <button className={props.activeFilter === 'angular' ? "active" : ''}
                    onClick={() => props.setActiveFilter('angular')}>angular</button>
        </div>
    )
}

export default Filter;