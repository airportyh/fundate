var date = require('../');
var assert = require('assert');

suite('strptime', function() {

  it('parses time based on format', function() {
    var d = date.strptime('21/11/06 16:30', '%d/%m/%y %H:%M');
    assert.equal(d.getDate(), 21);
    assert.equal(d.getFullYear(), 2006);
    assert.equal(d.getMonth(), 10);
    assert.equal(d.getHours(), 16);
    assert.equal(d.getMinutes(), 30);
  });

});

suite('strftime', function() {

  it('formats time based on format', function() {
    var d = new Date(2016, 1, 2, 12, 30, 45, 374);
    assert.equal(date.strftime(d, '%d/%m/%y %H:%M'), '2/2/2016 12:30');
  });

});

suite('manipulation', function() {

  suite('duration', function() {

    test('convert a millisecond value to a duration');
    test('humanize a duration');

    test('creates duration', function() {
      var duration = date.duration({
        years: 1,
        months: 2,
        days: 3,
        hours: 3,
        minutes: 3,
        seconds: 2,
        milliseconds: 4
      });
      assert.equal(duration.years, 1);
      assert.equal(duration.months, 2);
      assert.equal(duration.days, 3);
      assert.equal(duration.hours, 3);
      assert.equal(duration.seconds, 2);
      assert.equal(duration.minutes, 3);
      assert.equal(duration.milliseconds, 4);
    });

    test('it defaults fields to zeros', function() {
      var duration = date.duration({});
      assert.equal(duration.years, 0);
      assert.equal(duration.months, 0);
      assert.equal(duration.days, 0);
      assert.equal(duration.hours, 0);
      assert.equal(duration.seconds, 0);
      assert.equal(duration.minutes, 0);
      assert.equal(duration.milliseconds, 0);
    });

    test('adds duration', function() {
      var duration = date.duration({
        years: 1,
        months: 2,
        days: 3,
        hours: 3,
        minutes: 3,
        seconds: 2,
        milliseconds: 4
      });
      var d = new Date(2016, 0, 1, 5, 6, 7, 8);
      var d2 = date.add(d, duration);
      assert.equal(d2.getFullYear(), 2017);
      assert.equal(d2.getMonth(), 2);
      assert.equal(d2.getDate(), 4);
      assert.equal(d2.getHours(), 8);
      assert.equal(d2.getMinutes(), 9);
      assert.equal(d2.getSeconds(), 9);
      assert.equal(d2.getMilliseconds(), 12);
    });
  
    test('adds n days', function() {
      var d = new Date(2016, 0, 1, 5, 6, 7, 8);
      var d2 = date.add(d, { days: 7 });
      assert.equal(d2.getFullYear(), 2016);
      assert.equal(d2.getMonth(), 0);
      assert.equal(d2.getDate(), 8);
      assert.equal(d2.getHours(), 5);
      assert.equal(d2.getMinutes(), 6);
      assert.equal(d2.getSeconds(), 7);
      assert.equal(d2.getMilliseconds(), 8);
    });

    test('goes to next month', function() {
      var d = new Date(2016, 0, 30);
      var d2 = date.add(d, { days: 10 });
      assert.equal(d2.getFullYear(), 2016);
      assert.equal(d2.getMonth(), 1);
      assert.equal(d2.getDate(), 9);
    });

    test('goes to next year', function() {
      var d = new Date(2015, 11, 30);
      var d2 = date.add(d, { days: 20 });
      assert.equal(d2.getFullYear(), 2016);
      assert.equal(d2.getMonth(), 0);
      assert.equal(d2.getDate(), 19);
    });
  
    test('adds n months', function() {
      var d = new Date(2016, 0, 1, 5, 6, 7, 8);
      var d2 = date.add(d, { months: 5 });
      assert.equal(d2.getFullYear(), 2016);
      assert.equal(d2.getMonth(), 5);
      assert.equal(d2.getDate(), 1);
      assert.equal(d2.getHours(), 5);
      assert.equal(d2.getMinutes(), 6);
      assert.equal(d2.getSeconds(), 7);
      assert.equal(d2.getMilliseconds(), 8);
    });

    test('goes to next year', function() {
      var d = new Date(2016, 0, 1);
      var d2 = date.add(d, { months: 14 });
      assert.equal(d2.getFullYear(), 2017);
      assert.equal(d2.getMonth(), 2);
      assert.equal(d2.getDate(), 1);
    });
  });

  test('addYears', function() {
    var d = new Date(2016, 0, 1, 5, 6, 7, 8);
    var d2 = date.add(d, { years: 4 });
    assert.equal(d2.getFullYear(), 2020);
    assert.equal(d2.getMonth(), 0);
    assert.equal(d2.getDate(), 1);
    assert.equal(d2.getHours(), 5);
    assert.equal(d2.getMinutes(), 6);
    assert.equal(d2.getSeconds(), 7);
    assert.equal(d2.getMilliseconds(), 8);
  });

  suite('start of', function() {
    test('start of year', function() {
      var d = new Date(2016, 1, 25, 10, 20, 23);
      var d2 = date.startOfYear(d);
      assert.equal(d2.getFullYear(), 2016);
      assert.equal(d2.getMonth(), 0);
      assert.equal(d2.getDate(), 1);
      assert.equal(d2.getHours(), 0);
      assert.equal(d2.getMinutes(), 0);
      assert.equal(d2.getSeconds(), 0);
      assert.equal(d2.getMilliseconds(), 0);
    });

    test('start of month', function() {
      var d = new Date(2016, 1, 25, 10, 20, 23);
      var d2 = date.startOfMonth(d);
      assert.equal(d2.getFullYear(), 2016);
      assert.equal(d2.getMonth(), 1);
      assert.equal(d2.getDate(), 1);
      assert.equal(d2.getHours(), 0);
      assert.equal(d2.getMinutes(), 0);
      assert.equal(d2.getSeconds(), 0);
      assert.equal(d2.getMilliseconds(), 0);
    });

    test('start of day', function() {
      var d = new Date(2016, 1, 25, 10, 20, 23);
      var d2 = date.startOfDay(d);
      assert.equal(d2.getFullYear(), 2016);
      assert.equal(d2.getMonth(), 1);
      assert.equal(d2.getDate(), 25);
      assert.equal(d2.getHours(), 0);
      assert.equal(d2.getMinutes(), 0);
      assert.equal(d2.getSeconds(), 0);
      assert.equal(d2.getMilliseconds(), 0);
    });
  });

  /*
  Operators >, <, >=, <=, and - already work directly with date objects.
  But == doesn't, so we add a convinience .equals function.
  Easily converting a duration in ms to a duration object is desired.
  */
  test('equals', function() {
    assert(date.equal(new Date(2016, 0, 1), new Date(2016, 0, 1)));
    assert(!date.equal(new Date(2015, 1, 4), new Date(2016, 0, 1)));
  });

  test('isDST');
  test('isLeapYear');

});

suite.skip('utc', function(){});
