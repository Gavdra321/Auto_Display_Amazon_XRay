var nameList = [];
function start() {
    //setTimeout will check list every 5 seconds
    setTimeout(function() {
        //console.log("running...")
        //get all xray items without alerted class
        const xrayList = document.querySelectorAll(".xrayQuickViewListItem:not(.alerted)");
        xrayList.forEach(e=>{
            //Check if people should be alerted based on name list
            if (e.classList.contains("portraitImage")){
                let currName = e.querySelector('.primaryText').innerHTML;
                if (!nameList.includes(currName)){
                    nameList.push(currName);
                    //console.log("show b/c",e)
                    showXRay()
                } 
            }
            else{
                //not a person just show xray and add alerted class
                e.classList.add("alerted")
                //console.log("show b/c",e)
                showXRay()
            }
        });
        start();
    },  5000);
}

function showXRay(){
    const xray = document.getElementsByClassName("xrayQuickView")[0];
    if (!xray.classList.contains("show")) xray.classList.add("show");
    //show xray for 1 second
    setTimeout(()=>{
        xray.classList.remove("show");
    },1000);
}
//run it
start();