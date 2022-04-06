import Bodybuilding from '../assets/bodybuilding.svg'
import Cycling from '../assets/cycling.svg'
import Meditation from '../assets/meditation.svg'
import Swimming from '../assets/swimming.svg'

export default function AsideNav() {
    return (
        <aside className='header_nav_l'>
            <div className='header_nav_l_logos'>
                <a href="/"><img src={Meditation} alt="" /></a>
                <a href="/"><img src={Swimming} alt="" /></a>
                <a href="/"><img src={Cycling} alt="" /></a>
                <a href="/"><img src={Bodybuilding} alt="" /></a>
            </div>
            
            <div className='header_nav_l_copyright'>
                <p className='header_nav_l_copyright_text'>Copyright, SportSee 2022</p>
            </div>
        </aside>
    )
}