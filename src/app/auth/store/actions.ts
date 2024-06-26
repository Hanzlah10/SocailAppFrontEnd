import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../types/RegisterRequest.interface";
import { currentUserInterface } from "../../shared/types/CurrentUser.interface";
import { LoginRequestInterface } from "../types/LoginRequest.interface";

export const authActions = createActionGroup({
    source: 'Auth',
    events: {
        Register: props<{ request: RegisterRequestInterface }>(),
        'Register Success': props<{ currentUser: currentUserInterface }>(),
        'Register Failure': emptyProps(),
        Login: props<{ request: LoginRequestInterface }>(),
        'Login Success': props<{ currentUser: currentUserInterface }>(),
        'Login Failure': emptyProps(),
    }
})