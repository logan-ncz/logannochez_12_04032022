import AsideNav from '../components/AsideNav'
import InfoCard from '../components/InfoCard'
import Activity from '../components/Charts/Activity'
import AverageSessions from '../components/Charts/AverageSessions'
import Performance from '../components/Charts/Performance'
import Score from '../components/Charts/Score'
import { useParams } from 'react-router-dom'
import { UseSportSeeAPI } from '../utils/hooks/useSportSeeAPI'
import { MockedAPI } from '../utils/mock/mockedAPI'

/**
 * Component used to call the Fetch fonction to retrieves the data, then render the user's Dashboard with the differents charts.
 * 
 * @component
 * 
 * @returns {}
 */

function Dashboard() {
    const { id } = useParams()

    const idFinal = Number(id)

    //Switch on false for UseSportSeeAPI or true for MockedAPI
    const mockedData = true

    const { data, isLoading } = mockedData ? MockedAPI("data", idFinal) : UseSportSeeAPI("data", idFinal)

    const finalData = mockedData ? data[0] : data.data

    const activityData = mockedData ? MockedAPI("activity", idFinal) : UseSportSeeAPI("activity", idFinal)

    const averageSessionsData = mockedData ? MockedAPI("average-sessions", idFinal) : UseSportSeeAPI("average-sessions", idFinal)

    const performanceData = mockedData ? MockedAPI("performance", idFinal) : UseSportSeeAPI("performance", idFinal)

    

    if (!isLoading) {
        return (
            <div className="home">
                <AsideNav />
                <div className='dashboard'>
                    <div className="dashboard_header">
                        <p className='dashboard_hello'>Bonjour <b>{finalData.userInfos.firstName}</b></p>
                        <p className='dashboard_congratulations'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                    </div>
                    <div className="dashboard_main">
                        <div className='dashboard_charts'>
                            {mockedData ? <Activity data={activityData.data[0]} loading={activityData.isLoading} /> : <Activity data={activityData.data.data} loading={activityData.isLoading} />}
                            <div className='dashboard_charts_2_3_4'>
                                {mockedData ? <AverageSessions data={averageSessionsData.data[0]} loading={averageSessionsData.isLoading} /> : <AverageSessions data={averageSessionsData.data.data} loading={averageSessionsData.isLoading} />}
                                {mockedData ? <Performance data={performanceData.data[0]} loading={performanceData.isLoading} /> : <Performance data={performanceData.data.data} loading={performanceData.isLoading} />}
                                <Score data={finalData} loading={isLoading}/>
                            </div>
                        </div>
                        <div className='dashboard_scores'>
                            <InfoCard type="calories" value={finalData.keyData.calorieCount} />
                            <InfoCard type="proteins" value={finalData.keyData.proteinCount} />
                            <InfoCard type="carbohydrates" value={finalData.keyData.carbohydrateCount} />
                            <InfoCard type="lipids" value={finalData.keyData.lipidCount} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>Loading</div>
    )    
}

export default Dashboard