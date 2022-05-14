//3
AFRAME.registerComponent("place-side-view", {
    //7
    init: function() {
        this.createPlaces();
    },
    //6
    tick: function() {
        const placesContainer = document.querySelector("#places-container");

        const { state } = placesContainer.getAttribute("tour");

        if (state === "view" || state === "change-view") {

            this.el.setAttribute("visible", true);
        } else {
            this.el.setAttribute("visible", false);
        }
    },
    //5
    createPlaces: function() {
        const sideViewContainer = document.querySelector(
            "#side-view-container"
        );

        let previousXPosition = -125;
        let previousYPosition = 30;

        for (var i = 1; i <= 4; i++) {
            const position = {
                x: (previousXPosition += 50),
                y: (previousYPosition += 2),
                z: -40
            };
            const entityEl = this.createPlaceThumbNail(position, i);
            sideViewContainer.appendChild(entityEl);
        }
    },
    //4
    createPlaceThumbNail: function(position, id) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);

        entityEl.setAttribute("id", `place-${id}`);

        entityEl.setAttribute("geometry", {
            primitive: "circle",
            radius: 2.5
        });

        entityEl.setAttribute("material", {
            src: "./assets/helicopter.png",
            opacity: 0.9
        });
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("cursor-listener", {});

        return entityEl;
    }
});