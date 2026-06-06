const revenueCtx = document.getElementById("revenueChart");

new Chart(revenueCtx,{
type:"line",
data:{
labels:[
"1 Mai",
"5 Mai",
"10 Mai",
"15 Mai",
"20 Mai",
"25 Mai",
"31 Mai"
],
datasets:[{
label:"Revenus",
data:[
1200,
3500,
5200,
7900,
8700,
11500,
12450
],
borderColor:"#7c3aed",
backgroundColor:"rgba(124,58,237,.25)",
fill:true,
tension:.4
}]
},
options:{
responsive:true,
plugins:{
legend:{
display:false
}
},
scales:{
x:{
ticks:{color:"#94a3b8"},
grid:{color:"#182338"}
},
y:{
ticks:{color:"#94a3b8"},
grid:{color:"#182338"}
}
}
}
});

const pieCtx = document.getElementById("pieChart");

new Chart(pieCtx,{
type:"doughnut",
data:{
labels:[
"France",
"Europe",
"USA",
"Autres"
],
datasets:[{
data:[45,30,20,5],
backgroundColor:[
"#7c3aed",
"#2563eb",
"#10b981",
"#f59e0b"
]
}]
},
options:{
plugins:{
legend:{
labels:{
color:"white"
}
}
}
}
});

document
.getElementById("notifBtn")
.addEventListener("click",()=>{

alert("🔔 Aucune nouvelle notification");

});

document
.querySelectorAll(".menu")
.forEach(btn=>{

btn.addEventListener("click",()=>{

document
.querySelectorAll(".menu")
.forEach(x=>x.classList.remove("active"));

btn.classList.add("active");

});

});
