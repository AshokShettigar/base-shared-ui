import moment from 'moment-timezone';

export const getTimeZone = name => ({
    name,
    label: `(UTC${moment.tz(name).format('Z')}) ${name}`,
    offset: moment().tz(name).utcOffset()
});


export const timeZones = moment.tz.names().map(getTimeZone);

export const getMyTimeZone = () => getTimeZone(moment.tz.guess());
