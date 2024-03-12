export const fetchGroups = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('/public/groups.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Нет ответа сети');
          }
          return response.json();
        })
        .then(data => {
          if (data.result === 1 && data.data) {
            resolve(data);
          } else {
            throw new Error('Неверная структура данных');
          }
        })
        .catch(error => {
          reject(new Error(`Не удалось получить группы: ${error.message}`));
        });
    }, 1000);
  });
};
