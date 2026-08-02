const raw = "1,H,Hidrógeno,No metal,1,1|2,He,Helio,Gas noble,18,1|3,Li,Litio,Metal alcalino,1,2|4,Be,Berilio,Metal alcalinotérreo,2,2|5,B,Boro,Metaloide,13,2|6,C,Carbono,No metal,14,2|7,N,Nitrógeno,No metal,15,2|8,O,Oxígeno,No metal,16,2|9,F,Flúor,Halógeno,17,2|10,Ne,Neón,Gas noble,18,2|11,Na,Sodio,Metal alcalino,1,3|12,Mg,Magnesio,Metal alcalinotérreo,2,3|13,Al,Aluminio,Metal post-transicional,13,3|14,Si,Silicio,Metaloide,14,3|15,P,Fósforo,No metal,15,3|16,S,Azufre,No metal,16,3|17,Cl,Cloro,Halógeno,17,3|18,Ar,Argón,Gas noble,18,3|19,K,Potasio,Metal alcalino,1,4|20,Ca,Calcio,Metal alcalinotérreo,2,4|21,Sc,Escandio,Metal de transición,3,4|22,Ti,Titanio,Metal de transición,4,4|23,V,Vanadio,Metal de transición,5,4|24,Cr,Cromo,Metal de transición,6,4|25,Mn,Manganeso,Metal de transición,7,4|26,Fe,Hierro,Metal de transición,8,4|27,Co,Cobalto,Metal de transición,9,4|28,Ni,Níquel,Metal de transición,10,4|29,Cu,Cobre,Metal de transición,11,4|30,Zn,Zinc,Metal de transición,12,4|31,Ga,Galio,Metal post-transicional,13,4|32,Ge,Germanio,Metaloide,14,4|33,As,Arsénico,Metaloide,15,4|34,Se,Selenio,No metal,16,4|35,Br,Bromo,Halógeno,17,4|36,Kr,Criptón,Gas noble,18,4|37,Rb,Rubidio,Metal alcalino,1,5|38,Sr,Estroncio,Metal alcalinotérreo,2,5|39,Y,Itrio,Metal de transición,3,5|40,Zr,Circonio,Metal de transición,4,5|41,Nb,Niobio,Metal de transición,5,5|42,Mo,Molibdeno,Metal de transición,6,5|43,Tc,Tecnecio,Metal de transición,7,5|44,Ru,Rutenio,Metal de transición,8,5|45,Rh,Rodio,Metal de transición,9,5|46,Pd,Paladio,Metal de transición,10,5|47,Ag,Plata,Metal de transición,11,5|48,Cd,Cadmio,Metal de transición,12,5|49,In,Indio,Metal post-transicional,13,5|50,Sn,Estaño,Metal post-transicional,14,5|51,Sb,Antimonio,Metaloide,15,5|52,Te,Telurio,Metaloide,16,5|53,I,Yodo,Halógeno,17,5|54,Xe,Xenón,Gas noble,18,5|55,Cs,Cesio,Metal alcalino,1,6|56,Ba,Bario,Metal alcalinotérreo,2,6|57,La,Lantano,Lantánido,3,9|58,Ce,Cerio,Lantánido,4,9|59,Pr,Praseodimio,Lantánido,5,9|60,Nd,Neodimio,Lantánido,6,9|61,Pm,Prometio,Lantánido,7,9|62,Sm,Samario,Lantánido,8,9|63,Eu,Europio,Lantánido,9,9|64,Gd,Gadolinio,Lantánido,10,9|65,Tb,Terbio,Lantánido,11,9|66,Dy,Disprosio,Lantánido,12,9|67,Ho,Holmio,Lantánido,13,9|68,Er,Erbio,Lantánido,14,9|69,Tm,Tulio,Lantánido,15,9|70,Yb,Iterbio,Lantánido,16,9|71,Lu,Lutecio,Lantánido,17,9|72,Hf,Hafnio,Metal de transición,4,6|73,Ta,Tántalo,Metal de transición,5,6|74,W,Wolframio,Metal de transición,6,6|75,Re,Renio,Metal de transición,7,6|76,Os,Osmio,Metal de transición,8,6|77,Ir,Iridio,Metal de transición,9,6|78,Pt,Platino,Metal de transición,10,6|79,Au,Oro,Metal de transición,11,6|80,Hg,Mercurio,Metal de transición,12,6|81,Tl,Talio,Metal post-transicional,13,6|82,Pb,Plomo,Metal post-transicional,14,6|83,Bi,Bismuto,Metal post-transicional,15,6|84,Po,Polonio,Metaloide,16,6|85,At,Astato,Halógeno,17,6|86,Rn,Radón,Gas noble,18,6|87,Fr,Francio,Metal alcalino,1,7|88,Ra,Radio,Metal alcalinotérreo,2,7|89,Ac,Actinio,Actínido,3,10|90,Th,Torio,Actínido,4,10|91,Pa,Protactinio,Actínido,5,10|92,U,Uranio,Actínido,6,10|93,Np,Neptunio,Actínido,7,10|94,Pu,Plutonio,Actínido,8,10|95,Am,Americio,Actínido,9,10|96,Cm,Curio,Actínido,10,10|97,Bk,Berkelio,Actínido,11,10|98,Cf,Californio,Actínido,12,10|99,Es,Einstenio,Actínido,13,10|100,Fm,Fermio,Actínido,14,10|101,Md,Mendelevio,Actínido,15,10|102,No,Nobelio,Actínido,16,10|103,Lr,Lawrencio,Actínido,17,10|104,Rf,Rutherfordio,Metal de transición,4,7|105,Db,Dubnio,Metal de transición,5,7|106,Sg,Seaborgio,Metal de transición,6,7|107,Bh,Bohrio,Metal de transición,7,7|108,Hs,Hassio,Metal de transición,8,7|109,Mt,Meitnerio,Metal de transición,9,7|110,Ds,Darmstadtio,Metal de transición,10,7|111,Rg,Roentgenio,Metal de transición,11,7|112,Cn,Copernicio,Metal de transición,12,7|113,Nh,Nihonio,Metal post-transicional,13,7|114,Fl,Flerovio,Metal post-transicional,14,7|115,Mc,Moscovio,Metal post-transicional,15,7|116,Lv,Livermorio,Metal post-transicional,16,7|117,Ts,Teneso,Halógeno,17,7|118,Og,Oganesón,Gas noble,18,7";

