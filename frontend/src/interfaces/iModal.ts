import {ReactNode} from 'react'
import { iUser } from './iUser';

export interface iModal { 
    titulo?: string;
    children?: ReactNode;
    isOp?: any
    onClose?: any;
    nomeCompleto?: string
    user?: iUser
}