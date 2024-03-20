import Home from '~/pages/Home';
import ListMovie from '~/pages/ListMovie';
import WatchMovie from '~/pages/watchMovie';

// import { OnlyHeader } from '~/layout';

const PublicRoutes = [
    { path: '/', component: Home },
    { path: '/danh-sach/:listName', component: ListMovie },
    { path: '/the-loai/:listName', component: ListMovie },
    { path: '/quoc-gia/:listName', component: ListMovie },
    { path: '/phim/:movieName', component: WatchMovie },
];

const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };