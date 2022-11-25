import { DemoUsers } from "../helpers/DemoUsers";

let searchedUser, cx;

function fetchUser(cx_t){
    searchedUser = DemoUsers[cx];
    cx = cx_t;
}

export {searchedUser, fetchUser, cx};