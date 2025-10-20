console.log("Hamburguer icon cargado");

(function () {
    const MAIN_OBJ = {
        init: function () {
            this.eventhandlers();
        },
        eventhandlers: function () {
            const btn = document.querySelector('.hamburguer-icon');
            const container = document.querySelector('.menu-container');
            if (!btn || !container) return;
            btn.addEventListener('click', function () {
                container.classList.toggle('menu-open');
            });
        }
    }
    MAIN_OBJ.init();
})();