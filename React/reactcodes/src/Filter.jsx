import { useState } from "react";

function Filter() {
    const [filterQuery, setFilterQuery] = useState("");
    const allItems = ["React", "Javascript", "Python", "Mango", "Angular", "PHP", "NodeJs"];
    const filteredItems = allItems.filter(item =>
        item.toLowerCase().includes(filterQuery.toLowerCase())
    );
    return (
        <>
            <h3>filter items based in search input(use filter and list)</h3>
            <div className="filter">
                <input type="text" placeholder="Search items (e.g. React, Angular, Python)..." value={filterQuery} onChange={(e) => setFilterQuery(e.target.value)} />
                <ul id="filter-list">
                    {filteredItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Filter