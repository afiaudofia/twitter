import React from 'react';
import { dateFormat } from '../../filters';
import { Draggable } from 'react-beautiful-dnd';

const grid = 5;

const getItemStyle = (isDragging, draggableStyle) => ({
    
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 ${grid}px 0 0`,
    flex: 1,

    // styles we need to apply on draggables
    ...draggableStyle
});

const TweetPanel = ({ tweet, pallete, index, editMode }) => {
    const { tweets, screenName } = tweet;
    return (
        <Draggable
            key={index}
            draggableId={tweet.screenName}
            index={index}
            isDragDisabled={!editMode}
        >
            {(provided, snapshot) => (
                <div
                    className="row"
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                    )}
                >
                    <div>
                        <h2 className="lead">
                            {screenName}
                        </h2>
                        <div className="">
                            {tweets.map(thisTweet => {
                                return (
                                    <div key={thisTweet.id} className="tweetbox" style={{pallete}}>
                                        <div className="tweet_text"> {thisTweet.text} </div>
                                        <div className="user_mentions">
                                            {(thisTweet.entities.user_mentions.length !== 0) && <h2 className="small">User Mentions </h2>}
                                            {thisTweet.entities.user_mentions.map((retweet, index) => 
                                                <span className="badge badge-default" key={index}>@{ retweet.screen_name + ' ' }</span> 
                                            )}
                                        </div>
                                        <div className="tweet_date">
                                            {dateFormat(thisTweet.created_at)}
                                        </div>
                                    </div>
                                );
                            })}
                            {tweets.length === 0 && <div className="loader" />}
                        </div>
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Draggable>
    );
};

export default TweetPanel;
