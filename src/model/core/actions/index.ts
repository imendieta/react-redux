import { IFluxPayloadAction, IFluxAction } from "../../common/IFluxActions";
import { IAppState } from "../../../state";


export enum CoreAction {
    InitApp = 'core/INITAPP',
    FecthTheGuardian = 'core/FETCH_THE_GUARDIAN',
    FecthTheGuardianSuccess = 'core/FETCH_THE_GUARDIAN_SUCCESS'
};

export type ActionTypes = 
    | IFluxPayloadAction<CoreAction.InitApp, IAppState>
    | IFluxAction<CoreAction.FecthTheGuardian>;


export const initApp = (payload:IAppState):ActionTypes => ({
    type: CoreAction.InitApp,
    payload
});

export const fetchTheGuardian = ():ActionTypes => ({
    type: CoreAction.FecthTheGuardian
});
