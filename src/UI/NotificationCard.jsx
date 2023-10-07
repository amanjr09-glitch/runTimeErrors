import moment from 'moment';
import React from 'react';
import { MdCancel } from 'react-icons/md';

const NotificationCard = ({ creatorName = "", created_at, title, body, onCancel = () => { } }) => {
    return (
        <div className='border-b border-t p-3'>
            <div className='italic font-medium text-gray-300 flex justify-between mb-2'>
                <span>{creatorName} • {moment(created_at).startOf('hour').fromNow()}</span>
                <MdCancel className='hover:cursor-pointer text-white' onClick={onCancel} />
            </div>
            <p className='text-lg font-semibold leading-3'>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default NotificationCard;
