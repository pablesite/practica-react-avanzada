
export const saveUserInLS = user => {
	localStorage.setItem('data', JSON.stringify(user));
};

export const getUserFromLS = () => {
	const user = localStorage.getItem('data');
  return JSON.parse(user)
};

export const deleteLS = () => {
  localStorage.clear();
}
