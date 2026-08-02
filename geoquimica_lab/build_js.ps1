import json
import urllib.request
import re

url = 'https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json'
req = urllib.request.urlopen(url)
data = json.loads(req.read())

translations = {
    'diatomic nonmetal': 'No metal diatómico',
    'noble gas': 'Gas noble',
    'alkali metal': 'Metal alcalino',
    'alkaline earth metal': 'Metal alcalinotérreo',
    'metalloid': 'Metaloide',
    'polyatomic nonmetal': 'No metal poliatómico',
    'post-transition metal': 'Metal post-transicional',
    'transition metal': 'Metal de transición',
    'lanthanide': 'Lantánido',
    'actinide': 'Actínido',
    'unknown, probably transition metal': 'Metal de transición (probablemente)',
    'unknown, probably post-transition metal': 'Metal post-transicional (probablemente)',
    'unknown, probably metalloid': 'Metaloide (probablemente)',
    'unknown, predicted to be noble gas': 'Gas noble (predicho)',
    'unknown, but predicted to be an alkali metal': 'Metal alcalino (predicho)'
}

elements = []
for el in data['elements']:
    cat = el.get('category', 'unknown')
    cat_es = translations.get(cat, cat.title())
    
    # Spanish names for some common elements since API is english
    # A generic simple replacement for the required ones
    name_es = el['name']
    es_names = {
        'Hydrogen': 'Hidrógeno', 'Helium': 'Helio', 'Lithium': 'Litio', 'Beryllium': 'Berilio',
        'Boron': 'Boro', 'Carbon': 'Carbono', 'Nitrogen': 'Nitrógeno', 'Oxygen': 'Oxígeno',
        'Fluorine': 'Flúor', 'Neon': 'Neón', 'Sodium': 'Sodio', 'Magnesium': 'Magnesio',
        'Aluminum': 'Aluminio', 'Silicon': 'Silicio', 'Phosphorus': 'Fósforo', 'Sulfur': 'Azufre',
        'Chlorine': 'Cloro', 'Argon': 'Argón', 'Potassium': 'Potasio', 'Calcium': 'Calcio',
        'Scandium': 'Escandio', 'Titanium': 'Titanio', 'Vanadium': 'Vanadio', 'Chromium': 'Cromo',
        'Manganese': 'Manganeso', 'Iron': 'Hierro', 'Cobalt': 'Cobalto', 'Nickel': 'Níquel',
        'Copper': 'Cobre', 'Zinc': 'Zinc', 'Gallium': 'Galio', 'Germanium': 'Germanio',
        'Arsenic': 'Arsénico', 'Selenium': 'Selenio', 'Bromine': 'Bromo', 'Krypton': 'Criptón',
        'Rubidium': 'Rubidio', 'Strontium': 'Estroncio', 'Yttrium': 'Itrio', 'Zirconium': 'Circonio',
        'Niobium': 'Niobio', 'Molybdenum': 'Molibdeno', 'Technetium': 'Tecnecio', 'Ruthenium': 'Rutenio',
        'Rhodium': 'Rodio', 'Palladium': 'Paladio', 'Silver': 'Plata', 'Cadmium': 'Cadmio',
        'Indium': 'Indio', 'Tin': 'Estaño', 'Antimony': 'Antimonio', 'Tellurium': 'Telurio',
        'Iodine': 'Yodo', 'Xenon': 'Xenón', 'Cesium': 'Cesio', 'Barium': 'Bario',
        'Lanthanum': 'Lantano', 'Cerium': 'Cerio', 'Praseodymium': 'Praseodimio', 'Neodymium': 'Neodimio',
        'Promethium': 'Prometio', 'Samarium': 'Samario', 'Europium': 'Europio', 'Gadolinium': 'Gadolinio',
        'Terbium': 'Terbio', 'Dysprosium': 'Disprosio', 'Holmium': 'Holmio', 'Erbium': 'Erbio',
        'Thulium': 'Tulio', 'Ytterbium': 'Iterbio', 'Lutetium': 'Lutecio', 'Hafnium': 'Hafnio',
        'Tantalum': 'Tántalo', 'Tungsten': 'Wolframio', 'Rhenium': 'Renio', 'Osmium': 'Osmio',
        'Iridium': 'Iridio', 'Platinum': 'Platino', 'Gold': 'Oro', 'Mercury': 'Mercurio',
        'Thallium': 'Talio', 'Lead': 'Plomo', 'Bismuth': 'Bismuto', 'Polonium': 'Polonio',
        'Astatine': 'Astato', 'Radon': 'Radón', 'Francium': 'Francio', 'Radium': 'Radio',
        'Actinium': 'Actinio', 'Thorium': 'Torio', 'Protactinium': 'Protactinio', 'Uranium': 'Uranio'
    }
    
    name_es = es_names.get(name_es, name_es)

    elements.append({
        'symbol': el['symbol'],
        'name': name_es,
        'number': el['number'],
        'category': cat_es,
        'xpos': el['xpos'],
        'ypos': el['ypos']
    })