const elementsData = raw.split('|').map(item => {
    const p = item.split(',');
    return { n: p[0], s: p[1], name: p[2], cat: p[3], x: p[4], y: p[5] };
});

const configs = {
    'mp-aes': {
        name: 'Agilent MP-AES 4210',
        elements: ['Mo', 'Ni', 'Se', 'Sr', 'K', 'Mn', 'Cd', 'Zn', 'Pb', 'Ba', 'Co', 'Cu', 'Fe', 'Al', 'Ca', 'Cr', 'As']
    },
    'aa240': {
        name: 'Agilent AA240',
        elements: ['K', 'Zn', 'Cu', 'Ca', 'Au', 'Ag']
    }
};

function initPeriodicTable() {
    const container = document.getElementById('periodic-table');
    if (!container) return;

    const equipoId = container.getAttribute('data-equipo');
    const config = configs[equipoId] || { name: 'Desconocido', elements: [] };
    
    // Crear Tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'pt-tooltip';
    document.body.appendChild(tooltip);

    // Crear Cuadrícula
    const grid = document.createElement('div');
    grid.className = 'periodic-grid';

    elementsData.forEach(el => {
        const cell = document.createElement('div');
        cell.className = 'element-cell';
        cell.style.gridColumn = el.x;
        cell.style.gridRow = el.y;

        const isAvailable = config.elements.includes(el.s);
        if (isAvailable) {
            cell.classList.add('available');
            
            // Eventos para interactividad
            cell.addEventListener('mouseenter', () => {
                tooltip.innerHTML = `
                    <h4>${el.name} (${el.s}) <span style="float:right; opacity:0.7;">#${el.n}</span></h4>
                    <p>${el.cat}</p>
                    <div class="status"><i class="fas fa-check-circle"></i> Disponible para ${config.name}</div>
                `;
                tooltip.classList.add('visible');
            });
            
            cell.addEventListener('mousemove', (e) => {
                let x = e.pageX + 15;
                let y = e.pageY + 15;
                if (x + 220 > window.innerWidth) x = e.pageX - 240;
                tooltip.style.left = x + 'px';
                tooltip.style.top = y + 'px';
            });
            
            cell.addEventListener('mouseleave', () => {
                tooltip.classList.remove('visible');
            });
        } else {
            cell.classList.add('unavailable');
        }

        cell.innerHTML = `
            <div class="number">${el.n}</div>
            <div class="symbol">${el.s}</div>
        `;
        
        grid.appendChild(cell);
    });

    // Separadores visuales (Lantánidos/Actínidos)
    const renderGap = (symbol, row) => {
        const gap = document.createElement('div');
        gap.style.gridColumn = '3';
        gap.style.gridRow = row;
        gap.style.textAlign = 'center';
        gap.style.alignSelf = 'center';
        gap.innerHTML = symbol;
        grid.appendChild(gap);
    };
    renderGap('*', '6'); // Lantánidos
    renderGap('**', '7'); // Actínidos

    const legend = document.createElement('div');
    legend.className = 'pt-legend';
    legend.innerHTML = `
        <div class="legend-item"><div class="legend-box available"></div><span>Elemento Disponible</span></div>
        <div class="legend-item"><div class="legend-box unavailable"></div><span>No Disponible en este equipo</span></div>
    `;

    container.appendChild(grid);
    container.appendChild(legend);
}

document.addEventListener('DOMContentLoaded', initPeriodicTable);
