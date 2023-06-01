    // sendのclick function イベントです
    $(".send").on("click", function(){
        // 入力した文字を取得したいと思います
        // #dayの値を代入したものがdateである（constは定数）
        const date = $("#day").val();
    
        // コンソールログを使ってKeyの中身をチェックしてみましょう
        console.log(date, 'dateの中身')
        // textareaの入力個所も取得しましょう
        const value = $("#diary").val();
        console.log(value, 'diaryの中身')
    
        // ローカルストレージに保存する記述をします
        // $("#list").append(html)
        $("#day").val("")
        $("#diary").val("")
        // Windows
        window.localStorage.setItem(date, value)
    });    
        // // 画面上に表示してみましょう
        // const html = `
        //     <tr>
        //         <th>${date}</th>
        //         <td>${value}</td>
        //     </tr>
        // `
        
    
        //2.clear クリックイベント
    $("#clear").on('click', function (){
        window.localStorage.clear();
        // $("#list").empty();
    })

    $("button").on("click", function(){
        const date = $("#day").val();
        const value = $("#diary").val();
        window.localStorage.getItem(date, value)
    })

for(let i=0; i<localStorage.length; i++){
    const key =localStorage.key(i);
    const value = localStorage.getItem(key);

    const html = '<tr><th>'+key+'</th><td>'+value+',</td></tr>';
    $("#list").append(html);
} 

    //3.ページ読み込み：保存データ取得表示