import React, {useCallback, useState} from 'react'
import { useLoginModel } from '../hooks/useLoginModel';
import { useRegisterModel } from '../hooks/useRegisterModel';
import  useCurrentUser  from '../hooks/useCurrentUser';
import usePost  from '../hooks/usePosts';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import {Button} from './Button';
import Avatar from './Avatar';


interface FormProps {
    placeholder: string;
    isComment?: boolean;
    postId?: string;
}

 
