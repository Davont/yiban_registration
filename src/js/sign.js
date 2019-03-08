$(document).ready(function () {
  $('#particles').particleground({
    dotColor: '#000',
    lineColor: '#000'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});


var APP_ID = "0BLVExeJDpfxDq6byDCAyEOY-gzGzoHsz";
var APP_KEY = "tHgx3NwYodh4WsBVT3jiTYr7";
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

function urlChange() {
  window.location.href = "result.html";
}
$("#stuNo").blur(function () {
  var query = new AV.Query("StudentInfo");
  if (!!$("#stuNo").val()) {
    query.matches("stuNo", $("#stuNo").val());
    query.first().then(
      function (results) {
        console.log(results.id);
        if (results.id) {
          alert("抱歉你的学号未填写完整或已被填写过表单！");
        }
      },
      function (error) {
        console.log(error);
      }
    );
  }
  // $.ajax({
  //     url: "http://180.209.98.91/397938/q",
  //     type: 'POST',
  //     dataType: 'json',
  //     data: {
  //         stuNo: $("#stuNo").val()
  //     },
  //     success: function (data) {
  //         console.log(data)
  //         if (data.code === 300) {
  //             alert("抱歉你的学号已被填写过表单！")
  //         } else if (data.code === 200) {
  //             console.log("成功！")
  //         } else {
  //             console.log("失败！")
  //         }

  //     },
  //     error: function (request, errorType, errorMessage) {

  //         console.log("失败：")
  //         console.log(request)
  //         console.log(errorType)
  //         console.log(errorMessage)
  //     }
  // })
});
//Demo
layui.use("form", function () {
  var form = layui.form;
  //验证表单
  form.verify({
    stuNo: [/^[b,q,B,Q]{1}([0-9]){8}$/, "你的学号格式不对哦"],
    name: [/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/, "请填写正确的姓名哦"]
  });
  //监听select
  form.on("select(select1)", function (data) {
    $("select[name=department2]").empty();
    //console.log($("select[name=department2] option[value="+data.value+"]")[0]);
    let options =
      "<option value=''></option>" +
      "<option value='技术部'>技术部</option>" +
      "<option value='设计部'>设计部</option>" +
      "<option value='事务部'>事务部</option>" +
      "<option value='外联部'>外联部</option>" +
      "<option value='项目部'>项目部</option>" +
      "<option value='宣传部'>宣传部</option>";
    $("select[name=department2]").append(options);
    $(
      "select[name=department2] option[value=" + data.value + "]"
    )[0].remove();
    form.render("select");
    console.log(data.elem); //得到select原始DOM对象
    console.log(data.value); //得到被选中的值
    console.log(data.othis); //得到美化后的DOM对象
  });
  //监听提交
  form.on("submit(formDemo)", function (submitData) {
    console.log(submitData.field); //当前容器的全部表单字段，名值对形式：{name: value}
    var StudentInfo = AV.Object.extend("StudentInfo");
    var StudentInfo = new StudentInfo();
    StudentInfo.set("campus", submitData.field.campus);
    StudentInfo.set("canChange", submitData.field.canChange);
    StudentInfo.set("department1", submitData.field.department1);
    StudentInfo.set("department2", submitData.field.department2);
    StudentInfo.set("hobby", submitData.field.hobby);
    StudentInfo.set("name", submitData.field.name);
    StudentInfo.set("phoneNo", submitData.field.phoneNo);
    StudentInfo.set("qqNo", submitData.field.qqNo);
    StudentInfo.set("selfIntro", submitData.field.selfIntro);
    StudentInfo.set("sex", submitData.field.sex);
    StudentInfo.set("stuNo", submitData.field.stuNo);
    let returned = confirm("确定提交吗？");
    if (returned) {
      StudentInfo.save().then(
        function (StudentInfo) {
          layer.msg("报名成功！");
          setTimeout("urlChange()", 2000);
          console.log(StudentInfo);
          // 成功
        },
        function (error) {
          alert(error);
          // 失败
        }
      );
    }

    // $.ajax({
    //     url: "http://eclass.njupt.edu.cn/397938/q",
    //     type: 'POST',
    //     dataType: 'json',
    //     data: submitData.field,
    //     success: function (data) {
    //         if (data.code === 200) {
    //             layer.msg("报名成功！");
    //             setTimeout("urlChange()", 2000);
    //         } else if (data.code === 825) {
    //             layer.msg("抱歉你的学号已被填写过表单！")
    //         } else if (data.code === 826) {
    //             layer.msg("抱歉你的手机号已被填写过表单！")
    //         } else {
    //             layer.msg("报名失败，请重新报名！");
    //         }

    //     },
    //     error: function (request, errorType, errorMessage) {

    //         console.log("失败：")
    //         console.log(request)
    //         console.log(errorType)
    //         console.log(errorMessage)
    //     }
    // })
    // confirm("确定提交吗？");
    return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
  });
});