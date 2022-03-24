const colorPalette = {
    colors: [],
    methods: {
        createRandomColors: (() => {
            for (let index = 0; index < 4; index++) {
                let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                colorPalette.colors[index] = randomColor;
            }
        }),
        render: (() => {
            let html = '';
            colorPalette.colors.forEach((color, index) => {
                html += `
                <div id="color-container${index+1}" style="background-color:#${color}" class="color-container">
                    <div class="color-info">
                        <h3 id="color-name${index+1}">#${color.toUpperCase()}</h3>
                    </div>
                </div>
                `
            });
            return html;
        }) 
    }
}

colorPalette.methods.createRandomColors();
// console.log(colorPalette.methods.render());

const generatorContainer = document.getElementById("generator");
generatorContainer.innerHTML = colorPalette.methods.render();


const botonContainer = document.getElementById('btn-row');

botonContainer.addEventListener('click', (evento) => {
    // console.log(evento.target.id);
    if (evento.target.id === 'generate'){
        colorPalette.methods.createRandomColors();
        generatorContainer.innerHTML = colorPalette.methods.render();
    }
});