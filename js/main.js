document.querySelectorAll(".tombol").forEach((btn) => {
  btn.addEventListener("click", () => {
    const emotion = btn.getAttribute("data-emotion");
    const reaction = document.getElementById("reaction");

    // Bersihkan isi lama di elemen reaction
    reaction.innerHTML = "";

    // Buat elemen gambar untuk GIF
    const gif = document.createElement("img");
    gif.style.width = "100px"; // Ukuran yang lebih realistis untuk tampilan
    gif.style.height = "auto";

    // Buat elemen teks untuk reaksi
    const text = document.createElement("p");
    text.style.fontSize = "14px"; // Biar lebih besar dan jelas
    text.style.color = "#333";

    switch (emotion) {
      case "ceneng":
        gif.src = "asset/uwu.gif";
        text.textContent = "Wah, senangnya! Jawir juga ikut happy! 🌟";
        break;
      case "cedih":
        gif.src = "asset/pigride.gif";
        text.textContent = "Kalo cedih ikut jawir begal aja yuk! Naik BaBi";
        break;
      case "cebel":
        gif.src = "asset/pigsad.gif";
        text.textContent = "Upss! Maafin Jawir yaa 😢";
        break;
      case "cafek":
        gif.src = "asset/bear.gif";
        text.textContent = "Capek? Yuk istirahat dulu! 💤";
        break;
    }

    // Tambahkan elemen GIF dan teks ke dalam reaction
    reaction.appendChild(gif);
    reaction.appendChild(text);
  });
});
