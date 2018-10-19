const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default () => (
    <div className="cn-calendar-week-header">
        {DAYS_OF_WEEK.map(day => (
            <div className="cn-calendar__column" key={day}>
                {day}
            </div>
        ))}
    </div>
);
