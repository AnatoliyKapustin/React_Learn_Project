export const Menu = {
    LIST: "LIST",
    TABLE: "TABLE",
    TIMELINE: "TIMELINE",
};

export const issueStatuses = {
    ACTIVE: {
        key: "ACTIVE",
        text: "Активна",
    },
    DONE: {
        key: "DONE",
        text: "Выполнена",
    },
    POSTPONED: {
        key: "POSTPONED",
        text: "Отложена",
    },
    CANCELED: {
        key: "CANCELED",
        text: "Отменена",
    },
};

export const projectStatuses = [
    {
        key: "GREEN",
        text: "Зеленый",
        // headerStyle: styles.HeaderWithGreenStatus,
    },
    {
        key: "RED",
        text: "Красный",
        // headerStyle: styles.HeaderWithRedStatus,
    },
    {
        key: "YELLOW",
        text: "Желтый",
        // headerStyle: styles.HeaderWithYellowStatus,
    },
    {
        key: "DONE",
        text: "Выполнено",
        // headerStyle: styles.HeaderWithDoneStatus,
    },
    {
        key: "SUSPENDED",
        text: "Приостановлено",
        // headerStyle: styles.HeaderWithSuspendedStatus,
    },
    {
        key: "CANCELED",
        text: "Отменено",
        // headerStyle: styles.HeaderWithCanceledStatus,
    },
];