import React from 'react';
import '../CSS/GroupFilter.css';

function GroupFilter({ filter, setFilter }) {
    return (
        <div className="group-filter">
            <div className="filter-section">
                <label>Тип приватности:</label>
                <select value={filter.type} onChange={e => setFilter({ ...filter, type: e.target.value })}>
                    <option value="all">Все</option>
                    <option value="closed">Закрытая</option>
                    <option value="open">Открытая</option>
                </select>
            </div>
            <div className="filter-section">
                <label>Цвет аватара:</label>
                <select value={filter.color} onChange={e => setFilter({ ...filter, color: e.target.value })}>
                    <option value="any">Все</option>
                    <option value="red">Красный</option>
                    <option value="green">Зеленый</option>
                    <option value="blue">Синий</option>
                </select>
            </div>
            <div className="filter-section">
                <label>Есть друзья:</label>
                <input 
                    type="checkbox" 
                    checked={filter.hasFriends} 
                    onChange={e => setFilter({ ...filter, hasFriends: e.target.checked })} 
                />
            </div>
        </div>
    );
}
export default GroupFilter;
