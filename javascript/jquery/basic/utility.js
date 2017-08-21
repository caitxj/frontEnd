/**
 *
 *
 * jQuery   utility  func
 *
 * trim
 *
 *
 *
 *
 * Created by caitxj on 17-8-21.
 */

var jqutility = {

    test: function () {
        var tet = " test test        sdfsdf";
        var newStr = $.trim(tet); //left  right  trim
        console.log(newStr);

        /**
         * $.each
         *    param:  obj ,array
         *
         * @type {[*]}
         */
        var array = [1, 2, 3, 4];
        var obj = {id: 1001, name: "wwe"};
        $.each(array, function (i, item) {
            console.log(i + ":" + item);
        })
        $.each(obj, function (key, value) {
            console.log("key:" + key + "-" + value);
        })

        /***
         *
         * $.grep : array fliter
         *
         */

        var newArray = $.grep(array, function (value) {
            return value * 2;
        }, false);
        console.log(newArray.join(","));


        /**
         *
         * $.map(array,obj-array)   translate  array
         *
         *
         *
         */

        var newArray = $.map(array, function (item, i) {
            return item + 1;
        })
        var newArray = $.map({id: 1001, name: "wwe"}, function (item, i) {
            return item
        })
        console.log(newArray.join(","));

        /***
         *
         * func in  array
         *
         *
         */

        var index = $.inArray(2, [1, 2, 3, 4]);
        console.log("index:" + index);

        var objarray = $.makeArray({id: 1001, name: "wwe"});
        console.log(objarray);

        /***
         * $.unique
         *
         *
         */
        var unArray = $.unique([1, 2, 33, 33, 4, 5, 6, 77, 77, 8]);
        console.log(unArray.join(","));

        var megArray = $.merge([1, 2], [3, 4]);
        console.log(megArray.join(","));

        /**
         *
         * $.extend()
         *
         */
        var newObj = $.extend(true, {id: 1001, name: "wwe", hob: {id: 100, score: 1000}}, {age: 22}, {
            hob: {
                id: 1002,
                name: "pk"
            }
        });
        console.log(newObj);

        /**
         *
         * param
         *
         */

        var ser = $.param({id: 1001, name: "wwe", user: {sex:11}});
        console.log(ser);

    }
}

jqutility.test();