export function checkUserExist(user) {
    //if (user !== undefined && user !== null) {
    //if (user.name === '' || user.surname == '' || user.email == '' || user.tag == '' ) {
    if ((user !== undefined && user !== null )  && 
        (user.name !== '' && user.surname !== '' && user.email !== '' && user.tag !== '')
        ) {
        return {
            exist: true,
            user: user
        }
    }
    else {
            return {
                exist: false,
                user: {}
            }
        }
    }

    // export const getUser = state => state.user;



