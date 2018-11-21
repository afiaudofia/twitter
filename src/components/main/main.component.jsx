import React, { Component } from 'react';
import { getTweets, reorderTweetPanels, setEmptyTweets } from "../../actions/tweets.actions.js";
import { updateSettings, changeToEditMode } from "../../actions/settings.actions.js";
import Settings from '../settings/settings';
import TweetPanel from '../tweetpanel/tweetpanel';
import { connect } from "react-redux";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';



const getListStyle = () => ({
    display: 'flex',
    alignItems: 'stretch',
    overflow: 'auto',
});

export class Main extends Component {

    constructor(props) {
        super(props);
        this.updateSettings = this.updateSettings.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.changeFormValue = this.changeFormValue.bind(this);
        this.changeToEditMode = this.changeToEditMode.bind(this);
        this.state = {
            tweetsContainerWidth: 0,
            settingsForm: {
                tweetCount: '',
                pallete: '',
                timeRange: '',
            }
        };
    }

    onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        this.props.reorderTweetPanels(result.source.index, result.destination.index);
    }

    componentDidMount() {
        const { tweetOrder, tweetCount, timeRange } = this.props.settings;
        this.props.setEmptyTweets(tweetOrder);
        tweetOrder.forEach(tweetHandle => {
            this.props.getTweets(tweetHandle, tweetCount, timeRange);
        });
        this.setState({
            ...this.state,
            settingsForm: this.props.settings
        });
        this.getTweetContainersWidth();
        window.addEventListener('resize', () => { this.getTweetContainersWidth() });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => { this.getTweetContainersWidth() });
    }

    getTweetContainersWidth() {
        this.setState({
            tweetsContainerWidth: this.refs.tweetsContainer.clientWidth,
        });
    }

    changeFormValue(field, value) {
        this.setState({
            ...this.state,
            settingsForm: {
                ...this.state.settingsForm,
                [field]: value
            }
        });
    }

    changeToEditMode() {
        this.props.changeToEditMode();
    }

    updateSettings() {
        const { settings } = this.props;
        const { tweetCount, timeRange } = this.state.settingsForm;
        if (tweetCount !== settings.tweetCount && timeRange === settings.timeRange) {
            this.props.setEmptyTweets(settings.tweetOrder);
            settings.tweetOrder.forEach(tweetHandle => {
                this.props.getTweets(tweetHandle, tweetCount, timeRange);
            });
        }
        this.props.updateSettings({ ...this.state.settingsForm, tweetOrder: settings.tweetOrder });
    }

    render() {
        const { tweets } = this.props.tweets;
        const { pallete, editMode } = this.props.settings;

        const { settingsForm } = this.state;

        return (
            <div className="row">
                <div className="col-12" ref="tweetsContainer" id="tweetsContainer">
                    <h1 className="lead text-center">
                        Using Twitter Api to fetch and display recent tweets from
                        @makeschool, @newsycombinator and @ycombinator.
                    </h1>
                    {(editMode) && (
                        <div className="col-12 text-center">
                            <div className="alert alert-info">
                                <p>You can click and drag the tweet panels to re-order the tweet columns</p>
                            </div>
                        </div>
                    )}
                
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Droppable
                            droppableId="droppable"
                            direction="horizontal">
                            {(provided, snapshot) => (
                                <div
                                    className="row"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    style={getListStyle(snapshot.isDraggingOver)}
                                >
                                    {tweets.map((tweet, index) =>
                                        <TweetPanel key={index} tweet={tweet} pallete={pallete} index={index} editMode={editMode} />
                                    )}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
                <div className="settingbox">
                    <Settings settings={settingsForm} editMode={editMode} updateSettings={this.updateSettings} changeToEditMode={this.changeToEditMode} changeFormValue={this.changeFormValue} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tweets: state.tweets,
        settings: state.settings,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTweets: (screenName, tweetCount, timeRange) => {
            dispatch(getTweets(screenName, tweetCount, timeRange));
        },
        updateSettings: (settings) => {
            dispatch(updateSettings(settings));
        },
        reorderTweetPanels: (source, destination) => {
            dispatch(reorderTweetPanels(source, destination));
        },
        changeToEditMode: () => {
            dispatch(changeToEditMode());
        },
        setEmptyTweets: (tweets) => {
            dispatch(setEmptyTweets(tweets));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);