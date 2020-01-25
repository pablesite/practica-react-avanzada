export function checkUserExist(user) {
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




