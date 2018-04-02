import * as React from 'react';
import './DashboardHeaderFilter.css';
import DashboardFilterInfo from './components/DashboardFilterInfo';
import DashboardFilterButtons from './components/DashboardFilterButtons';
import StoreModel from '../../../../store/StoreModel';
import { saveSourcesRequest, clearSettings } from '../../actions';
import { connect } from 'react-redux';

interface Props {
    onClick: Function;
    onOpenFilterOverlay: Function;
    onToggleListMode: Function;
    recentlyButtonActive: boolean;
    bookmarkButtonActive: boolean;
    filterButtonActive: boolean;
    commentsButtonActive: boolean;
}

interface StateProps {
    settings?: any[];
}

interface ActionProps {
    saveSourcesRequest: Function;
}

class DashboardHeaderFilter extends React.Component<Props & StateProps & ActionProps> {
    onClick = (title: string) => {
        this.props.onClick(title);
    }
    onToggleListMode = (listMode: number) => {
        this.props.onToggleListMode(listMode);
    }
    onOpenFilterOverlay = () => {
        this.props.onOpenFilterOverlay();
    }
    onSaveSources = () => {
        if (this.props.settings) {
            const ids = this.props.settings.map((setting: any) => setting.id);

            this.props.saveSourcesRequest(ids);
        }
    }
    render() {
        const { settings } = this.props;
        return (
            <div className="dashboard-header-filter">
                <div className="dashboard-header-filter__content">
                    <DashboardFilterInfo
                        settings={settings}
                        onOpenFilterOverlay={this.onOpenFilterOverlay}
                        onSaveSources={this.onSaveSources}
                    />
                </div>
                <div className="dashboard-header-filter__buttons">
                    <DashboardFilterButtons
                        onClick={this.onClick}
                        recentlyButtonActive={this.props.recentlyButtonActive}
                        bookmarkButtonActive={this.props.bookmarkButtonActive}
                        filterButtonActive={this.props.filterButtonActive}
                        commentsButtonActive={this.props.commentsButtonActive}
                        onToggleListMode={this.onToggleListMode}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreModel) => ({
    settings: state.dashboard.settings
});

const mapDispatchToProps = (dispatch: Function) => ({
    saveSourcesRequest: (sources: number[]) => dispatch(saveSourcesRequest(sources)),
    clearSettings: () => dispatch(clearSettings())
});

export default connect<StateProps, ActionProps>(mapStateToProps, mapDispatchToProps)(DashboardHeaderFilter);