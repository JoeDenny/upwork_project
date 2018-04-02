import * as React from 'react';
import './EditComment.css';
import UserPhoto from '../../../../../../components/UserPhoto';
import UserModel from '../../../../../../models/UserModel';

interface Props {
    user?: UserModel;
    onSubmit: Function;
    onClose: Function;
    comment?: string;
}

interface State {
    comment?: string;
    commentLength: number;
    textareaHeight: number;
}
class EditComment extends React.Component<Props, State> {
    state = {
        comment: undefined,
        commentLength: 0,
        textareaHeight: 27
    };

    componentWillMount() {
        const { comment } = this.props;
        if (comment) {
            const commentLength = comment.length;
            this.setState({
                comment: comment,
                commentLength: commentLength,
                textareaHeight: commentLength >= 40 ? 95 : 27
            });
        }
    }

    onClose = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();

        this.props.onClose();
    }
    
    onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        this.props.onSubmit(this.state.comment);

        this.setState({
            comment: '',
            commentLength: 0,
            textareaHeight: 27
        });
    }

    onCommentChange = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
        const commentLength = e.currentTarget.value.length;

        this.setState({
            comment: e.currentTarget.value,
            commentLength: commentLength,
            textareaHeight: commentLength >= 40 ? 95 : 27
        });
    }

    render() {
        const { avatar_path } = this.props.user || {
            avatar_path: undefined
        };
        const placeholder = 'Reply...';
        const textareaStyles = {
            height: this.state.textareaHeight
        };
        return (
            <form className="add-comment" onSubmit={this.onSubmit}>
                <div className="add-comment__photo">
                    <UserPhoto
                        link={avatar_path}
                    />
                </div>
                <div className="add-comment__input">
                    <textarea
                        value={this.state.comment}
                        placeholder={placeholder}
                        style={textareaStyles}
                        onChange={this.onCommentChange}
                    />
                    <button 
                        type="submit" 
                        className="add-comment__button _grey"
                    >
                        Exit
                    </button>
                    <button 
                        type="submit" 
                        className="add-comment__button"
                    >
                        Save
                    </button>
                </div>
            </form>
        );
    }
}

export default EditComment;