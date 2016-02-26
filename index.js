exports.duration = duration;
function duration(dur) {
  return {
    years: dur.years || 0,
    months: dur.months || 0,
    days: dur.days || 0,
    hours: dur.hours || 0,
    minutes: dur.minutes || 0,
    seconds: dur.seconds || 0,
    milliseconds: dur.milliseconds || 0
  };
};

exports.add = function(dt, dur) {
  dur = duration(dur);
  return new Date(
    dt.getFullYear() + dur.years, 
    dt.getMonth() + dur.months, 
    dt.getDate() + dur.days,
    dt.getHours() + dur.hours,
    dt.getMinutes() + dur.minutes,
    dt.getSeconds() + dur.seconds,
    dt.getMilliseconds() + dur.milliseconds
  );
};

exports.equal = function(d1, d2) {
  return d1.getTime() === d2.getTime();
};

exports.startOfYear = function(dt) {
  return new Date(dt.getFullYear(), 0, 1);
};

exports.startOfMonth = function(dt) {
  return new Date(dt.getFullYear(), dt.getMonth(), 1);
};

exports.startOfDay = function(dt) {
  return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
};