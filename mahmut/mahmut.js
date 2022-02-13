let myname = prompt("Adınız")
//let myname = "Mehmet"

let add_name = document.querySelector("#myName")
add_name.innerHTML = myname

function get_time() {
    const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    const aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz","Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
    const d = new Date()
    let sa = d.getHours()
    let dk = d.getMinutes()
    let sn = d.getSeconds()
    let day = d.getUTCDate()
    let month = aylar[d.getMonth()]
    let year = d.getUTCFullYear()
    let gun = weekday[d.getDay()]
    let zaman = `${(sa<10 ? `0${sa}` : sa)}:${(dk<10 ? `0${dk}` : dk)}:${(sn<10 ? `0${sn}` : sn)} <br/>
    ${(day<10 ? `0${day}` : day)} ${month} ${year} ${gun}`
    return zaman    
}

function showTime() {
    setInterval(function(){
        let saat = document.querySelector("#myClock")   
        saat.innerHTML = get_time() 
    },1000)
}
showTime()


 

