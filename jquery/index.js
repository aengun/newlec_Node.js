// window.addEventListener("load", (e) => {
//     let btn = document.querySelector("input[type=button]");
//     let input = document.querySelector("input[type=text]");

//     btn.onclick = (e) => {
//         input.value = "hello";
//     };
// });

//=================================================================

// window.addEventListener("load", (e) => {
//     let btn = document.querySelector("input[type=button]");
//     let input = document.querySelector("input[type=text]");

//     btn.onclick = (e) => {
//         // jQuery는 document객체를 사용하면 안 된다.
//         // jQuery(input).val("hello");
//         $(input).val("hello");
//     };
// });

//=================================================================

// window.addEventListener("load", (e) => {

//     let btn = $("input[type=button]");
//     let input = $("input[type=text]");

//     btn.bind("click", (e) => {
//         input.val("hello");
//     })

// });

//=================================================================

// $((e) => {
//     let btn = $("input[type=button]");
//     let input = $("input[type=text]");
//     let img = $("img");

//     // input에 https://www.sisaweek.com/news/photo/202006/135066_125017_5437.jpg 입력 후 버튼 클릭해보자
//     btn.bind("click", (e) => {
//         let url = input.val();
//         img.attr("src", url);
//     });
// });

//=================================================================
// 2월 9일
//=================================================================

// $((e) => {
//     let btn = $("input[type=button]");
//     let input = $("input[type=text]");
//     let img = $("img");

//     btn.click((e) => {
//         let url = input.val();
//         img.attr("src", url);
//     });
// });

//=================================================================

// $((e) => {
//     let btn = $("input[type=button]");
//     let btnTrigger = $("input[value=trigger]");
//     let input = $("input[type=text]");
//     let img = $("img");

//     btn.click((e) => {
//         let url = input.val();
//         img.attr("src", url);
//     });

//     btnTrigger.click((e) => {
//         btn.trigger("click");
//     })

// });

//=================================================================

// $((e) => {
//     // jQuery 객체의 순회
//     $("#s2 input").click(() => {
//         console.log("test section2");
//     })

//     // 이벤트 함수들
//     const section = $('#s1');

//     let btn = section.find("input[value=click]");
//     let btnTrigger = section.find("input[value=trigger]");
//     let input = section.find("input[type=text]");
//     let img = section.find("img");

//     //btn.bind("click", (e)=>{
//     btn.click((e) => {
//         //console.log("test");
//         let url = input.val();
//         img.attr("src", url);
//     });

//     btnTrigger.click((e) => {
//         btn.trigger("click");
//     });
// });

// $(() => {
//     // 노드 트리에서의 순회

//     // jQuery 객체가 셀렉팅한 노드의 순회
//     $("#s2 input").eq(0).val("버튼1"); // jQuery 객체
//     $("#s2 input").eq(1).val("버튼2");
//     $("#s2 input").get(2).value = "버튼3"; // DOM 객체

//     // arrow function은 this 불가
//     // $("#s2 input").each((i) => {
//     //     this.value = "버튼" +(i+1);
//     // }); 

//     $("#s2 input").each(function (i) {
//         //this.value = "버튼" +(i+1);
//         $(this).val("버튼" + (i + 1));
//     });
//     // 마지막 번째 항목
//     $("#s2 input").last().val("마지막 버튼");
//     // 3번째 버튼
//     $("#s2 input").filter(":nth-child(3)").val("3번째 찾았다!");

// })

//=================================================================
// 노드 트리에서의 순회

// $(() => {
//     // $("#s2 input").eq(1).next().prevAll().val("찾았다");
//     $("#s2 input").even().val("찾았다");
// });

//=================================================================
// CSS와 Effect

// $(() => {
//     // $("#s2 input").css("border","1px solid red");
//     // $("#s2 input").css("background","green");
//     // $("#s2 input").css("width","100px");
//     // $("#s2 input").css("height","50px");
//     $("#s2 input").css({
//         border: "1px solid red",
//         background: "green",
//         width: "100px",
//         height: "50px"
//     });
// });

//다음과 같이 수정
// $(() => {
//     $("#s2 input")
//         .first()
//         .click((e) => {
//             $("#s2 input")
//                 .animate({
//                     border: "1px solid red",
//                     width: "100px"
//                 }, 500)
//                 .css({
//                     background: "#00ff00",
//                 })
//                 .delay(1000)
//                 .animate({
//                     height: "50px"
//                 }, {
//                     duration: 500
//                 })
//                 .animate({
//                     borderWidth: "10px"
//                 },
//                     {
//                         queue: false
//                     });
//         })
// });

//=================================================================
// 2월 10일
//=================================================================
// $(() => {

//     // let left = $("#s2 input:first-child")
//     // .get(0).style.backgroundColor;
//     // .eq(0).position().left;

//     // console.log(left);

//     let input1 = $("#s2 input:first-child").get(0);
//     let style1 = window.getComputedStyle(input1);
//     let left = style1.getPropertyValue("left");


//     $("#s2 input")
//         .first()
//         .click((e) => {
//             // $("#s2").scrollTop(100);

//             $("#s2 input")
//                 .animate({
//                     // border: "1px solid red",
//                     backgroundColor:"red",
//                     width: "100px"
//                 }, 500)
//                 .css({
//                     background: "#00ff00",
//                 })
//                 .delay(1000)
//                 .animate({
//                     height: "50px"
//                 }, {
//                     duration: 500
//                 })
//                 .animate({
//                     borderWidth: "10px"
//                 },
//                     {
//                         queue: false
//                     });
//         })
// });


//=================================================================
// ajax
$(() => {

    $("#s2 input")
        .first()
        .click((e) => {
            // $.get("http://localhost:3000/api/notice/list", (data)=>{
            //     console.log(data);
            //     console.log(typeof data);
            // });

            // $("#s2").load("http://localhost:3000/customer/notice/list");

            let ul = $("#s2 ul");
            $.getJSON("http://localhost:3000/api/notice/list", (data)=>{
                ul.append(data.map(n=>`<li>${n.title}</li>`));
            });
        });

});


//=================================================================