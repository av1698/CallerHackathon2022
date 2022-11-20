let pool;

let parentPoolList = document.querySelectorAll("#parentDropdown ul li");
for (let i = 0; i < parentPoolList.length; i++) {
    parentPoolList[i].addEventListener('click', listItem);
}


function listItem(e) {
    for (let j = 0; j < parentPoolList.length; j++) {
        parentPoolList[j].classList.remove("newBorder")
    }

    e.target.classList.add("newBorder")
    pool = e.target.id;
    console.log(pool);
}

const confirmParentPoolb = document.querySelector("#confirmParent");

const FireEmailSend = () => {
    if (pool === undefined) {
        alert("Please selected a pool");
        return;
    }
    console.log("Selected pool:" + pool);
    //fire database query
}

confirmParentPoolb.addEventListener('click', FireEmailSend);






