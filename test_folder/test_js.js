let path = 'https://newsapi.org/v2/everything?q=tesla&from=2024-01-07&sortBy=publishedAt&apiKey=960e84504af84f5ab730dd647e6b04d6';

// let some_promise = new Promise((resolve, reject) => {
//     let flag = false;
//     if(flag) resolve('data');
//     else reject('fail');
// });

// some_promise.then((data) => console.log(data)).catch((data) => console.log(data));

let data_fetch = () => {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //     resolve('data');
        // },1000)
        // // reject('fail');
    });
}


let tmp = data_fetch();

// tmp.then(data => console.log(data)).catch(data => console.log(data));
console.log(tmp);