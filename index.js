exports.strptime = function(str, fmt) {
  var year = 1900;
  var month = 0;
  var day = 1;
  var hour = 0;
  var minute = 0;
  var second = 0;
  var millisecond = 0;
  var codes = [];
  var regex = new RegExp(fmt.replace(/%./g, function(arg) {
    var code = arg.charAt(1);
    codes.push(code);
    switch (code) {
      case 'y':
        return '([0-9]{2})';
      case 'm':
        return '([0-9]{2})';
      case 'd':
        return '([0-9]{2})';
      case 'H':
        return '([0-9]{2})';
      case 'M':
        return '([0-9]{2})';
      default:
        throw new Error('Unsupported code: ' + code);
    }
  }));
  var match = str.match(regex);
  if (!match) {
    throw new Error('The input does not match the format: ' + fmt);
  }
  match.slice(1).forEach(function(value, idx) {
    var code = codes[idx];
    switch (code) {
      case 'y':
        var now = new Date();
        var century = Math.floor(now.getFullYear() / 100) * 100;
        year = century + Number(value);
        break;
      case 'm':
        month = Number(value) - 1;
        break;
      case 'd':
        day = Number(value);
        break;
      case 'H':
        hour = Number(value);
        break;
      case 'M':
        minute = Number(value);
        break;
      default:
        throw new Error('Unsupported code: ' + code);
    }
  });
  return new Date(year, month, day, hour, minute, second, millisecond);
};

exports.strftime = function(dt, fmt) {
  return fmt.replace(/%./g, function(arg) {
    var code = arg.charAt(1);
    switch (code) {
      case 'y':
        return dt.getFullYear();
      case 'm':
        return dt.getMonth() + 1;
      case 'd':
        return dt.getDate();
      case 'H':
        return dt.getHours();
      case 'M':
        return dt.getMinutes();
      default:
        return arg;
    }
  });
};

exports.add = function(dt, dur) {
  return new Date(
    dt.getFullYear() + (dur.years || 0), 
    dt.getMonth() + (dur.months || 0), 
    dt.getDate() + (dur.days || 0),
    dt.getHours() + (dur.hours || 0),
    dt.getMinutes() + (dur.minutes || 0),
    dt.getSeconds() + (dur.seconds || 0),
    dt.getMilliseconds() + (dur.milliseconds || 0)
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