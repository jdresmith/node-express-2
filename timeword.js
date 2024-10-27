function timeToWords(time) {
    const hoursMap = {
        '00': 'twelve',
        '01': 'one', '02': 'two', '03': 'three', '04': 'four', '05': 'five',
        '06': 'six', '07': 'seven', '08': 'eight', '09': 'nine', '10': 'ten',
        '11': 'eleven', '12': 'twelve', '13': 'one', '14': 'two', '15': 'three',
        '16': 'four', '17': 'five', '18': 'six', '19': 'seven', '20': 'eight',
        '21': 'nine', '22': 'ten', '23': 'eleven'
    };
    const minutesMap = {
        '00': 'o’clock', '01': 'oh one', '02': 'oh two', '03': 'oh three', '04': 'oh four', '05': 'oh five',
        '06': 'oh six', '07': 'oh seven', '08': 'oh eight', '09': 'oh nine', '10': 'ten',
        '11': 'eleven', '12': 'twelve', '13': 'thirteen', '14': 'fourteen', '15': 'fifteen',
        '16': 'sixteen', '17': 'seventeen', '18': 'eighteen', '19': 'nineteen', '20': 'twenty',
        '21': 'twenty one', '22': 'twenty two', '23': 'twenty three', '24': 'twenty four',
        '25': 'twenty five', '26': 'twenty six', '27': 'twenty seven', '28': 'twenty eight',
        '29': 'twenty nine', '30': 'thirty', '31': 'thirty one', '32': 'thirty two',
        '33': 'thirty three', '34': 'thirty four', '35': 'thirty five', '36': 'thirty six',
        '37': 'thirty seven', '38': 'thirty eight', '39': 'thirty nine', '40': 'forty',
        '41': 'forty one', '42': 'forty two', '43': 'forty three', '44': 'forty four',
        '45': 'forty five', '46': 'forty six', '47': 'forty seven', '48': 'forty eight',
        '49': 'forty nine', '50': 'fifty', '51': 'fifty one', '52': 'fifty two',
        '53': 'fifty three', '54': 'fifty four', '55': 'fifty five', '56': 'fifty six',
        '57': 'fifty seven', '58': 'fifty eight', '59': 'fifty nine'
    };

    const [hour, minute] = time.split(':');
    const hourWord = hoursMap[hour];
    const minuteWord = minutesMap[minute];

    if (time === '00:00') return 'midnight';
    if (time === '12:00') return 'noon';

    const period = parseInt(hour) < 12 ? 'am' : 'pm';
    return `${hourWord} ${minuteWord} ${period}`;
}