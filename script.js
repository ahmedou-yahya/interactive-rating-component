let ratings = document.querySelectorAll('.circle');
let btn = document.getElementById('btn');
let evaluation = document.querySelector('.evaluation');
let thankYou = document.querySelector('.thank-you');
let span = document.getElementById('rating');

for (let i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener('click', () => {

        let rating = ratings[i].innerHTML;
        for (let i = 0; i < ratings.length; i++) {
            ratings[i].classList.contains('selected')
            ratings[i].classList.remove('selected');
        }

        ratings[i].classList.add('selected');

        btn.addEventListener('click', () => {
            evaluation.style.display = 'none';
            thankYou.style.display = 'flex';
            span.innerHTML = rating;
        })
    })
}
