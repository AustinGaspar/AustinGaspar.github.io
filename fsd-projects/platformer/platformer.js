$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   toggleGrid()


    // TODO 2 - Create Platforms
createPlatform(100, 640, 25, 140)
createPlatform(300, 640, 25, 180)
createPlatform(500, 640, 25, 180)
createPlatform(700, 640, 25, 180)
createPlatform(900, 640, 25, 180)
createPlatform(1250, 640, 25, 200)
createPlatform(1350, 520, 80, 25)
createPlatform(1350, 390, 80, 25)
createPlatform(1350, 260, 80, 25)
createPlatform(1350, 140, 80, 25)
createPlatform(0, 260, 1250, 25)
createPlatform(0, 120, 1150, 25)

    // TODO 3 - Create Collectables
createCollectable("noli", 92, 50)
createCollectable("noli", 92, 190)
createCollectable("noli", 92, 570)
    
    // TODO 4 - Create Cannons
createCannon("right",820,0,50,50,)
createCannon("top",870,700,50,50,)
createCannon("bottom",550,500,50,50,)
createCannon("top",450,700,50,50,)
createCannon("bottom",150,500,50,50,)
createCannon("bottom",1300,3000,50,50,)

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
