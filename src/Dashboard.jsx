import AsideNav from './components/AsideNav'
import InfoCard from './components/infoCard'
import Activity from './components/Charts/Activity'
import AverageSessions from './components/Charts/AverageSessions'
import Performance from './components/Charts/Performance'
import Score from './components/Charts/Score'
import { useParams } from 'react-router-dom'
import { useSportSeeAPI } from './utils/useSportSeeAPI'

/**
 * Component used to call the Fetch fonction to retrieves the data, then render the user's Dashboard with the differents charts.
 * 
 * @returns Render the dashboard
 */

export default function Dashboard() {
    const { id } = useParams()

    const idFinal = Number(id)

    const { data, isLoading } = useSportSeeAPI("key-data", idFinal)

    const activityData = useSportSeeAPI("activity", idFinal)

    const averageSessionsData = useSportSeeAPI("average-sessions", idFinal)

    const performanceData = useSportSeeAPI("performance", idFinal)

    if (!isLoading) {
        return (
            <div className="home">
                <AsideNav />
                <div className='dashboard'>
                    <div className="dashboard_header">
                        <p className='dashboard_hello'>Bonjour <b>{data.data.userInfos.firstName}</b></p>
                        <p className='dashboard_congratulations'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                    </div>
                    <div className="dashboard_main">
                        <div className='dashboard_charts'>
                            <Activity data={activityData} />
                            <p className='activity_title'>Activité quotidienne</p>
                            <div className='dashboard_charts_2_3_4'>
                                <AverageSessions data={averageSessionsData} />
                                <Performance data={performanceData} />
                                <Score data={data} loading={isLoading}/>
                            </div>
                        </div>
                        <div className='dashboard_scores'>
                            <InfoCard type="calories" value={data.data.keyData.calorieCount} />
                            <InfoCard type="proteins" value={data.data.keyData.proteinCount} />
                            <InfoCard type="carbohydrates" value={data.data.keyData.carbohydrateCount} />
                            <InfoCard type="lipids" value={data.data.keyData.lipidCount} />
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