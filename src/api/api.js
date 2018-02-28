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
            id: 1,
            uuid: '845c5208-0da7-4b79-b466-c684d9a17d2d',
            name: 'Anatoliy',
            email: 'a.kapustin@infostroy.com.ua',
            avatar: "/static/img-avatar.png",
            login: 'MyLogin',
            password: '12345',
        },
        {
            id: 2,
            uuid: 'f1d31094-7f3d-4d3a-8fba-f4ce32226e83',
            name: 'John',
            email: 'john@infostroy.com.ua',
            avatar: "/static/img-avatar.png",
            login: 'John',
            password: '12345',
        },
        {
            id: 3,
            uuid: '16c5651e-3b03-4ece-a9ef-94e22a3d6c1f',
            name: 'David',
            email: 'david@infostroy.com.ua',
            avatar: "/static/img-avatar.png",
            login: 'David',
            password: '12345',
        }
    ]
}

export function createIssue(name, author) {
    return {
        id: generator.next().value,
        name,
        creatingDate: moment(),
        author,
        executors: [],
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