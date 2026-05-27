const hr = document.getElementById('hour');
     const min = document.getElementById('minute');
     const sec = document.getElementById('second');
     const pa = document.getElementById('ampm');
     
     function clock(){
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        let ampm = "AM";

        if (h > 12) {
            h = h - 12;
            ampm = "PM";
        }

        hr.innerText = h;
        min.innerText = m;
        sec.innerText = s;
        pa.innerText = ampm;
        
     setTimeout(() => {
        clock();
    }, 1000);
}

clock();