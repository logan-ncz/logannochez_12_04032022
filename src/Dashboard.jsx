import Bodybuilding from './assets/bodybuilding.svg'
import Cycling from './assets/cycling.svg'
import Meditation from './assets/meditation.svg'
import Swimming from './assets/swimming.svg'
import Charts1 from './components/Charts1'
import Charts2 from './components/Charts2'
import Charts3 from './components/Charts3'
import PieChart4 from './components/PieChart'
import { useParams } from 'react-router-dom'
import Energy from './assets/energy.svg'
import Chicken from './assets/chicken.svg'
import Apple from './assets/apple.svg'
import Cheeseburger from './assets/cheeseburger.svg'
import { useFetch } from './utils/Fetch'

export default function Dashboard() {
    
    const { id } = useParams()

    const idFinal = Number(id)
    
    const { data, isLoading } = useFetch(`http://localhost:5500/user/${idFinal}`)

    if (!isLoading) {
        return (
            <div className="home">
                <nav className='header_nav_l'>
                    <img src={Meditation} alt="" />
                    <img src={Swimming} alt="" />
                    <img src={Cycling} alt="" />
                    <img src={Bodybuilding} alt="" />
                </nav>
                <div className='dashboard'>
                    <div className='dashboard_charts'>
                        <p className='dashboard_hello'>Bonjour <b>{data.data.userInfos.firstName}</b></p>
                        <p className='dashboard_congratulations'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                        <Charts1 id={idFinal} />
                        <p className='charts1_title'>Activité quotidienne</p>
                        <div className='dashboard_charts_2_3'>
                            <Charts2 id={idFinal} />
                            <Charts3 id={idFinal} />
                        </div>
                        
                        <PieChart4 id={idFinal} />
                    </div>
                    <div className='dashboard_scores'>
                        <div className='calories'>
                            <div className='calories_logo'>
                                <img src={Energy} alt="" />
                            </div>
                            <div className='calories_values'>
                                <p className='calories_count'>{data.data.keyData.calorieCount}kCal</p>
                                <p className='calories_text'>Calories</p>
                            </div>
                        </div>
                        <div className='proteins'>
                            <div className='proteins_logo'>
                                <img src={Chicken} alt="" />
                            </div>
                            <div className='calories_values'>
                                <p className='proteins_count'>{data.data.keyData.proteinCount}g</p>
                                <p className='proteins_text'>Protéines</p>
                            </div>
                        </div>
                        <div className='glucides'>
                            <div className='glucides_logo'>
                                <img src={Apple} alt="" />
                            </div>
                            <div className='calories_values'>
                                <p className='glucides_count'>{data.data.keyData.carbohydrateCount}g</p>
                                <p className='glucides_text'>Glucides</p>
                            </div>
                        </div>
                        <div className='lipides'>
                            <div className='lipides_logo'>
                                <img src={Cheeseburger} alt="" />
                            </div>
                            <div className='calories_values'>
                                <p className='lipides_count'>{data.data.keyData.lipidCount}g</p>
                                <p className='lipides_text'>Lipides</p>
                            </div>
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