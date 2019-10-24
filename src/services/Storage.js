
export const saveUser = user => {
	localStorage.setItem('data', JSON.stringify(user));
};

export const getUser = () => {
	const user = localStorage.getItem('data');
  return JSON.parse(user)
};

export const deleteStorage = () => {
  localStorage.clear();
}
