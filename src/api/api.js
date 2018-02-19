import {idGenerator} from "../generators/idGenerator";
import {getUserByToken} from "../actions/user";
import {issueStatuses} from "../constants/Constants";
import moment from "moment";

let generator = idGenerator();

export function apiLogin(login, password) {
    let user = getUsers().filter(user => (user.email === login || user.login === login) && user.password === password)[0];
    console.log("login uuid " + user.uuid);
    return user.uuid;
}

export function getUsers() {
    return [
        {
            uuid: '845c5208-0da7-4b79-b466-c684d9a17d2d',
            name: 'Anatoliy',
            email: 'a.kapustin@infostroy.com.ua',
            avatar: "/static/img-avatar.png",
            login: 'MyLogin',
            password: '12345',
        }
    ]
}

export function createIssue(name, author) {
    return {
        id: generator.next().value,
        creatingDate: moment(),
        author,
        participants: [],
        subtasks: [],
        status: issueStatuses.ACTIVE.key,
    };
}

export function createProjectApi(name, token) {
    return {
        id: generator.next().value,
        name,
        status: "YELLOW",
        participants: [getUserByToken(token).uuid],
    }
}

function generateSessionToken() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}