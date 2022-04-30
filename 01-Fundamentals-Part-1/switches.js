const day = 'sun'

// less used nowadays:

switch(day) {
    case 'monday': // day === 'monday'
        console.log('MONDAY')
        break
    case 'tuesday':
        console.log('TUESDAY')
        break
    case 'wednesday':
    case 'thursday':
        console.log('WEDNESDAY OR THURSDAY')
        break
    case 'friday':
        console.log('FRIDAY')
        break
    case 'saturday':
    case 'sunday':
        console.log('WEEKEND')
        break
    default:
        console.log('not a valid day')
        break
}

// using IF statements:

if(day === 'monday'){
    console.log('MONDAY - USING IF')
} else if (day === 'tuesday') {
    console.log('TUESDAY - USING IF')
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('WEDNESDAY OR THURSDAY - USING IF')
} else if (day === 'friday') {
    console.log('FRIDAY - USING IF')
} else if (day === 'saturday' || day === 'sunday') {
    console.log('WEEKEND - USING IF')
} else {
    console.log('not a valid day - USING IF')
}