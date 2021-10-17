import { environment } from 'src/environments/environment';
import { CONSTANTS } from '../core/utils/constants';

export class AppConfig {
    public static I18N_DEFAULT = 'es';
    public static URL_HOST = environment.URL_HOST;
    public static URL_API = `${environment.URL_HOST}${environment.URL_PATH_API}`;
    public static URL_API_AUTH = `${environment.URL_HOST}/auth`;

    // Application routes
    static APP_ROUTE_BASE = '';
    static APP_ROUTE_LOGIN = 'login';
    static APP_ROUTE_REGISTER = 'register';
    static APP_ROUTE_HOME = 'home';
    static APP_ROUTE_NOT_FOUND = 'not-found';
    static APP_ROUTE_HERITAGE = 'heritage';
    static APP_ROUTE_ANALYTICS = 'analytics';
    static APP_ROUTE_REPORTS = 'reports';
    static APP_ROUTE_PROPOSAL = 'proposal';

    // ROLES
    static ROLE_APP_HOME = [
        CONSTANTS.ROLE_ADMIN,
        CONSTANTS.ROLE_HOME_CREATE,
        CONSTANTS.ROLE_HOME_READ,
        CONSTANTS.ROLE_HOME_UPDATE,
        CONSTANTS.ROLE_HOME_DELETE,
    ];
    static ROLE_APP_HERITAGE = [
        CONSTANTS.ROLE_ADMIN,
        CONSTANTS.ROLE_HERITAGE_CREATE,
        CONSTANTS.ROLE_HERITAGE_READ,
        CONSTANTS.ROLE_HERITAGE_UPDATE,
        CONSTANTS.ROLE_HERITAGE_DELETE,
    ];
    static ROLE_APP_ANALYTICS = [
        CONSTANTS.ROLE_ADMIN,
        CONSTANTS.ROLE_ANALYTICS_CREATE,
        CONSTANTS.ROLE_ANALYTICS_READ,
        CONSTANTS.ROLE_ANALYTICS_UPDATE,
        CONSTANTS.ROLE_ANALYTICS_DELETE,
    ];
    static ROLE_APP_REPORTS = [];
    static ROLE_APP_PROPOSAL = [
        CONSTANTS.ROLE_ADMIN,
        CONSTANTS.ROLE_PROPOSAL_CREATE,
        CONSTANTS.ROLE_PROPOSAL_UPDATE,
        CONSTANTS.ROLE_PROPOSAL_READ,
        CONSTANTS.ROLE_PROPOSAL_DELETE,
    ];

    // API paths
    static API_PATH_ACCESS_TOKEN = 'login';
    static API_PATH_CURRENT_TOKEN = 'token';

    // API routes
    static get PATH_ACCESS_TOKEN_GET() {
        return `${AppConfig.URL_API_AUTH}/${this.API_PATH_ACCESS_TOKEN}`;
    }
    static get PATH_CURRENT_TOKEN_GET() {
        return `${AppConfig.URL_API_AUTH}/${this.API_PATH_CURRENT_TOKEN}`;
    }

    // NGRX
    static STORE_STATE_INIT = 'Init';
    static STORE_STATE_ADD = 'Add';
    static STORE_STATE_ADDED = 'added';
    static STORE_STATE_LOAD = 'Load';
    static STORE_STATE_POST = 'Post';
    static STORE_STATE_LOADED = 'Loaded';
    static STORE_STATE_SET = 'Set';
    static STORE_STATE_UPDATE = 'Update';
    static STORE_STATE_UPDATED = 'Updated';
    static STORE_STATE_DELETE = 'Delete';
    static STORE_STATE_DELETED = 'Deleted';
    static STORE_STATE_SUCCESS = 'Success';
    static STORE_STATE_RESPONSE = 'Response';
    static STORE_STATE_ERROR = 'Error';
    static STORE_STATE_RESET = 'Reset';
    static STORE_STATE_GET = 'Get';
    static STORE_STATE_LAUNCH = 'Launch';
    static STORE_STATE_TRUE = 'True';
    static STORE_STATE_FALSE = 'False';
    static STORE_STATE_OK = 'OK';
    static STORE_STATE_KO = 'K.O';
}
