var firebaseConfig = {
    apiKey: "AIzaSyD8S6n89qRvqYs7Vi5OPtOnvUiYKuh8Pqw",
    authDomain: "server1-a4971.firebaseapp.com",
    databaseURL: "https://server1-a4971-default-rtdb.firebaseio.com",
    projectId: "server1-a4971",
    storageBucket: "server1-a4971.appspot.com",
    messagingSenderId: "876076760103",
    appId: "1:876076760103:web:4a9b167e6b4085163be202"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

(() => {
    database.ref('/').on('value', function (data) {
        var table = document.getElementById('tablenames');
        table.innerHTML = '';
        var all_data = data.val();
        var con = 1;
        for (const key in all_data) {
            database.ref('/' + key + '/week/').on('value', function (data) {
                var all_week_data = data.val();
                for (const j in all_week_data) {
                    table.innerHTML += `
                    <tr>
                        <th scope = "row">
                            ${con + 1}
                        </th>
                            <td>${all_week_data[j].user}</td>
                            <td>${all_week_data[j].workinshift}</td>
                            <td>${all_week_data[j].time}</td>
                            <td>${all_week_data[j].overwork}</td>
                            <td>${all_week_data[j].day}</td>
                            <td>${all_week_data[j].jobsatisfaction}</td>
                            <td>${all_week_data[j].welfare}</td>
                            <td>${all_week_data[j].fillingdate}</td>
                            <td>${all_week_data[j].editdate}</td>
                        </tr>
                    `;
                    con++;
                }
            });

        }
    });

    let filterInput = document.getElementById('filter');
    filterInput.addEventListener('keyup', function () {
        let filterValue = document.getElementById('filter').value;
        var table = document.getElementById('tablenames');
        let tr = table.querySelectorAll('tr');

        for (let index = 0; index < tr.length; index++) {
            let val = tr[index].getElementsByTagName('td')[0];
            if (val.innerHTML.indexOf(filterValue) > -1) {
                tr[index].style.display = '';
            } else {
                tr[index].style.display = 'none';
            }
        }
    });
})();