import request from '../../services/Request';
import NewsModel from '../../models/NewsModel';
import CommentModel from '../../models/CommentModel';
import TeamModel from '../../models/TeamModel';
import PlayerModel from '../../models/PlayerModel';
import SourceModel from '../../models/SourceModel';

export interface GetNewsParams {
    team_id?: number;
    player_id?: number;
    time: string;
    query?: string;
    sources?: number[];
}

interface GetNewsResponse {
    data: {
        success: boolean;
        allNews: {
            current_page: number;
            data: NewsModel[];
            first_page_url: string;
            from: number;
            last_page: number;
            last_page_url: string;
            next_page_url: string | null;
            path: string;
            per_page: number;
            prev_page_url: string | null;
            to: number;
            total: number;
        }
    };
}

interface GetTeamsResponse {
    data: {
        current_page: number;
        data: TeamModel[];
        first_page_url: string;
        from: number;
        last_page: number;
        last_page_url: string;
        next_page_url: string | null;
        path: string;
        per_page: number;
        prev_page_url: string | null;
        to: number;
        total: number;
    };
}

interface GetPlayersResponse {
    data: {
        current_page: number;
        data: PlayerModel[];
        first_page_url: string;
        from: number;
        last_page: number;
        last_page_url: string;
        next_page_url: string | null;
        path: string;
        per_page: number;
        prev_page_url: string | null;
        to: number;
        total: number;
    };
}

interface GetSourcesResponse {
    data: {
        current_page: number;
        data: SourceModel[];
        first_page_url: string;
        from: number;
        last_page: number;
        last_page_url: string;
        next_page_url: string | null;
        path: string;
        per_page: number;
        prev_page_url: string | null;
        to: number;
        total: number;
    };
}

interface LikeNewsResponse {
    data: {
        favorited: boolean;
        news: NewsModel;
        success: boolean;
    };
}

interface CommentNewsResponse {
    data: {
        success: true;
        news: NewsModel;
    };
}

interface RemoveNewsResponse {
    data: {
        success: true;
    };
}

interface EditNewsResponse {
    data: {
        comment: CommentModel;
        success: true;
    };
}

export const SAVE_NEWS = '[News] Save received news';
export const saveNews = (news: NewsModel[]) => ({
    type: SAVE_NEWS,
    payload: {
        news
    }
});

export const SAVE_TEAMS = '[Teams] Save received teams';
export const saveTeams = (teams: TeamModel[]) => ({
    type: SAVE_TEAMS,
    payload: {
        teams
    }
});
export const SAVE_PLAYERS = '[Players] Save received players';
export const savePlayers = (players: PlayerModel[]) => ({
    type: SAVE_PLAYERS,
    payload: {
        players
    }
});
export const SAVE_SOURCES = '[Sources] Save received sources';
export const saveSources = (sources: SourceModel[]) => ({
    type: SAVE_SOURCES,
    payload: {
        sources
    }
});

export const LIKE_NEWS = '[News] Like news';
export const likeNewsUpdate = (news: NewsModel) => ({
    type: LIKE_NEWS,
    payload: {
        news
    }
});

export const COMMENT_NEWS = '[News] Comment news';
export const commentNewsUpdate = (news: NewsModel) => ({
    type: COMMENT_NEWS,
    payload: {
        news
    }
});

export const SET_ACTIVE_NEWS = '[News] Set active news';
export const setActiveNews = (news: NewsModel) => ({
    type: SET_ACTIVE_NEWS,
    payload: {
        news
    }
});

export const REMOVE_ACTIVE_NEWS = '[News] Remove active news';
export const removeActiveNews = () => ({
    type: REMOVE_ACTIVE_NEWS,
});

export const REMOVE_COMMENT_NEWS = '[News] Remove comment news';
export const removeCommentUpdate = (newsId: number, commentId: number) => ({
    type: REMOVE_COMMENT_NEWS,
    payload: {
        newsId,
        commentId
    }
});

export const UPDATE_COMMENT_NEWS = '[News] Update comment news';
export const updateCommentNews = (newsId: number, commentId: number, comment: CommentModel) => ({
    type: UPDATE_COMMENT_NEWS,
    payload: {
        newsId,
        commentId,
        comment
    }
});

export const ADD_SETTING = '[Setting] Add setting';
export const addSetting = (setting: any) => ({
    type: ADD_SETTING,
    payload: {
        setting
    }
});

export const REMOVE_SETTING = '[Setting] Remove setting';
export const removeSetting = (setting: any) => ({
    type: REMOVE_SETTING,
    payload: {
        setting
    }
});

export const CLEAR_SETTING = '[Setting] Clear settings';
export const clearSettings = () => ({
    type: CLEAR_SETTING
});

export const getNews = (params: GetNewsParams) => {
    return (dispatch: Function) => {
        request.send('get', 'api/news', null, {
            params
        }).then((res: GetNewsResponse) => {
            dispatch(saveNews(res.data.allNews.data));
        });
    };
};

export const getTeams = () => {
    return (dispatch: Function) => {
        request.send('get', 'api/teams')
        .then((res: GetTeamsResponse) => {
            dispatch(saveTeams(res.data.data));
        });
    };
};

export const getPlayers = () => {
    return (dispatch: Function) => {
        request.send('get', 'api/players')
        .then((res: GetPlayersResponse) => {
            dispatch(savePlayers(res.data.data));
        });
    };
};

export const getSources = () => {
    return (dispatch: Function) => {
        request.send('get', 'api/sources')
        .then((res: GetSourcesResponse) => {
            dispatch(saveSources(res.data.data));
        });
    };
};

export const likeNews = (id: number) => {
    return (dispatch: Function) => {
        request.send('post', `api/news/${id}/toggle_favorite`)
            .then((res: LikeNewsResponse) => {
                dispatch(likeNewsUpdate(res.data.news));
            });
    };
};

export const addComment = (id: number, comment: string) => {
    return (dispatch: Function) => {
        request.send('post', `api/news/${id}/comments`, {
            comment
        }).then((res: CommentNewsResponse) => {
            dispatch(commentNewsUpdate(res.data.news));
        });
    };
};

export const removeComment = (newsId: number, commentId: number) => {
    return (dispatch: Function) => {
        request.send('delete', `api/comments/${commentId}`)
            .then((res: RemoveNewsResponse) => {
                dispatch(removeCommentUpdate(newsId, commentId));
            });
    };
};

export const editComment = (newsId: number, commentId: number, comment: string) => {
    return (dispatch: Function) => {
        request.send('put', `api/comments/${commentId}`, {
            comment
        }).then((res: EditNewsResponse) => {
            dispatch(updateCommentNews(newsId, commentId, res.data.comment));
        });
    };
};

export const saveSourcesRequest = (sources: number[]) => {
    return (dispatch: Function) => {
        request.send('post', 'api/user/sources', {
            sources
        }).then((res: any) => {
            console.log(res);
        });
    };
};