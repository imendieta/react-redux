import React from 'react';
export interface IStateProps {}
export interface IDispatchProps {}
export interface IProps extends IStateProps, IDispatchProps {}

export const ButtonView:React.StatelessComponent<IProps> = (props) => (
    <button
        className="waves-effect waves-light btn"
        onClick={() => null}
    >
        Click
    </button>
);