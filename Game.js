function create() {
    let circle1 = this.add.circle(50, 100, 90, 0xFFF070);
    let circle2 = this.add.circle(95, 300, 80, 0xFF0000);
    let circle3 = this.add.circle(200, 200, 100, 0x9F00D0);
    let circle4 = this.add.circle(300, 400, 10, 0x00E030);
    let circle5 = this.add.circle(650, 300, 100, 0x00E030);
    let circle6 = this.add.circle(800, 300, 100, 0x80391e);
  
    // Add in a circle here!
  
  }
  
  const config = {
      type: Phaser.AUTO,
      width: innerWidth,
      height: innerHeight,
      backgroundColor:'#38abca',
      scene: {
      create
      },
      physics: {
        default: 'arcade',
        arcade: {
            gravity: {y:10, x:0},
            debug:false
        }
      }

  }

  
  const game = new Phaser.Game(config)
  
