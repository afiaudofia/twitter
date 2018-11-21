import React from 'react';

export default ({ settings, updateSettings, changeFormValue, changeToEditMode, editMode }) => {

    return (
        <div className="seetings">
            <div className="p-5 m-5">
                Edit Layout<button type="button" onClick={() => changeToEditMode()} className="btn btn-xs btn-default pull-right">Edit Mode</button>
            </div>
            <div className="panel-body" style={{display: !editMode ? 'none' : ' ', opacity: !editMode ? 0 : 1, backgroundColor: '#ffffff', marginTop: '17px', border: '1px solid #cccccc'}}>
                <div className="form-group">
                    <label htmlFor="tweetCount">Tweet Count</label>
                    <input type="number" id="tweetCount" className="form-control input-sm" disabled={!editMode} placeholder="Tweet count" onChange={(e) => changeFormValue('tweetCount', e.target.value)} value={settings.tweetCount} required />
                </div>
                <div className="form-group">
                    <label htmlFor="pallete">Pallete</label>
                    <input type="color" id="pallete" className="form-control input-sm" disabled={!editMode} placeholder="Pallete" onChange={(e) => changeFormValue('pallete', e.target.value)} value={settings.pallete} required />
                </div>
                <div className="form-group">
                    <label htmlFor="timeRange">Tweet Range</label>
                    <input type="date" id="timeRange" className="form-control input-sm" disabled={!editMode} placeholder="Time Range" onChange={(e) => changeFormValue('timeRange', e.target.value)} value={settings.timeRange} required />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-sm btn-primary" disabled={!editMode} onClick={() => updateSettings()}>Update and Close</button>
                </div>
            </div>
        </div>
    );
};

