import * as React from 'react';
import { Button, Dialog, DialogActions, Slide } from '@mui/material';
import moment from 'moment';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ErrorModal = ({ open, handleClose, errObjArr }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            className='rounded-0 font-bold'
        >
            <div
                className='bg-gray-200 p-4'
                align="center"
            >
                <div className="flex justify-between m-2">
                    <span className='inline-block'>{errObjArr[errObjArr.length - 1].err.message}</span>
                    <span className='inline-block'>{moment(errObjArr[errObjArr.length - 1].createdAt).fromNow()}</span>
                </div>
                <hr className='w-[96%] m-0' />
                <div className='text-left m-3'>
                    <p>Error id : {errObjArr[errObjArr.length - 1].id}</p>
                    <p>Date : {new Date(errObjArr[errObjArr.length - 1].createdAt).toLocaleDateString()}</p>
                </div>
                <DialogActions>
                    <Button className='text-emerald-500' onClick={handleClose}>Report</Button>
                </DialogActions>
            </div>
        </Dialog>
    );
};

export default ErrorModal;
