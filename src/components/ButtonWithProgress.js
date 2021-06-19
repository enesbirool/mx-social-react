import React from 'react';

const ButtonWithProgress = (props) => {

    const{onClick,pendingApiCall,disabled,text} =props;

    return (
        <button
            className="btn btn-primary"
            onClick={onClick}
            disabled={disabled}
            style={{padding:"8px",boxShadow:"5px 5px 5px #ppp"}}
        >{pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}{text}
        </button>
    );
};

export default ButtonWithProgress;