import react from 'react'
// import HistoryCard from './HistoryCard1'
import HistoryCard2 from './HistoryCard2'

function History(){
    return(
        <div className='p-20 bg-slate-100 backdrop-blur-lg'>
            <div className=' p-5 text-3xl font-semibold px-10'>History</div>
            <div>
                <HistoryCard2/>
                <HistoryCard2/>
                <HistoryCard2/>
                {/* <HistoryCard2/> */}
            </div>
        </div>
    )
}

export default History
