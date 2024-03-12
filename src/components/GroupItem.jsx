import React from 'react';
import '../CSS/GroupItem.css'; 

function GroupItem({ group }) {
    return (
        <div className="group-item">
            <div className="group-item-name">Название группы: {group.name}</div>
            <div className="group-item-type">Тип приватности: {group.closed ? 'Закрытая' : 'Открытая'}</div>
            <div className="group-item-members">Подписчики: {group.members_count}</div>
            {group.avatar_color && (
                <div className="group-avatar" style={{ backgroundColor: group.avatar_color }}></div>
            )}
            {group.friends && group.friends.length > 0 && (
                <div className="group-friends">
                    <button onClick={() => alert(` Друзей в группе: ${group.name}: ${group.friends.map(friend => `${friend.first_name} ${friend.last_name}`).join(', ')}`)}>
                        Друзья: {group.friends.length}
                    </button>
                </div>
            )}
        </div>
    );
}

export default GroupItem;
