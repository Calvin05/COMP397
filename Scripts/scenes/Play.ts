module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        // playLabel:objects.Label;
        // nextButton:objects.Button;
        private _ocean: objects.Ocean;
        private _plane: objects.Plane;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
        
            this._ocean = new objects.Ocean();
            this._plane = new objects.Plane();
            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
           
            this._ocean = new objects.Ocean();
            this._plane = new objects.Plane();
            this._plane.position.y = 430;
            this.Main();
        }        
        
        public Update(): void 
        {
            this._ocean.Update();
            this._plane.Update();
        }
        
        public Main(): void {
            
            this.addChild(this._ocean);
            this.addChild(this._plane)
    
            // this.nextButton.on("click", function() {
            //    config.Game.SCENE_STATE = scenes.State.END;
            // });
        }

        
    }
}