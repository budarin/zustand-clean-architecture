import * as Notification from '../contracts/Notification/index.ts';

interface Notification {
    notifyInfo: Notification.NotificationMethod;
    notifyError: Notification.NotificationMethod;
    notifyWarning: Notification.NotificationMethod;
    joyfullyGilling: Notification.NotificationMethod;
}

export function getNotification(): Notification {
    return Notification;
}
