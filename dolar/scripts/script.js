
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-1639559-7', { 'anonymize_ip': true });




elEst = a2('estrangeiro');
elNac = a2('nacional');
spans = [elEst.parentElement, elNac.parentElement];
isActivated = false;
isMobile = (navigator.userAgent || navigator.vendor).toLowerCase().indexOf("mobile") > -1;
function a0(fileLocation, async, onLoadFunction) {var script = document.createElement('script');
script.src = fileLocation;
script.async = async;
document.getElementsByTagName('head')[0].appendChild(script);
script.onload = onLoadFunction;
}function a1() {var userAgent = navigator.userAgent || navigator.vendor;
  return (userAgent.toLowerCase().indexOf("mobile") == -1) && (userAgent.toLowerCase().indexOf("chrome") > -1);
}function a2(id) {return document.getElementById(id);
}function a3(number) {if (Math.abs(number) < 1.0) {var e = parseInt(number.toString().split('e-')[1]);
if (e) {number *= Math.pow(10,e-1);
  number = '0.' + (new Array(e)).join('0') + number.toString().substring(2);
}} else {var e = parseInt(number.toString().split('+')[1]);
if (e > 20) {e -= 20;
  number /= Math.pow(10,e);
  number += (new Array(e+1)).join('0');
}}return number;
}
function a4(str, token) {var parts = str.split(token);
  if (parts[1] === undefined) {return str;
}
else {return parts.slice(0,-1).join('') + token + parts.slice(-1);
}

}function a5(elDigitado, elDestino) 
{var formattedNumber = elDigitado.value;
      formattedNumber = formattedNumber.replace(/\.$/g, "");    
      formattedNumber = formattedNumber.replace(/\./g, ',');    
      formattedNumber = formattedNumber.replace(/[^0-9\.,]/g, "");    
      formattedNumber = formattedNumber.replace(/(\d+)\.(\d+),/g, "$1$2,");    
      formattedNumber = a4(formattedNumber, ',');
  elDigitado.value = formattedNumber;
  var txtDigitado = parseFloat(elDigitado.value.replace(',', '.'));
  if (isNaN(txtDigitado)) {elDestino.value = "0,00";
  return;
}var result;
if (elDigitado == elNac) {result = (txtDigitado /5.35);
}else {result = (txtDigitado *5.35);
}result = result.toFixed(2);
result = a3(result) + "";
result = result.replace(/\./, ',');
elDestino.value = result;
}function a6(){document.body.className = document.body.className.replace(/activated/g, "");
}function a7(){if (!document.body.className.match(/activated/)) {document.body.className += " activated";
}}function a8(el) {if (el.value.length > 10) {el.style.width = "6.7em";
} else if (el.value.length < 3) {el.style.width = (el.value.length * 0.65) + "em";
} else {el.style.width = (el.value.length * 0.65 - 0.3) + "em";}}function a8s() {a8(elEst);
  a8(elNac);
}function aa() {elEst.style.width = elNac.style.width = 6.6+"em";
}function ab() {a8s();
}function ac(el) {if (!el.value.match(/\d/)) {el.value = "0,00";
} else if (el.value.match(/^\d+(,\d*)?$/)) {el.value = parseFloat(el.value.replace(',', '.')).toFixed(2).replace('.', ',');
}}elEst.onfocus = elNac.onfocus = function() {aa();
  a7();
  isActivated = true;
  var $this = this;
  window.setTimeout(function(){ $this.select();
   }, 300);
   if (isMobile) {document.getElementById('cotacao').scrollIntoView();    }};elEst.onblur = elNac.onblur = function() {ac(this);    window.setTimeout(function(){if (!isActivated) {ab();a6();}}, 300);isActivated = false;
  };
  spans[0].onmouseover = spans[1].onmouseover = function() {if (!isActivated) {a7();
  }};
  spans[0].onmousedown = spans[1].onmousedown = spans[0].onclick = spans[1].onclick = function(event) {if (event.target.tagName != "INPUT") {var input = event.currentTarget.getElementsByTagName('input')[0];window.setTimeout(function(){input.select();
    input.focus();
  }, 100);
}};
spans[0].onmouseout = spans[1].onmouseout = function() {if (!isActivated) {a6();}};if (!isActivated) {a8s();}elEst.onkeyup = function(event) {if (!event) { event = window.event; }if (event.keyCode != 9) { a5(this, elNac);
 }  };
 elNac.onkeyup = function(event) {if (!event) { event = window.event;
 }if (event.keyCode != 9) { a5(this, elEst);
 }};
 if (a1()) {document.getElementById("aviso_chrome").className += " is";
}if (isMobile) {document.body.className = 'mobile';
} else {document.body.className = 'desktop';
}document.getElementById('breadcrumb').getElementsByTagName('span')[0].innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" class="arrow" width="14" height="14" viewBox="0 0 24 24"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/></svg>';
(function(){a2('more-button').onclick = function(){if (document.body.className.match(/show-content/)) {document.body.className = document.body.className.replace(/\sshow-content/, '');
} else {document.body.className += ' show-content';
}return false;
};
})();
function ad(element, offset){var rect = element.getBoundingClientRect();
  return (rect.top - offset) <= (window.innerHeight || document.documentElement.clientHeight);
}var ctx = document.getElementById('chart-canvas');
var isChartLoaded = false;
window.onscroll = function(e) {if (ad(ctx, 200) && !isChartLoaded) {isChartLoaded = true;
  if (ctx) {a0('/js/chart.min.js', true, function(){Chart.plugins.register({afterDatasetsDraw: function(chart) {if (chart.tooltip._active && chart.tooltip._active.length) {var activePoint = chart.tooltip._active[0],ctx = chart.ctx,y_axis = chart.scales['y-axis-0'],x = activePoint.tooltipPosition().x,topY = activePoint._model.y+6,bottomY = y_axis.bottom;ctx.save();
  ctx.setLineDash([2, 2]);
  ctx.beginPath();
  ctx.moveTo(x, topY);
  ctx.lineTo(x, bottomY);
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#ddd';
  ctx.stroke();
  ctx.restore();
}}});
Chart.Tooltip.positioners.custom = function(elements, eventPosition) {var tooltip = this;
  return {x: elements[0]._chart.tooltip._active[0].tooltipPosition().x,y: elements[0]._chart.tooltip._active[0].tooltipPosition().y - 1};
};
var options = {};
var data = document.querySelectorAll('table.chart-data tbody tr');
var newData = [];
for (var i = 0; i < data.length; i++) {var els = data[i].getElementsByTagName('td');
  newData.push({ cotacaoVenda: els[1].innerText, dataCotacao: els[0].innerText.replace(/\/0?(\d+)/, '/$1')});
}newData.reverse();
if (newData.length > 0) {var meses = ['jan.','fev.','mar.','abr.','mai.','jun.','jul.','ago.','set.','out.','nov.','dez.',];
  var labels = [];
  var points = [];
  for (var i = 0; i < newData.length; i++) {var dataCotacao = newData[i]['dataCotacao'].split('/').join(' de ');
  for (var x = 1; x < 13; x++){dataCotacao = dataCotacao.replace(' de ' + x + ' de ', ' de ' + meses[x-1] + ' de ')}labels.push(dataCotacao);
  points.push(parseFloat(newData[i]['cotacaoVenda'].replace('R$', '').replace(',', '.')));
}var minValue = Math.min.apply(null, points);
var maxValue = Math.max.apply(null, points);
new Chart(ctx, {type: 'line',responsive: true,line: {borderDash: '1px'},data: {labels: labels,datasets: [{ borderColor: '#50ae55',data: points,fill: false,label: '',lineTension: 0,pointColor: '#50ae55',pointBackgroundColor: '#50ae55',pointRadius: 0}]},options: {animation: false,legend: {display: false},scales: {yAxes: [{gridLines: {drawBorder: false},ticks: {display: true,callback: function(value, index, values){return value.toFixed(2).replace('.', ',')},maxTicksLimit: 5,stepSize: 0.1}}],xAxes: [{gridLines: {display: false},ticks: {autoSkip: false,minRotation: 0,maxRotation: 0,callback: function(value, index, values) {if ((index == 15) || (index == (values.length - 15))) {return value;
}}}}]},
tooltips: {position: 'custom',intersect: false,mode: 'index',displayColors: false,callbacks: 
{title: function()
    {return;
},label: function(tooltipItem) {return ' R$ ' + tooltipItem.yLabel.toFixed(2).replace('.', ',') + '   ' + tooltipItem.xLabel;}},xAlign: 'center',yAlign: 'bottom'}}});
} else {a2('chart').innerText = "Gráfico indisponível no momento.";}});}}};var storageName = 'privacyCheck';var privacyWarningEl = a2('privacy-warning');
if (!localStorage.getItem(storageName)) {privacyWarningEl.style.display = 'flex';
}a2('privacy-close').onclick = function(){localStorage.setItem(storageName, true);
  privacyWarningEl.style.display = 'none';
};