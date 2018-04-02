import DashboardStateModel from './DashboardStateModel';
import { SAVE_NEWS, LIKE_NEWS, SET_ACTIVE_NEWS, REMOVE_ACTIVE_NEWS, COMMENT_NEWS, REMOVE_COMMENT_NEWS, UPDATE_COMMENT_NEWS, SAVE_TEAMS, SAVE_PLAYERS, SAVE_SOURCES, ADD_SETTING, REMOVE_SETTING, CLEAR_SETTING } from './actions';
import NewsModel from '../../models/NewsModel';
import CommentModel from '../../models/CommentModel';

const initState = {
    activeNews: undefined,
    news: undefined,
    teams: undefined,
    players: undefined,
    sources: undefined,
    settings: undefined
};

const dashboard = (state: DashboardStateModel = initState, action: any) => {
    switch (action.type) {
        case SAVE_NEWS:
            return {
                ...state,
                news: action.payload.news
            };
        case SAVE_TEAMS:
            return {
                ...state,
                teams: action.payload.teams
            };
        case SAVE_PLAYERS:
            return {
                ...state,
                players: action.payload.players
            };
        case SAVE_SOURCES:
            return {
                ...state,
                sources: action.payload.sources
            };
        case ADD_SETTING:
            const ids = (state.settings || []).map((setting) => {
                return setting.id;
            });

            if (ids.indexOf(action.payload.setting.id) >= 0) {
                return {
                    ...state
                };
            }
            return {
                ...state,
                settings: [
                    ...state.settings || [],
                    action.payload.setting
                ]
            };
        case REMOVE_SETTING:
            return {
                ...state,
                settings: (state.settings || []).filter((setting) => {
                    return setting.id !== action.payload.setting.id;
                })
            };
        case CLEAR_SETTING:
            return {
                ...state,
                settings: undefined
            };
        case LIKE_NEWS:
            const { favorites_count, is_favorited } = action.payload.news;
            return {
                ...state,
                news: state.news && state.news.map((news: NewsModel) => {
                    if (news.id === action.payload.news.id) {
                        return {
                            ...news,
                            favorites_count,
                            is_favorited
                        };
                    }

                    return news;
                })
            };
        case COMMENT_NEWS: 
            const { comments, comments_count } = action.payload.news;
            return {
                ...state,
                activeNews: action.payload.news,
                news: state.news && state.news.map((news: NewsModel) => {
                    if (news.id === action.payload.news.id) {
                        return {
                            ...news,
                            comments,
                            comments_count
                        };
                    }
                    
                    return news;
                })
            };
        case REMOVE_COMMENT_NEWS:
            return {
                ...state,
                activeNews: {
                    ...state.activeNews,
                    comments_count: state.activeNews && state.activeNews.comments_count - 1,
                    comments: state.activeNews && state.activeNews.comments.filter((c: CommentModel) => {
                        return c.id !== action.payload.commentId;
                    })
                },
                news: state.news && state.news.map((news: NewsModel) => {
                    if (news.id === action.payload.newsId) {
                        return {
                            ...news,
                            comments_count: news.comments_count - 1,
                            comments: news.comments.filter((c: CommentModel) => {
                                return c.id !== action.payload.commentId;
                            })
                        };
                    }

                    return news;
                })
            };
        case UPDATE_COMMENT_NEWS:
            const { comment } = action.payload;
            return {
                ...state, 
                activeNews: {
                    ...state.activeNews,
                    comments: state.activeNews && state.activeNews.comments.map((c: CommentModel) => {
                        if (c.id === action.payload.commentId) {
                            return comment;
                        }

                        return c;
                    })
                },
                news: state.news && state.news.map((news: NewsModel) => {
                    if (news.id === action.payload.newsId) {
                        news.comments = news.comments.map((c: CommentModel) => {
                            if (c.id === comment.id) {
                                return comment;
                            }

                            return c;
                        });

                        return news;
                    }

                    return news;
                })
            };
        case SET_ACTIVE_NEWS:
            return {
                ...state,
                activeNews: action.payload.news
            };
        case REMOVE_ACTIVE_NEWS:
            return {
                ...state,
                activeNews: undefined
            };
        default:
            return state;
    }
};

export default dashboard;