










// //getDatePostPublish() // 1 Apr 2020 18:21

// let getDatePostPublish = () => {

// 	let date = new Date();

// 	let year = date.getFullYear();
// 	let month = transformMonth(date.getMonth()); //transform
// 	let day = date.getDate(); 
// 	let hour = date.getHours();
// 	let min = date.getMinutes();

// 	function transformMonth(monthNum) {
// 		let montsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// 		return montsArr[monthNum];
// 	}

// 	return `${day} ${month} ${year} ${hour}:${min}`;

// };

// let timePublish = getDatePostPublish();

// console.log(timePublish);


// let obj = {
//     facebook: "facebook.com",
//     website: null,
//     vk: "vk.com/dimych",
//     twitter: "https://twitter.com/@sdf",
//     instagram: "instagra.com/sds",
//     youtube: null,
//     github: "github.com",
//     mainLink: null
// };




// function mapForObj(obj, callback) {
// 	for (let key in obj) {
// 		if(obj[key]) {
// 			callback(key, obj[key]);
// 		}
// 	}
// }

// mapForObj(obj, (key, value) => {
// 	console.log(key + ' ' + value);
// });


// let btns = document.getElementsByTagName('button');

// let state = {
//     followingInProgress: [2, 4]
// }




// for (let btn of btns) {
//     if (state.followingInProgress.some(elem => elem == btn.id)) {
//         btn.disabled = true;
//     }
// }

// function makeWorker() {
//   let name = "Pete";

//   return function() {
//     alert(name);
//   };
// }

// let name = "John";

// // create a function
// let work = makeWorker();

// // call it
// work();




/*

Написать свою функцию bind

Пример: 

function logPerson() {
    console.log(`Person ${this.name} ${this.age} ${this.job}`);
}

const person1 = new {name: 'Dima', age: '21', job: 'React Developer'};
const person2 = new {name: 'Polya', age: '22', job: 'Design Developer'};


bind(person1, logPerson);
bind(person2, logPerson);

*/

// function logPerson() {
//     console.log(`Person ${this.name} ${this.age} ${this.job}`);
// }

// const person1 = {name: 'Dima', age: '21', job: 'React Developer'};
// const person2 = {name: 'Polya', age: '22', job: 'Design Developer'};


// bind(person1, logPerson);
// bind(person2, logPerson);


// function bind(obj, funcWhichBind) {
//     let test = {...obj, funcWhichBind};
//     return test.funcWhichBind();
// }


/*console.log('Request data...');

setTimeout(() => {
	console.log('Preparing data...');


	const backData = {
		server: 'aws',
		port: 2000,
		status: 'working'
	}

	setTimeout(() => {
		backData.modified = true;
		console.log('Data received', backData);
	}, 2000)


}, 2000);

*/

/*
const p = new Promise((resolve, reject) => {

	setTimeout(() => {
		console.log('Preparing data...');

		const backData = {
			server: 'aws',
			port: 2000,
			status: 'working'
		}
		resolve(backData);
	}, 2000);

});

p.then(data => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			data.modified = true;
			resolve(data)
		})
	})
})
	.catch(err => {
		console.log('Error: ', err);
	})
	.then(clientData => {
		console.log('Data received', clientData);
		clientData.findJob = true;
		return clientData;
	})
	.then(clientData => {
		console.log(clientData);
	})
	.finally(() => {
		console.log('Finally');
	})

*/


// const sleep = (ms) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve();
// 		}, ms)
// 	})
// }

// sleep(2000).then(() => console.log('After 2sec'));
// sleep(5000).then(() => console.log('After 5sec'));


// let initialState = {
//     items: [
//         {
//             name: "shota",
//             id: 6969,
//             uniqueUrlName: null,
//             photos: {
//                 small: null,
//                 large: null
//             },
//             status: null,
//             followed: false
//         }
//     ],
//     totalCount: 2971,
//     usersOnPage: 7,
//     error: null,
//     sum() {
//     	console.log(Math.ceil(this.totalCount / this.usersOnPage));
//     }
// }


// window.sum = initialState.sum();




function $(selector) {
	return document.querySelector(selector);
}