import React, { useState, useEffect } from 'react';
import GroupItem from './GroupItem';
import GroupFilter from './GroupFilter';
import '../CSS/GroupsList.css';

function GroupsList() {
    const [groups, setGroups] = useState([]);
    const [tempFilter, setTempFilter] = useState({ type: 'all', color: 'any', hasFriends: false });
    const [filter, setFilter] = useState({ ...tempFilter });

    useEffect(() => {
        const timeout = setTimeout(() => {
            fetch('groups.json')
                .then(response => response.json())
                .then(data => {
                    if (data.result === 1 && data.data) {
                        setGroups(data.data);
                    }
                })
                .catch(error => console.error('Error loading the groups:', error));
        }, 1000);
        
        return () => clearTimeout(timeout);
    }, []);

    const applyFilter = () => {
        setFilter({ ...tempFilter });
    };

    const filteredGroups = groups.filter(group => {
        return (filter.type === 'all' || (filter.type === 'closed' && group.closed) || (filter.type === 'open' && !group.closed)) &&
            (filter.color === 'any' || group.avatar_color === filter.color) &&
            (!filter.hasFriends || (group.friends && group.friends.length > 0));
    });

    return (
        <div>
            <GroupFilter filter={tempFilter} setFilter={setTempFilter} />
            <button onClick={applyFilter} className="apply-filter-button">Найти</button>
            <div className="groups-container">
                {filteredGroups.map(group => <GroupItem key={group.id} group={group} />)}
            </div>
        </div>
    );
}

export default GroupsList;
