import React, { useCallback, useMemo } from 'react'
import {useRouter} from 'next/router';
import {useLoginModel} from '../../hooks/useLoginModel';
import useCurrentUser from '../../hooks/useCurrentUser';
import {  formatDistanceToNowStrict } from 'date-fns';
import Avatar from '../Avatar';
import { AiOutlineHeart, AiOutlineMessage, AiFillHeart,  } from 'react-icons/ai';
import useLike from '../../hooks/useLike';


