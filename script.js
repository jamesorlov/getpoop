document.addEventListener('DOMContentLoaded', function () {
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const World = Matter.World;
    const Bodies = Matter.Bodies;

    const engine = Engine.create();
    const render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: window.innerWidth,
            height: window.innerHeight,
            wireframes: false,
            background: '#000'
        }
    });

    const toilets = [];
    
    // Добавляем нижнюю границу
    const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 10, window.innerWidth, 20, { isStatic: true });
    World.add(engine.world, [ground]);

    document.addEventListener('click', function (e) {
        const toilet = Bodies.rectangle(e.clientX, e.clientY, 50, 50, { friction: 0.5, density: 0.01 });
        toilets.push(toilet);
        World.add(engine.world, [toilet]);
    });

    window.addEventListener('resize', function () {
        Render.canvas.width = window.innerWidth;
        Render.canvas.height = window.innerHeight;
        Matter.Body.setPosition(ground, { x: window.innerWidth / 2, y: window.innerHeight + 10 });
    });

    Engine.run(engine);
    Render.run(render);
});
