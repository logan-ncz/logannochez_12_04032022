import PropTypes from 'prop-types'
import calorieIcon from '../assets/energy.svg'
import carbohydrateIcon from '../assets/chicken.svg'
import proteinIcon from '../assets/apple.svg'
import lipidIcon from '../assets/cheeseburger.svg'

const ICON_BY_TYPE = {
    calories: calorieIcon,
    carbohydrates: carbohydrateIcon,
    proteins: proteinIcon,
    lipids: lipidIcon,
};

const UNIT_BY_TYPE = {
    calories: "kCal",
    carbohydrates: "g",
    proteins: "g",
    lipids: "g",
};

const NAME_BY_TYPE = {
    calories: "Calories",
    carbohydrates: "Glucides",
    proteins: "Protéines",
    lipids: "Lipides",
};

/**
 * Component used to render the InfoCard of macronutrients
 * 
 * @component
 * 
 * @param {string} type The type of macronutrient
 * @param {number} value The value of macronutrient
 * @returns {}
 */

function InfoCard({ type, value }) {
    return (
        <div className={type}>
            <div className={type + '_logo'}>
                <img src={ICON_BY_TYPE[type]} alt="" />
            </div>
            <div className={type + '_values'}>
                <p className={type + '_count'}>{value}{UNIT_BY_TYPE[type]}</p>
                <p className={type + '_text'}>{NAME_BY_TYPE[type]}</p>
            </div>
        </div>
    )
}

export default InfoCard

InfoCard.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
};