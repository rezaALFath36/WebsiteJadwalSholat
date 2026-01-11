fetch("https://api.myquran.com/v2/sholat/jadwal/1634/2025/11/15")
  .then(response => response.json())
  .then(data => {
    
    const jadwal = data.data.jadwal;
    
    document.getElementById("imsak").textContent = jadwal.imsak;
    document.getElementById("terbit").textContent = jadwal.terbit;
    document.getElementById("dhuha").textContent = jadwal.dhuha;
    document.getElementById("subuh").textContent = jadwal.subuh;
    document.getElementById("dzuhur").textContent = jadwal.dzuhur;
    document.getElementById("ashar").textContent = jadwal.ashar;
    document.getElementById("maghrib").textContent = jadwal.maghrib;
    document.getElementById("isya").textContent = jadwal.isya;

    
  })
  .catch(error => console.error(error));
