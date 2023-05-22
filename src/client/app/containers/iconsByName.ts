import alert from '../../../../assets/alert.png';
import ball from '../../../../assets/ball.png';
import bug from '../../../../assets/bug.png';
import cart from '../../../../assets/cart.png';
import favorite from '../../../../assets/favorite.png';
import home from '../../../../assets/home.png';
import inbox from '../../../../assets/inbox.png';
import life from '../../../../assets/life.png';
import mail from '../../../../assets/mail.png';
import other from '../../../../assets/other.png';
import page from '../../../../assets/page.png';
import today from '../../../../assets/today.png';
import twitter from '../../../../assets/twitter.png';
import warning from '../../../../assets/warning.png';
import folder_red from '../../../../assets/folder_red.png';
import next from '../../../../assets/next.png';
import note from '../../../../assets/note.png';
import refresh from '../../../../assets/refresh.png';
import trash from '../../../../assets/trash.gif';
import overdue from '../../../../assets/overdue.svg';

export const iconsByName = {
    'alert.png': alert as string,
    'ball.png': ball as string,
    'bug.png': bug as string,
    'cart.png': cart as string,
    'favorite.png': favorite as string,
    'home.png': home as string,
    'inbox.png': inbox as string,
    'life.png': life as string,
    'mail.png': mail as string,
    'other.png': other as string,
    'page.png': page as string,
    'today.png': today as string,
    'twitter.png': twitter as string,
    'warning.png': warning as string,
    'folder_red.png': folder_red as string,
    'next.png': next as string,
    'note.png': note as string,
    'refresh.png': refresh as string,
    'trash.gif': trash as string,
    'overdue.svg': overdue as string,
};

export type IconsByNameKey = keyof typeof iconsByName;
