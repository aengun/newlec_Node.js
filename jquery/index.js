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

$((e) => {
    let btn = $("input[type=button]");
    let input = $("input[type=text]");
    let img = $("img");

    // input에 https://www.sisaweek.com/news/photo/202006/135066_125017_5437.jpg 입력 후 버튼 클릭해보자
    btn.bind("click", (e) => {
        let url = input.val();
        img.attr("src", url);
    });
});