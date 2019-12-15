import { getUser } from '../services/Storage';

export function checkUserExist() {
    const user = getUser();
    if (user !== undefined && user !== null) {
        return {
            exist: true,
            user: user
        }
    }
    else {
            return {
                exist: false,
                user: user
            }
        }
    }