js_code = 'const elementsData = ' + json.dumps(elements, indent=4, ensure_ascii=False) + ';\n\n'

js_code += '''
const equiposConfig = {
    'mp-aes': {
        name: 'Agilent MP-AES 4210',
        elements: ['Mo', 'Ni', 'Se', 'Sr', 'K', 'Mn', 'Cd', 'Zn', 'Pb', 'Ba', 'Co', 'Cu', 'Fe', 'Al', 'Ca', 'Cr', 'As']
    },
    'aa240': {
        name: 'Agilent AA240',
        elements: ['K', 'Zn', 'Cu', 'Ca', 'Au', 'Ag']
    }
};

function renderTable() {
    const container = document.getElementById('periodic-table-container');
    if (!container) return;

    const equipoId = container.getAttribute('data-equipo');
    const config = equiposConfig[equipoId] || { name: 'Desconocido', elements: [] };
    const availableElements = config.elements;

    // Create Tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'element-tooltip';
    document.body.appendChild(tooltip);

    const grid = document.createElement('div');
    grid.className = 'periodic-grid';

    elementsData.forEach(el => {
        const cell = document.createElement('div');
        // Sanitizar clase de categoría
        const catClass = el.category.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
        
        cell.className = \element-cell category-\\;
        cell.style.gridColumn = el.xpos;
        cell.style.gridRow = el.ypos;
        
        const isAvailable = availableElements.includes(el.symbol);
        if (!isAvailable) {
            cell.classList.add('unavailable');
        } else {
            cell.classList.add('available');
        }

        cell.innerHTML = \
            <span class="atomic-number">\</span>
            <span class="symbol">\</span>
            <span class="name">\</span>
        \;

        if (isAvailable) {
            cell.addEventListener('mouseenter', (e) => {
                tooltip.innerHTML = \
                    <h4>\ (\) - \</h4>
                    <p class="category">\</p>
                    <p class="status"><i class="fas fa-check-circle"></i> Disponible para análisis en \</p>
                \;
                tooltip.classList.add('visible');
            });
            cell.addEventListener('mousemove', (e) => {
                // Ensure tooltip stays within viewport
                let x = e.pageX + 15;
                let y = e.pageY + 15;
                if (x + 250 > window.innerWidth) x = e.pageX - 265;
                tooltip.style.left = x + 'px';
                tooltip.style.top = y + 'px';
            });
            cell.addEventListener('mouseleave', () => {
                tooltip.classList.remove('visible');
            });
        }

        grid.appendChild(cell);
    });

    const legend = document.createElement('div');
    legend.className = 'table-legend';
    legend.innerHTML = \
        <div class="legend-item"><div class="box available" style="background:var(--accent-color);"></div><span>Elemento Disponible</span></div>
        <div class="legend-item"><div class="box unavailable" style="opacity:0.3; background:#ccc;"></div><span>No Disponible en esta matriz</span></div>
    \;

    container.appendChild(grid);
    container.appendChild(legend);
}

document.addEventListener('DOMContentLoaded', renderTable);
'''

with open('tabla-periodica.js', 'w', encoding='utf-8') as f:
    f.write(js_code)
