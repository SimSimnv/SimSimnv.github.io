function startApp(){
    let wordsArr=['бира', 'пиене','изхабени бъбреци',
        'отлежала ракия','мързел','анаболи',
        'пироман','издислав','мозъчен хирург',
        'майка ти','стимулиране'];
    function randomizeWords(){
        let words=$('.random-word');
        for(let word of words){
            let randNum=Math.floor(Math.random() * wordsArr.length);
            $(word).text(wordsArr[randNum]);
        }
    }
    $('.randomize-btn').on('click',randomizeWords);
    randomizeWords();
}