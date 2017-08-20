/**
 *
 * jquery    table
 *
 * Created by caitxj on 17-8-18.
 */

var jqTable = {
    addTemplate: "<tr><td><input type='checkbox'></td><td>{name}</td><td>{pwd}</td><td><button data-type='editor' class='btn btn-primary'>editor</button>&nbsp;&nbsp;<button class='btn btn-danger' data-type='remove'>remove</button></td></tr>",
    tableName: "",
    /**
     * 事件初始化操作
     */
    init: function (tableName) {
        var _this = this;
        this.tableName = tableName;
        $("#save").click(function () {
            _this.validator();
        })
        $("#cancel").click(function () {
            $("#addUserForm")[0].reset();
            _this.clearValidatorInfo();
        });
        $("#query").click(function () {
            _this.query();
        })
        $("#keyWord").keydown(function (event) {
            if (event.keyCode == 13) {
                _this.query();
            }
        })

        /**
         * 全选、反选
         */
        $("#userTable tr:first input").click(function () {
            var checked = this.checked;
            var type = $(this).data("type");
            if (type == "all") {
                $(_this.tableName + " tr:gt(0) input[type='checkbox']").prop("checked", checked);
                var trs = $(_this.tableName + " tr:gt(0)");
                if (checked) {
                    trs.addClass("active");
                } else {
                    trs.removeClass("active");
                }
            } else {
                $(_this.tableName + " tr:gt(0) input[type='checkbox']").each(function (i, item) {
                    item.checked = !item.checked;
                    if (item.checked) {
                        $(item).parents("tr").addClass("active");
                    } else {
                        $(item).parents("tr").removeClass("active");
                    }
                })
            }
        });

        $("#delete").click(function () {
            $(_this.tableName + " tr:gt(0) input[type='checkbox']:checked").parents("tr").remove();
        });
    },
    validator: function () {
        this.clearValidatorInfo();
        var $name = $("#name");
        var $pwd = $("#pwd");
        if ($name.val() == "") {
            $name.parent().append("<label>姓名不能爲空</label>");
            return;
        }
        if ($pwd.val() == "") {
            $pwd.parent().append("<label>密碼不能爲空</label>");
            return;
        }
        var user = {
            name: $name.val(),
            pwd: $pwd.val()
        }
        this.add(user);
    },
    clearValidatorInfo: function () {
        $("form .form-control+label").remove();
    }
    ,
    add: function (user) {
        var _this = this;
        _this.clearValidatorInfo();
        var newTr = $(this.addTemplate.replace("{name}", user.name).replace("{pwd}", user.pwd));
        $(this.tableName).append(newTr);
        newTr.find("button").on("click", function () {
            var type = $(this).data("type");
            if (type == "remove") {
                _this.delete(this);
            } else if (type == "editor") {
                _this.editor(this);
            } else if (type == "save") {
                _this.save(this);
            } else if (type == "cancel") {
                _this.cancel(this);
            }
        });
        newTr.hover(function () {
            $(this).addClass("active");
        }, function () {
            var len = $(this).find(":checked").length;
            if (len == 0) {
                $(this).removeClass("active");
            }

        });
        newTr.find("input[type='checkbox']").click(function () {
            var checked = this.checked;
            var ctr = $(this).parents("tr");
            if (checked) {
                ctr.addClass("active");
            } else {
                ctr.removeClass("active");
            }
        });
    }
    ,
    delete: function (obj) {
        $(obj).parents("tr").remove();
    }
    ,
    editor: function (obj) {
        var tds = $(obj).parents("tr").children();
        for (var i = 1; i < tds.length; i++) {
            if (i < tds.length - 1) {
                $(tds[i]).attr("data", tds[i].innerHTML);
                $(tds[i]).html("<input class='form-control' value='" + tds[i].innerHTML + "'>");
            } else {
                var btns = $(tds[i]).find("button");
                $(btns[0]).html("save").data("type", "save");
                $(btns[1]).html("cancel").data("type", "cancel");
            }
        }
    },
    save: function (obj) {
        var tds = $(obj).parents("tr").children();
        for (var i = 1; i < tds.length; i++) {
            if (i < tds.length - 1) {
                $(tds[i]).html($(tds[i]).find("input").val());
            } else {
                var btns = $(tds[i]).find("button");
                $(btns[0]).html("editor").data("type", "editor");
                $(btns[1]).html("remove").data("type", "remove");
            }

        }
    }
    ,
    cancel: function (obj) {
        var tds = $(obj).parents("tr").children();
        for (var i = 0; i < tds.length; i++) {
            if (i < tds.length - 1) {
                $(tds[i]).html($(tds[i]).attr("data"));
            } else {
                var btns = $(tds[i]).find("button");
                $(btns[0]).html("editor").data("type", "editor");
                $(btns[1]).html("remove").data("type", "remove");
            }

        }
    }
    ,
    query: function () {
        var searchValue = $("#keyWord").val();
        if (searchValue == "") {
            $(this.tableName + " tr").show();
        } else {
            $(this.tableName + " tr:gt(0)").hide().filter(":contains('" + searchValue + "')").show();
        }
    }
}