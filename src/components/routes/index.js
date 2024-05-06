import AdminLayout from '~/layout/admin-layout';
import Home from '~/pages/home';
import SeriesMovie from '~/pages/list-movie';
import SeriesMovieNation from '~/pages/list-movie-nation';
import SeriesMovieCategory from '~/pages/list-movie-category';
import WatchMovie from '~/pages/watch-movie';
import SeachMovie from '~/pages/search-movie';
import Admin from '~/pages/admin';
import CategoryAdmin from '~/pages/category-admin';
import NationAdmin from '~/pages/nation-admin';
import MovieAdmin from '~/pages/movie-admin';
import ChaptersAdmin from '~/pages/chapters-admin';

// import { OnlyHeader } from '~/layout';

const PublicRoutes = [
    { path: '/', component: Home },
    { path: '/danh-sach/:listName', component: SeriesMovie },
    { path: '/the-loai/:catecoryName', component: SeriesMovieCategory },
    { path: '/quoc-gia/:nationName', component: SeriesMovieNation },
    { path: '/phim/:movieName', component: WatchMovie },
    { path: '/tim-kiem/:search', component: SeachMovie },
    { path: '/admin', component: Admin, layout: AdminLayout },
    { path: '/categoryAdmin', component: CategoryAdmin, layout: AdminLayout },
    { path: '/nationAdmin', component: NationAdmin, layout: AdminLayout },
    { path: '/movieAdmin', component: MovieAdmin, layout: AdminLayout },
    { path: '/chaptersAdmin', component: ChaptersAdmin, layout: AdminLayout },
];

export { PublicRoutes };
