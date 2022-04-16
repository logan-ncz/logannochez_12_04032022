import AsideNav from '../components/AsideNav'
import InfoCard from '../components/InfoCard'
import Activity from '../components/Charts/Activity'
import AverageSessions from '../components/Charts/AverageSessions'
import Performance from '../components/Charts/Performance'
import Score from '../components/Charts/Score'
import { useParams } from 'react-router-dom'
import { useSportSeeAPI } from '../utils/hooks/useSportSeeAPI'
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


    // Switch on MockedAPI

    // const { data, isLoading } = MockedAPI("data", idFinal)
    
    // const finalData = data[0]

    // const activityData = MockedAPI("activity", idFinal)

    // const averageSessionsData = MockedAPI("average-sessions", idFinal)

    // const performanceData = MockedAPI("performance", idFinal)

    // const mockedData = true


    //Switch on useSportSeeAPI

    const { data, isLoading } = useSportSeeAPI("data", idFinal)

    const finalData = data.data

    const activityData = useSportSeeAPI("activity", idFinal)

    const averageSessionsData = useSportSeeAPI("average-sessions", idFinal)

    const performanceData = useSportSeeAPI("performance", idFinal)

    const mockedData = false

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