var tableUsers = document.querySelector(".table-users");
var tbodyRef = tableUsers.getElementsByTagName("tbody")[0];

var idTitle = document.querySelector(".nameTable");
var nameTitle = document.querySelector(".nameTable");
var btnSort = document.querySelector(".btn-sort");
// Sort
function sortTable(n) {
    var rows,
        i,
        x,
        y,
        count = 0;
    var switching = true;

    var direction = "ascending";

    while (switching) {
        switching = false;
        var rows = tbodyRef.rows;


        for (i = 0; i < rows.length - 1; i++) {
            var Switch = false;


            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (direction == "ascending") {

                if (
                    x.innerHTML.toLowerCase().localeCompare(y.innerHTML.toLowerCase()) > 0
                ) {

                    Switch = true;
                    break;
                }
            } else if (direction == "descending") {


                if (
                    x.innerHTML.toLowerCase().localeCompare(y.innerHTML.toLowerCase()) < 0
                ) {

                    Switch = true;
                    break;
                }
            }
        }
        if (Switch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;

            count++;
        } else {
            if (count == 0 && direction == "ascending") {
                direction = "descending";
                switching = true;
            }
        }
    }
}

var sortUpIconName = document.querySelector(".sort-up-name");
var sortDownIconName = document.querySelector(".sort-down-name");

nameTitle.addEventListener("click", () => {
    if (sortDownIconName.classList.contains("hidden")) {
        sortDownIconName.classList.remove("hidden");
        sortUpIconName.classList.add("hidden");
    } else {
        sortDownIconName.classList.add("hidden");
        sortUpIconName.classList.remove("hidden");
    }
    sortTable(2);
});
btnSort.onclick = () => {
    if (sortDownIconName.classList.contains("hidden")) {
        sortDownIconName.classList.remove("hidden");
        sortUpIconName.classList.add("hidden");
    } else {
        sortDownIconName.classList.add("hidden");
        sortUpIconName.classList.remove("hidden");
    }
    sortTable(2);
};


function reset() {
    inputSearch.value = "";
    valueSearch = [];
    let td = document.getElementsByTagName("td");
    for (i = 0; i < td.length; i++) {
        td[i].style.color = "black";
    }
    let arrTr = tbodyRef.querySelectorAll("tr");
    for (i = 0; i < arrTr.length; i++) {
        arrTr[i].classList.remove("hidden");
    }
}


var valueSearch = [];

function setDefaultTable() {
    let trShow = document.querySelectorAll("tr[class=hidden]");
    console.log("valueSearch: ", valueSearch);
    if (valueSearch && valueSearch.length > 0) {
        for (j = 0; j < tbodyRef.rows.length; j++) {
            for (i = 0; i < valueSearch.length; i++) {
                for (z = 0; z < tbodyRef.rows[j].cells.length; z++) {
                    tbodyRef.rows[j].cells[z].innerHTML = tbodyRef.rows[j].cells[
                        z
                    ].innerHTML.replace(
                        `<span class="highlight" style="display: inline-block;min-width: 0;">${valueSearch[i]}</span>`,
                        `${valueSearch[i]}`
                    );
                }
            }
        }
    }
}
// search
function search(searchInput) {
    setDefaultTable();
    if (!searchInput.trim()) {
        reset();
        return;
    }

    filter = searchInput;
    tr = tbodyRef.getElementsByTagName("tr");
    console.log(tr);
    let isFinded;
    for (let i = 0; i < tr.length; i++) {
        isFinded = false;
        for (let j = 0; j < tr[i].childNodes.length; j++) {
            td = tr[i].getElementsByTagName("td")[j];
            if (td) {
                let txtValue = td.innerText || td.textContent;
                if (txtValue.indexOf(filter) > -1) {
                    isFinded = true;
                    if (!valueSearch.includes(filter)) {
                        valueSearch.push(filter);
                    }
                    console.log("filter: ", filter);
                    td.innerHTML = td.innerHTML.replace(
                        `${filter}`,
                        `<span class='highlight' style='display: inline-block;min-width: 0;'>${filter}</span>`
                    );
                }
            }
        }
        if (isFinded) {
            tr[i].classList.remove("hidden");
        } else {
            tr[i].classList.add("hidden");
        }
    }
}

var inputSearch = document.querySelector(".input-search");
inputSearch.addEventListener("keyup", () => {
    search(inputSearch.value);
});