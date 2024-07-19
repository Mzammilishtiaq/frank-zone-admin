import { ReactNode } from 'react';

declare type IRoute = {
    path?: string;
    component?: ReactNode;
    children?: IRoute[];
    // protectedPath?: boolean;
};