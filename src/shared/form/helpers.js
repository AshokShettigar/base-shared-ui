export const combineDateAndTime = (date, time) =>
    date.set({ hour: time.get('hour'), minute: time.get('minute'), second: time.get('second') });
