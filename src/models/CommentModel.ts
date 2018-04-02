import UserModel from './UserModel';

export default interface CommentModel {
    id: number;
    comment: string;
    commentable_id: number;
    commentable_type: string;
    created_at: string;
    created_at_formated: string;
    parent_id: number | null;
    replies: CommentModel[];
    replies_count: number;
    updated_at: string;
    user: UserModel;
    user_id: number;
}