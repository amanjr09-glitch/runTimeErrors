import react from 'react'
// import HistoryCard from './HistoryCard1'
import HistoryCard2 from './HistoryCard2'

function History(){
    return(
        <div className='p-4 bg-slate-100 backdrop-blur-lg'>
            <div className=' p-5 text-3xl font-semibold px-10 uppercase'>History</div>
            <hr/>
            <div className='overflow-y-auto max-h-screen mb-2'>
                <HistoryCard2/>
                <HistoryCard2/>
                <HistoryCard2/>
                <HistoryCard2/>
                <HistoryCard2/>
                {/* <HistoryCard2/> */}
            </div>
        </div>
    )
}

export default History
