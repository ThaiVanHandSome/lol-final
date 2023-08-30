import routes from '~/configs/routes';

import Home from '~/pages/Home';
import Game from '~/pages/Game';
import Champion from '~/pages/Champion';
import UpdateDetail from '~/pages/UpdateDetail';
import Login from '~/pages/Login';

const publicRoutes = [
    {
        path: routes.home,
        comp: Home,
    },
    {
        path: routes.game,
        comp: Game,
    },
    {
        path: routes.champion,
        comp: Champion,
    },
    {
        path: routes.updateDetail,
        comp: UpdateDetail,
    },
    {
        path: routes.login,
        comp: Login,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
